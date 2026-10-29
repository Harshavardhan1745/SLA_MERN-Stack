# DonateHub

A React + Vite + Tailwind demo app that connects people donating **clothes, books, food,
and furniture** with organizations that can use them.

## Pages

| Route | Page | Access |
|---|---|---|
| `/` | Landing page | Public |
| `/login` | OTP login (phone number, no password) | Public |
| `/booking` | Create a donation pickup request | Logged in |
| `/booking/confirmed/:id` | Confirmation screen | Logged in |
| `/admin` | Booking queue — review & process donations | Logged in as admin |

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Logging in (OTP only)

1. Go to **Log in**, enter any phone number (10–13 digits).
2. Click **Send OTP**. Since there's no SMS gateway wired up, the demo shows the
   generated 6-digit code directly on screen (see the amber box).
3. Enter the code to log in.

To see the **admin dashboard**, log in with the demo admin number:

```
+919999999999
```

Any other number logs in as a regular donor.

## Wiring up a real backend

This project ships with a mock data layer (`src/data/store.js`) backed by
`localStorage`, so it runs fully client-side with no server required. To connect
a real backend:

- Replace the functions in `src/data/store.js` (`listBookings`, `createBooking`,
  `updateBookingStatus`, etc.) with `fetch`/`axios` calls to your API.
- Replace `requestOtp` / `verifyOtp` in `src/context/AuthContext.jsx` with calls
  to your SMS/OTP provider (e.g. Twilio Verify, MSG91, Firebase Phone Auth) and
  a real backend session/JWT.
- Determine the user's `role` (`donor` vs `admin`) from your backend response
  after OTP verification, not on the client.

## Tech stack

- React 18 + React Router 6
- Vite 5
- Tailwind CSS 3
- No external UI kit — all components are hand-built in `src/components`

## Project structure

```
src/
  components/    Navbar, Footer, StatusPill, ProtectedRoute
  context/       AuthContext (OTP login/session)
  data/          store.js (mock bookings + organizations)
  pages/         Landing, Login, Booking, Confirmation, Admin
  App.jsx        Route definitions
  main.jsx       App entry point
```
