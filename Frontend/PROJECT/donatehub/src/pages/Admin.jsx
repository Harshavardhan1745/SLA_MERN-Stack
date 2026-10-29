import React, { useMemo, useState } from 'react'
import {
  CATEGORIES,
  ORGANIZATIONS,
  STATUS_FLOW,
  listBookings,
  updateBookingStatus,
  bookingStats,
} from '../data/store.js'
import StatusPill from '../components/StatusPill.jsx'

function orgName(id) {
  return ORGANIZATIONS.find((o) => o.id === id)?.name || '—'
}

function nextStatus(current) {
  const idx = STATUS_FLOW.indexOf(current)
  if (idx === -1 || idx >= STATUS_FLOW.length - 2) return null // stop before Cancelled
  return STATUS_FLOW[idx + 1]
}

export default function Admin() {
  const [bookings, setBookings] = useState(listBookings())
  const [statusFilter, setStatusFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [query, setQuery] = useState('')

  const stats = bookingStats()

  const filtered = useMemo(() => {
    return bookings.filter((b) => {
      if (statusFilter !== 'All' && b.status !== statusFilter) return false
      if (categoryFilter !== 'All' && b.category !== categoryFilter) return false
      if (query.trim()) {
        const q = query.toLowerCase()
        const hay = `${b.id} ${b.donorName} ${b.phone} ${orgName(b.orgId)}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [bookings, statusFilter, categoryFilter, query])

  function refresh() {
    setBookings(listBookings())
  }

  function advance(id, current) {
    const next = nextStatus(current)
    if (!next) return
    updateBookingStatus(id, next)
    refresh()
  }

  function cancel(id) {
    updateBookingStatus(id, 'Cancelled')
    refresh()
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <span className="font-mono text-xs text-forest">admin</span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">Booking queue</h1>
      <p className="mt-2 text-ink/60">Review incoming donations and move each one through pickup.</p>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
        <StatCard label="Total" value={stats.total} />
        {STATUS_FLOW.map((s) => (
          <StatCard key={s} label={s} value={stats[s] || 0} />
        ))}
      </div>

      {/* Filters */}
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by ID, donor, phone, org…"
          className="input max-w-xs"
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="input w-auto">
          <option value="All">All statuses</option>
          {STATUS_FLOW.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="input w-auto">
          <option value="All">All categories</option>
          {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/10">
        <table className="w-full min-w-[860px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-ink/10 bg-ink/5 text-left text-xs uppercase tracking-wide text-ink/50">
              <th className="px-4 py-3 font-medium">ID</th>
              <th className="px-4 py-3 font-medium">Donor</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Organization</th>
              <th className="px-4 py-3 font-medium">Pickup date</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Process</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr key={b.id} className="border-b border-ink/5 last:border-0 hover:bg-forest/5">
                <td className="px-4 py-3 font-mono text-xs text-ink/70">{b.id}</td>
                <td className="px-4 py-3">
                  <div className="font-medium text-ink">{b.donorName}</div>
                  <div className="font-mono text-xs text-ink/40">{b.phone}</div>
                </td>
                <td className="px-4 py-3 capitalize">{b.category}</td>
                <td className="px-4 py-3">{orgName(b.orgId)}</td>
                <td className="px-4 py-3">{b.pickupDate}</td>
                <td className="px-4 py-3"><StatusPill status={b.status} /></td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    {nextStatus(b.status) && (
                      <button
                        onClick={() => advance(b.id, b.status)}
                        className="rounded-full bg-forest px-3 py-1.5 text-xs font-medium text-paper hover:bg-forest-dark"
                      >
                        Mark {nextStatus(b.status)}
                      </button>
                    )}
                    {b.status !== 'Cancelled' && b.status !== 'Completed' && (
                      <button
                        onClick={() => cancel(b.id)}
                        className="rounded-full border border-coral/40 px-3 py-1.5 text-xs font-medium text-coral hover:bg-coral/10"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-ink/40">
                  No bookings match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white px-4 py-3">
      <div className="font-mono text-2xl font-semibold text-forest">{value}</div>
      <div className="text-xs text-ink/50">{label}</div>
    </div>
  )
}
