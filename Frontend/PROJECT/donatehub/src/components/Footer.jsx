import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper/70">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber text-ink font-display text-xs">DH</span>
            <span className="font-display text-base text-paper">DonateHub</span>
          </div>
          <p className="max-w-sm text-sm">
            A handoff point between people with more than they need and organizations
            that can put it to use — clothes, books, food, and furniture.
          </p>
        </div>
        <p className="mt-8 text-xs text-paper/40">© {new Date().getFullYear()} DonateHub. Demo project for educational use.</p>
      </div>
    </footer>
  )
}
