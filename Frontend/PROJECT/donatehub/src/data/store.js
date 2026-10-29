// DonateHub mock data layer.
// In a production build, replace these functions with real API calls
// (fetch/axios) to your backend. The function signatures are kept
// deliberately simple so swapping in a real API is a drop-in change.

const BOOKINGS_KEY = 'donatehub_bookings'
const SEEDED_KEY = 'donatehub_seeded'

export const CATEGORIES = [
  { id: 'clothes', label: 'Clothes', blurb: 'Wearable garments, footwear, linens' },
  { id: 'books', label: 'Books', blurb: 'Textbooks, novels, children\'s books' },
  { id: 'food', label: 'Food', blurb: 'Sealed, unexpired packaged food' },
  { id: 'furniture', label: 'Furniture', blurb: 'Chairs, tables, shelves, beds' },
]

export const ORGANIZATIONS = [
  { id: 'org-1', name: 'Sunrise Community Kitchen', focus: ['food'], city: 'Chennai' },
  { id: 'org-2', name: 'Second Chapter Library Trust', focus: ['books'], city: 'Chennai' },
  { id: 'org-3', name: 'Warm Hands Shelter', focus: ['clothes', 'furniture'], city: 'Chennai' },
  { id: 'org-4', name: 'Roots Rehoming Collective', focus: ['furniture', 'clothes'], city: 'Bengaluru' },
  { id: 'org-5', name: 'Open Shelf Foundation', focus: ['books', 'food'], city: 'Bengaluru' },
]

export const STATUS_FLOW = ['Requested', 'Accepted', 'Picked Up', 'Completed', 'Cancelled']

function readAll() {
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeAll(list) {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list))
}

function seedIfEmpty() {
  if (localStorage.getItem(SEEDED_KEY)) return
  const seed = [
    {
      id: 'DH-1001',
      donorName: 'Aarav Mehta',
      phone: '+91 98765 43210',
      category: 'clothes',
      quantity: '3 bags',
      orgId: 'org-3',
      address: '12 Lake View Street, Chennai',
      pickupDate: nextDate(2),
      notes: 'Mostly winter wear, gently used.',
      status: 'Requested',
      createdAt: Date.now() - 1000 * 60 * 60 * 26,
    },
    {
      id: 'DH-1002',
      donorName: 'Priya Raman',
      phone: '+91 90000 11122',
      category: 'books',
      quantity: '40 books',
      orgId: 'org-2',
      address: '5th Cross, Indiranagar, Bengaluru',
      pickupDate: nextDate(1),
      notes: 'School textbooks, grades 6-10.',
      status: 'Accepted',
      createdAt: Date.now() - 1000 * 60 * 60 * 50,
    },
    {
      id: 'DH-1003',
      donorName: 'Kevin Fernandes',
      phone: '+91 99887 76655',
      category: 'furniture',
      quantity: '1 study table, 2 chairs',
      orgId: 'org-4',
      address: 'HSR Layout, Bengaluru',
      pickupDate: nextDate(4),
      notes: 'Pickup needs 2 people, table is heavy.',
      status: 'Picked Up',
      createdAt: Date.now() - 1000 * 60 * 60 * 70,
    },
  ]
  writeAll(seed)
  localStorage.setItem(SEEDED_KEY, '1')
}

function nextDate(daysAhead) {
  const d = new Date()
  d.setDate(d.getDate() + daysAhead)
  return d.toISOString().slice(0, 10)
}

seedIfEmpty()

export function listBookings() {
  return readAll().sort((a, b) => b.createdAt - a.createdAt)
}

export function getBooking(id) {
  return readAll().find((b) => b.id === id) || null
}

export function createBooking(payload) {
  const all = readAll()
  const id = `DH-${1000 + all.length + 1}`
  const record = {
    id,
    status: 'Requested',
    createdAt: Date.now(),
    ...payload,
  }
  all.push(record)
  writeAll(all)
  return record
}

export function updateBookingStatus(id, status) {
  const all = readAll()
  const idx = all.findIndex((b) => b.id === id)
  if (idx === -1) return null
  all[idx].status = status
  writeAll(all)
  return all[idx]
}

export function bookingStats() {
  const all = readAll()
  const stats = { total: all.length }
  STATUS_FLOW.forEach((s) => {
    stats[s] = all.filter((b) => b.status === s).length
  })
  return stats
}
