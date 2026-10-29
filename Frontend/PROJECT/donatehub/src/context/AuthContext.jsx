import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const SESSION_KEY = 'donatehub_session'
const OTP_KEY = 'donatehub_pending_otp'

// Demo-only: phone numbers listed here log in with the admin role.
// In production, role should come from your backend after verifying
// the OTP, never from the client.
const ADMIN_PHONES = ['+919999999999', '9999999999']

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000))
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY)
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user))
    else localStorage.removeItem(SESSION_KEY)
  }, [user])

  // Step 1: request an OTP for a phone number.
  // Returns the OTP so the demo UI can display it (stand-in for an SMS gateway).
  function requestOtp(phone) {
    const otp = generateOtp()
    const payload = { phone, otp, expiresAt: Date.now() + 5 * 60 * 1000 }
    sessionStorage.setItem(OTP_KEY, JSON.stringify(payload))
    return otp
  }

  // Step 2: verify the code the user typed in.
  function verifyOtp(phone, code) {
    const raw = sessionStorage.getItem(OTP_KEY)
    if (!raw) return { ok: false, error: 'No OTP was requested. Please request a new code.' }
    const pending = JSON.parse(raw)
    if (pending.phone !== phone) return { ok: false, error: 'Phone number does not match the requested OTP.' }
    if (Date.now() > pending.expiresAt) return { ok: false, error: 'This code has expired. Request a new one.' }
    if (pending.otp !== code) return { ok: false, error: 'Incorrect code. Please try again.' }

    const role = ADMIN_PHONES.includes(phone) ? 'admin' : 'donor'
    const loggedInUser = { phone, role, loggedInAt: Date.now() }
    setUser(loggedInUser)
    sessionStorage.removeItem(OTP_KEY)
    return { ok: true, user: loggedInUser }
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, requestOtp, verifyOtp, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
