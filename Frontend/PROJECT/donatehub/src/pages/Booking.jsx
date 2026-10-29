import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CATEGORIES, ORGANIZATIONS, createBooking } from '../data/store.js'
import { useAuth } from '../context/AuthContext.jsx'

function minDate() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().slice(0, 10)
}

export default function Booking() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    donorName: '',
    category: 'clothes',
    quantity: '',
    orgId: '',
    address: '',
    pickupDate: '',
    notes: '',
  })
  const [errors, setErrors] = useState({})

  const matchingOrgs = useMemo(
    () => ORGANIZATIONS.filter((o) => o.focus.includes(form.category)),
    [form.category]
  )

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value, ...(field === 'category' ? { orgId: '' } : {}) }))
  }

  function validate() {
    const e = {}
    if (!form.donorName.trim()) e.donorName = 'Tell us your name.'
    if (!form.quantity.trim()) e.quantity = 'Roughly how much are you donating?'
    if (!form.orgId) e.orgId = 'Choose an organization to receive it.'
    if (!form.address.trim()) e.address = 'Add a pickup address.'
    if (!form.pickupDate) e.pickupDate = 'Pick a date.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    if (!validate()) return
    const record = createBooking({ ...form, phone: user.phone })
    navigate(`/booking/confirmed/${record.id}`)
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <span className="font-mono text-xs text-forest">book a pickup</span>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">What are you donating?</h1>
      <p className="mt-2 text-ink/60">
        Fill in a few details and we'll route it to a matching organization near you.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
        {/* Category picker */}
        <div>
          <span className="text-sm font-medium text-ink">Category</span>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CATEGORIES.map((c) => (
              <button
                type="button"
                key={c.id}
                onClick={() => update('category', c.id)}
                className={`rounded-xl border p-4 text-left transition ${
                  form.category === c.id
                    ? 'border-forest bg-forest/5'
                    : 'border-ink/10 bg-white hover:border-ink/25'
                }`}
              >
                <div className="font-display font-semibold text-ink">{c.label}</div>
                <div className="mt-1 text-xs text-ink/50">{c.blurb}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Your name" error={errors.donorName}>
            <input
              value={form.donorName}
              onChange={(e) => update('donorName', e.target.value)}
              className="input"
              placeholder="Full name"
            />
          </Field>

          <Field label="Quantity" error={errors.quantity}>
            <input
              value={form.quantity}
              onChange={(e) => update('quantity', e.target.value)}
              className="input"
              placeholder="e.g. 3 bags, 20 books, 1 sofa"
            />
          </Field>
        </div>

        <Field label="Receiving organization" error={errors.orgId}>
          <select
            value={form.orgId}
            onChange={(e) => update('orgId', e.target.value)}
            className="input"
          >
            <option value="">Select an organization</option>
            {matchingOrgs.map((o) => (
              <option key={o.id} value={o.id}>{o.name} — {o.city}</option>
            ))}
          </select>
          {matchingOrgs.length === 0 && (
            <p className="mt-1 text-xs text-ink/40">No organizations currently list this category.</p>
          )}
        </Field>

        <Field label="Pickup address" error={errors.address}>
          <textarea
            value={form.address}
            onChange={(e) => update('address', e.target.value)}
            className="input min-h-[90px]"
            placeholder="House / flat, street, area, city"
          />
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Preferred pickup date" error={errors.pickupDate}>
            <input
              type="date"
              min={minDate()}
              value={form.pickupDate}
              onChange={(e) => update('pickupDate', e.target.value)}
              className="input"
            />
          </Field>

          <Field label="Notes (optional)">
            <input
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              className="input"
              placeholder="Anything the pickup team should know"
            />
          </Field>
        </div>

        <button
          type="submit"
          className="w-fit rounded-full bg-forest px-8 py-3 text-sm font-semibold text-paper hover:bg-forest-dark"
        >
          Confirm donation
        </button>
      </form>
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-ink">{label}</span>
      {children}
      {error && <span className="text-xs text-coral">{error}</span>}
    </label>
  )
}
