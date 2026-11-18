// IMPORTANT: Set your WhatsApp number below in international format, digits only.
const RSVP_WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Replace with the host's WhatsApp number.

const weddingDate = new Date("2026-11-25T19:00:00+05:30").getTime();
function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;
  const values = {
    days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((distance / 1000) % 60))
  };
  Object.entries(values).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

document.getElementById("rsvpForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  const attendance = document.getElementById("attendance").value;
  const guests = document.getElementById("guestCount").value;
  if (!name || !attendance) return;
  const message = `Wedding RSVP — Monalisa Dey & Sumit Santra%0AName: ${encodeURIComponent(name)}%0AResponse: ${encodeURIComponent(attendance)}%0ANumber of guests: ${encodeURIComponent(guests)}`;
  if (RSVP_WHATSAPP_NUMBER.includes("X")) {
    alert("Please add the host's WhatsApp number in script.js before using RSVP.");
    return;
  }
  window.open(`https://wa.me/${RSVP_WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
});


// Invitation opening interaction
const openingScreen = document.getElementById("openingScreen");
const openInvitationButton = document.getElementById("openInvitation");
const skipOpeningButton = document.getElementById("skipOpening");

function revealInvitation() {
  if (!openingScreen || openingScreen.classList.contains("is-opening")) return;
  openingScreen.classList.add("is-opening");
  document.body.classList.remove("invitation-locked");
  window.setTimeout(() => {
    openingScreen.classList.add("is-gone");
    window.setTimeout(() => openingScreen.remove(), 1100);
  }, 1450);
}
openInvitationButton?.addEventListener("click", revealInvitation);
skipOpeningButton?.addEventListener("click", revealInvitation);
