import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive ? 'text-forest' : 'text-ink/60 hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-paper font-display text-sm">
            DH
          </span>
          <span className="font-display text-lg font-semibold text-ink">DonateHub</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/booking" className={linkClass}>Donate</NavLink>
          {user?.role === 'admin' && (
            <NavLink to="/admin" className={linkClass}>Admin</NavLink>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden font-mono text-xs text-ink/50 sm:inline">{user.phone}</span>
              <button
                onClick={() => { logout(); navigate('/') }}
                className="rounded-full border border-ink/15 px-4 py-1.5 text-sm font-medium text-ink hover:border-ink/40"
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-forest px-4 py-1.5 text-sm font-medium text-paper hover:bg-forest-dark"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
