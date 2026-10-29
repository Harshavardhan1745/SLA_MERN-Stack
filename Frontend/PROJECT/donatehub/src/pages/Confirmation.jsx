import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBooking, ORGANIZATIONS } from '../data/store.js'
import StatusPill from '../components/StatusPill.jsx'

export default function Confirmation() {
  const { id } = useParams()
  const booking = getBooking(id)

  if (!booking) {
    return (
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-semibold text-ink">Booking not found</h1>
        <Link to="/booking" className="mt-4 inline-block text-forest underline">Start a new donation</Link>
      </div>
    )
  }

  const org = ORGANIZATIONS.find((o) => o.id === booking.orgId)

  return (
    <div className="mx-auto max-w-xl px-6 py-20">
      <div className="rounded-2xl border border-forest/20 bg-forest/5 p-8">
        <span className="font-mono text-xs text-forest">confirmed</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Thank you, {booking.donorName.split(' ')[0]}.</h1>
        <p className="mt-2 text-ink/70">
          Your donation has been logged and sent to {org?.name || 'the organization'} for review.
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-y-4 text-sm">
          <dt className="text-ink/50">Booking ID</dt>
          <dd className="font-mono text-ink">{booking.id}</dd>

          <dt className="text-ink/50">Category</dt>
          <dd className="capitalize text-ink">{booking.category}</dd>

          <dt className="text-ink/50">Quantity</dt>
          <dd className="text-ink">{booking.quantity}</dd>

          <dt className="text-ink/50">Pickup date</dt>
          <dd className="text-ink">{booking.pickupDate}</dd>

          <dt className="text-ink/50">Status</dt>
          <dd><StatusPill status={booking.status} /></dd>
        </dl>

        <div className="mt-8 flex gap-4">
          <Link to="/booking" className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink hover:border-ink/40">
            Book another
          </Link>
          <Link to="/" className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-paper hover:bg-forest-dark">
            Back home
          </Link>
        </div>
      </div>
    </div>
  )
}
