// Nidhi Suraksha Group website configuration
// Paste the EMBED URL copied from Google Forms into GOOGLE_FORM_EMBED_URL.
// Example format: https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true
const GOOGLE_FORM_EMBED_URL = "";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  const frame = document.getElementById("lead-form");
  const placeholder = document.getElementById("form-placeholder");

  if (GOOGLE_FORM_EMBED_URL.trim()) {
    frame.src = GOOGLE_FORM_EMBED_URL;
    frame.hidden = false;
    placeholder.hidden = true;
  }

  document.getElementById("form-help").addEventListener("click", () => {
    alert("Google Forms: open your form → Publish/Share → Embed HTML → copy the form URL containing embedded=true → paste it into GOOGLE_FORM_EMBED_URL in script.js → save and upload the file to GitHub.");
  });
});
