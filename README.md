# Monalisa & Sumit — Digital Wedding Invitation

A responsive, static wedding invitation website inspired by elegant lace-style digital invitations.

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server.

## Before publishing
1. Open `script.js` and replace `91XXXXXXXXXX` with the host's WhatsApp number (country code + number, digits only).
2. 3. Replace the three sample gallery panels with real photos if desired.
4. Confirm the wedding venue and Google Maps destination.
5. Upload the folder contents to any static host (Netlify, Vercel, GitHub Pages, or your own hosting).

## RSVP
The RSVP form opens WhatsApp with the guest's response pre-filled. It does not store guest data in a database.
For a guest list dashboard or automatic RSVP storage, connect a backend/database.

## Files
- `index.html` — page content
- `styles.css` — responsive styling and animations
- `script.js` — countdown, mobile navigation and WhatsApp RSVP


## Interactive opening animation
The invitation now starts with an animated lace-style envelope. Guests tap the wax seal to open the flap and slide the letter out, or choose Skip intro. The effect respects reduced-motion accessibility settings.
