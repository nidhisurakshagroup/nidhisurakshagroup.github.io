/*
  ============================================================
  NIDHI SURAKSHA GROUP — WEBSITE VERSION 2.0
  ============================================================

  Update the following section before publishing:

  1. GOOGLE_FORM_EMBED_URL
     Paste your Google Form embedded URL.

     Example:
     https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true

  2. PARTNERS
     Replace the placeholder partner names with the insurance
     companies/providers you actually represent or are authorised
     to facilitate.

  ============================================================
*/


/* ============================================================
   GOOGLE FORM
   ============================================================ */

const GOOGLE_FORM_EMBED_URL = "https://forms.gle/enzsDAiyrrnYqM847";


/* ============================================================
   INSURANCE PARTNERS
   ============================================================

   Replace these with your actual insurance partners.

   Example:

   {
     name: "HDFC ERGO",
     meta: "General Insurance"
   }

============================================================ */

const PARTNERS = [
  { name: "Add Partner 01", meta: "Insurance Provider" },
  { name: "Add Partner 02", meta: "Insurance Provider" },
  { name: "Add Partner 03", meta: "Insurance Provider" },
  { name: "Add Partner 04", meta: "Insurance Provider" },
  { name: "Add Partner 05", meta: "Insurance Provider" },
  { name: "Add Partner 06", meta: "Insurance Provider" },
  { name: "Add Partner 07", meta: "Insurance Provider" },
  { name: "Add Partner 08", meta: "Insurance Provider" },
  { name: "Add Partner 09", meta: "Insurance Provider" },
  { name: "Add Partner 10", meta: "Insurance Provider" },
  { name: "Add Partner 11", meta: "Insurance Provider" },
  { name: "Add Partner 12", meta: "Insurance Provider" },
  { name: "Add Partner 13", meta: "Insurance Provider" },
  { name: "Add Partner 14", meta: "Insurance Provider" },
  { name: "Add Partner 15", meta: "Insurance Provider" }
];


/* ============================================================
   WEBSITE INITIALIZATION
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* Current year */
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* Initialize website features */

  setupMobileNavigation();

  setupGoogleForm();

  setupPartners();

  setupSmoothLinks();

  setupScrollHeader();

  setupRevealAnimations();

  setupBackToTop();

  setupQuoteButtons();

});


/* ============================================================
   MOBILE NAVIGATION
   ============================================================ */

function setupMobileNavigation() {

  const toggle = document.querySelector(".menu-toggle");

  const nav = document.querySelector(".nav");

  if (!toggle || !nav) return;


  toggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    document.body.classList.toggle(
      "menu-open",
      isOpen
    );

  });


  /* Close menu after clicking a navigation link */

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove(
        "menu-open"
      );

    });

  });

}


/* ============================================================
   GOOGLE FORM
   ============================================================ */

function setupGoogleForm() {

  const frame = document.getElementById("lead-form");

  const placeholder =
    document.getElementById("form-placeholder");

  const helpButton =
    document.getElementById("form-help");


  if (!frame || !placeholder) return;


  /*
    If Google Form URL has been added,
    display the embedded form.
  */

  if (GOOGLE_FORM_EMBED_URL.trim()) {

    frame.src =
      GOOGLE_FORM_EMBED_URL.trim();

    frame.hidden = false;

    placeholder.hidden = true;

  }


  /*
    Help button for Google Form setup.
  */

  if (helpButton) {

    helpButton.addEventListener(
      "click",
      () => {

        alert(
          "Google Form Setup\n\n" +

          "1. Open your Google Form.\n\n" +

          "2. Click Share / Publish.\n\n" +

          "3. Select Embed.\n\n" +

          "4. Copy the embedded form URL.\n\n" +

          "5. Paste the URL into GOOGLE_FORM_EMBED_URL " +
          "at the top of script.js.\n\n" +

          "6. Save script.js and upload it to GitHub."
        );

      }
    );

  }

}


/* ============================================================
   INSURANCE PARTNERS
   ============================================================ */

function setupPartners() {

  const grid =
    document.getElementById("partner-grid");

  if (!grid) return;


  /*
    Generate partner cards dynamically.
  */

  grid.innerHTML = PARTNERS.map(
    (partner, index) => {

      return `
        <div
          class="partner-card"
          data-index="${index}"
        >

          <div class="partner-logo-placeholder">

            <div class="partner-name">
              ${escapeHtml(partner.name)}
            </div>

            <span class="partner-type">
              ${escapeHtml(
                partner.meta ||
                "Insurance Provider"
              )}
            </span>

          </div>

        </div>
      `;

    }
  ).join("");

}


/* ============================================================
   HTML SECURITY / ESCAPING
   ============================================================ */

function escapeHtml(value) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}


/* ============================================================
   SMOOTH SCROLLING
   ============================================================ */

function setupSmoothLinks() {

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute("href");


          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) return;


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });

}


/* ============================================================
   HEADER SCROLL EFFECT
   ============================================================ */

function setupScrollHeader() {

  const header =
    document.querySelector(".site-header");

  if (!header) return;


  function updateHeader() {

    if (window.scrollY > 30) {

      header.classList.add(
        "header-scrolled"
      );

    } else {

      header.classList.remove(
        "header-scrolled"
      );

    }

  }


  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );


  updateHeader();

}


/* ============================================================
   SCROLL REVEAL ANIMATIONS
   ============================================================ */

function setupRevealAnimations() {

  /*
    Find elements marked with:
    data-reveal
  */

  const elements =
    document.querySelectorAll(
      "[data-reveal]"
    );


  if (!elements.length) return;


  /*
    IntersectionObserver allows elements
    to animate when they enter the viewport.
  */

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "revealed"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  elements.forEach(element => {

    observer.observe(element);

  });

}


/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */

function setupBackToTop() {

  const button =
    document.querySelector(
      ".back-to-top"
    );


  if (!button) return;


  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 500) {

        button.classList.add(
          "show"
        );

      } else {

        button.classList.remove(
          "show"
        );

      }

    },
    { passive: true }
  );


  button.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* ============================================================
   GET QUOTE BUTTONS
   ============================================================ */

function setupQuoteButtons() {

  /*
    Any element with:
    data-quote

    will scroll the user to
    the quote / enquiry section.
  */

  document
    .querySelectorAll(
      "[data-quote]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        event => {

          const quoteSection =
            document.getElementById(
              "quote"
            );


          if (!quoteSection) return;


          event.preventDefault();


          quoteSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });

}


/* ============================================================
   WHATSAPP HELPER
   ============================================================ */

function openWhatsApp(
  message = "Hello Nidhi Suraksha Group, I would like to know more about your insurance plans."
) {

  const phone =
    "918882429708";


  const url =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(message);


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* ============================================================
   PHONE CALL HELPER
   ============================================================ */

function callNidhiSuraksha() {

  window.location.href =
    "tel:+918882429708";

}


/* ============================================================
   EMAIL HELPER
   ============================================================ */

function emailNidhiSuraksha(
  subject = "Insurance Enquiry"
) {

  const email =
    "nidhisurakshagroup@gmail.com";


  const url =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent(subject);


  window.location.href =
    url;

}


/* ============================================================
   SERVICE ENQUIRY
   ============================================================ */

function requestService(
  serviceName
) {

  const message =
    "Hello Nidhi Suraksha Group,\n\n" +
    "I am interested in " +
    serviceName +
    ".\n\n" +
    "Please share more details and suitable options.";


  openWhatsApp(message);

}


/* ============================================================
   OPTIONAL GLOBAL FUNCTIONS
   ============================================================

   These can be called directly from HTML.

   Example:

   onclick="requestService('Health Insurance')"

   onclick="openWhatsApp()"

   onclick="callNidhiSuraksha()"

============================================================ */


/* ============================================================
   END OF SCRIPT
   ============================================================ */
