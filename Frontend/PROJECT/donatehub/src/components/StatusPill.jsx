import React from 'react'

const STYLES = {
  Requested: 'bg-amber/20 text-amber-dark border-amber/40',
  Accepted: 'bg-sage/40 text-forest-dark border-sage',
  'Picked Up': 'bg-forest/10 text-forest border-forest/30',
  Completed: 'bg-forest text-paper border-forest',
  Cancelled: 'bg-coral/10 text-coral border-coral/40',
}

export default function StatusPill({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-xs ${
        STYLES[status] || 'bg-ink/5 text-ink border-ink/20'
      }`}
    >
      {status}
    </span>
  )
}
