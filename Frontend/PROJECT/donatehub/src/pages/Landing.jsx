import React from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, ORGANIZATIONS } from '../data/store.js'

const STEPS = [
  { n: '01', title: 'Choose what you\'re giving', body: 'Pick a category — clothes, books, food, or furniture — and tell us roughly how much.' },
  { n: '02', title: 'We match an organization', body: 'DonateHub routes your donation to a nearby organization already set up to use it.' },
  { n: '03', title: 'Schedule a pickup', body: 'Pick a date that works for you. No drop-off required unless you prefer it.' },
  { n: '04', title: 'Track it through', body: 'Watch your donation move from requested to accepted to picked up to completed.' },
]

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-forest/30 bg-forest/5 px-3 py-1 font-mono text-xs text-forest">
              clothes · books · food · furniture
            </span>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] text-ink md:text-6xl">
              Give what you
              <br />
              don't need, to
              <br />
              <span className="text-forest">those who do.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink/70">
              DonateHub connects everyday donors with organizations that already know
              exactly what to do with a spare coat, a box of books, or a table you've outgrown.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper hover:bg-forest-dark"
              >
                Start a donation
              </Link>
              <a
                href="#how"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-ink/40"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Signature element: handoff strip — donor to organization via a dashed route */}
          <div className="flex flex-col justify-center gap-4">
            {CATEGORIES.map((c, i) => (
              <div
                key={c.id}
                className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white/60 p-4 shadow-sm"
              >
                <div className="tag-label flex h-14 w-20 shrink-0 items-center justify-center bg-amber/90 pr-3 font-display text-sm font-semibold text-ink">
                  {c.label}
                </div>
                <div className="h-px flex-1 bg-dotted-path" aria-hidden="true" />
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-paper font-mono text-xs">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-semibold text-ink">How a donation moves</h2>
        <p className="mt-2 max-w-xl text-ink/60">
          Every donation follows the same four-stage route, from your doorstep to the
          organization that needs it.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t-2 border-forest pt-4">
              <span className="font-mono text-xs text-amber-dark">{s.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Organizations */}
      <section className="border-t border-ink/10 bg-forest/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold text-ink">Organizations on DonateHub</h2>
          <p className="mt-2 max-w-xl text-ink/60">
            Vetted partners who receive, sort, and distribute donations in their communities.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ORGANIZATIONS.map((org) => (
              <div key={org.id} className="rounded-2xl border border-ink/10 bg-paper p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{org.name}</h3>
                <p className="mt-1 text-sm text-ink/50">{org.city}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {org.focus.map((f) => (
                    <span key={f} className="rounded-full bg-forest/10 px-2.5 py-1 font-mono text-xs text-forest">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Your spare room has someone's next chapter in it.
        </h2>
        <Link
          to="/booking"
          className="mt-8 inline-block rounded-full bg-amber px-8 py-3 text-sm font-semibold text-ink hover:bg-amber-dark"
        >
          Book a donation pickup
        </Link>
      </section>
    </div>
  )
}
