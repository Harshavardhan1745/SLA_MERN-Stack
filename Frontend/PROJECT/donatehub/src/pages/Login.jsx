import React, { useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function normalizePhone(raw) {
  return raw.trim().replace(/[\s-]/g, '')
}

export default function Login() {
  const { requestOtp, verifyOtp } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.state?.from || '/'

  const [phone, setPhone] = useState('')
  const [stage, setStage] = useState('phone') // 'phone' | 'otp'
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', ''])
  const [devOtp, setDevOtp] = useState('') // shown only because there's no real SMS gateway in this demo
  const [error, setError] = useState('')
  const [resendIn, setResendIn] = useState(0)
  const inputsRef = useRef([])

  function handleSendOtp(e) {
    e.preventDefault()
    setError('')
    const cleaned = normalizePhone(phone)
    if (!/^\+?\d{10,13}$/.test(cleaned)) {
      setError('Enter a valid phone number, e.g. +91 98765 43210')
      return
    }
    const otp = requestOtp(cleaned)
    setPhone(cleaned)
    setDevOtp(otp)
    setStage('otp')
    setOtpDigits(['', '', '', '', '', ''])
    startResendTimer()
  }

  function startResendTimer() {
    setResendIn(30)
    const t = setInterval(() => {
      setResendIn((s) => {
        if (s <= 1) { clearInterval(t); return 0 }
        return s - 1
      })
    }, 1000)
  }

  function handleDigitChange(i, val) {
    if (!/^\d?$/.test(val)) return
    const next = [...otpDigits]
    next[i] = val
    setOtpDigits(next)
    if (val && i < 5) inputsRef.current[i + 1]?.focus()
  }

  function handleDigitKeyDown(i, e) {
    if (e.key === 'Backspace' && !otpDigits[i] && i > 0) {
      inputsRef.current[i - 1]?.focus()
    }
  }

  function handleVerify(e) {
    e.preventDefault()
    setError('')
    const code = otpDigits.join('')
    if (code.length !== 6) {
      setError('Enter the full 6-digit code.')
      return
    }
    const result = verifyOtp(phone, code)
    if (!result.ok) {
      setError(result.error)
      return
    }
    navigate(result.user.role === 'admin' ? '/admin' : redirectTo, { replace: true })
  }

  function handleResend() {
    if (resendIn > 0) return
    const otp = requestOtp(phone)
    setDevOtp(otp)
    startResendTimer()
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <span className="mb-2 font-mono text-xs text-forest">step {stage === 'phone' ? '1' : '2'} of 2</span>
      <h1 className="font-display text-3xl font-semibold text-ink">
        {stage === 'phone' ? 'Log in with your phone' : 'Enter the code'}
      </h1>
      <p className="mt-2 text-sm text-ink/60">
        {stage === 'phone'
          ? 'No password needed — we\'ll text you a one-time code.'
          : `We sent a 6-digit code to ${phone}.`}
      </p>

      {stage === 'phone' ? (
        <form onSubmit={handleSendOtp} className="mt-8 flex flex-col gap-4">
          <label className="text-sm font-medium text-ink" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-xl border border-ink/15 bg-white px-4 py-3 font-mono text-sm outline-none focus:border-forest"
          />
          {error && <p className="text-sm text-coral">{error}</p>}
          <button
            type="submit"
            className="mt-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper hover:bg-forest-dark"
          >
            Send OTP
          </button>
          <p className="text-xs text-ink/40">
            Admin demo access: log in with <span className="font-mono">+919999999999</span>
          </p>
        </form>
      ) : (
        <form onSubmit={handleVerify} className="mt-8 flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            {otpDigits.map((d, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                value={d}
                onChange={(e) => handleDigitChange(i, e.target.value)}
                onKeyDown={(e) => handleDigitKeyDown(i, e)}
                inputMode="numeric"
                maxLength={1}
                className="h-14 w-12 rounded-xl border border-ink/15 bg-white text-center font-mono text-xl outline-none focus:border-forest"
              />
            ))}
          </div>
          {error && <p className="text-sm text-coral">{error}</p>}

          <div className="rounded-xl border border-amber/40 bg-amber/10 px-4 py-3 text-xs text-amber-dark">
            Demo mode — no SMS gateway is connected, so your code is shown here: {' '}
            <span className="font-mono text-sm font-semibold">{devOtp}</span>
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper hover:bg-forest-dark"
          >
            Verify & continue
          </button>

          <div className="flex items-center justify-between text-xs text-ink/50">
            <button type="button" onClick={() => setStage('phone')} className="underline">
              Change number
            </button>
            <button
              type="button"
              onClick={handleResend}
              disabled={resendIn > 0}
              className="underline disabled:no-underline disabled:opacity-40"
            >
              {resendIn > 0 ? `Resend in ${resendIn}s` : 'Resend code'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
