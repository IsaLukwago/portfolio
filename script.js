// =========================================================
// 1. AUTOMATIC FOOTER COPYRIGHT YEAR
// Finds the <span id="year"> in the footer and sets it to
// the current year automatically.
// =========================================================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// =========================================================
// 2. MOBILE NAVIGATION MENU TOGGLE
// Opens and closes the navigation links when the hamburger
// button (☰) is clicked on smaller phone screens.
// =========================================================
const menuToggle = document.getElementById("menu-toggle");
const primaryNav = document.getElementById("primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    primaryNav.classList.toggle("open");
  });

  // Automatically close the mobile menu after a link is clicked
  const navLinks = primaryNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("open");
    });
  });
}

// =========================================================
// 3. INTERACTIVE "PREPARE MY EMAIL" CONTACT FORM
// Captures the visitor's inputs without needing a backend
// server and opens their email app with a formatted draft.
// =========================================================
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    // Stop the page from refreshing when the form is submitted
    event.preventDefault();

    // Grab the values typed into each form field
    const name = document.getElementById("sender-name").value.trim();
    const email = document.getElementById("sender-email").value.trim();
    const topic = document.getElementById("interest-topic").value;
    const message = document.getElementById("sender-message").value.trim();

    // Safely format the subject and body for a mailto link
    const subject = encodeURIComponent(
      `[Portfolio Inquiry] ${topic} — from ${name}`
    );
    const body = encodeURIComponent(
      `Hi Isa,\n\nMy name is ${name} (${email}).\nI am reaching out regarding: ${topic}.\n\n${message}\n\nBest regards,\n${name}`
    );

    // Show a helpful confirmation message below the button
    if (formFeedback) {
      formFeedback.textContent =
        "Opening your email app with your message prepared...";
    }

    // Launch the user's default email client
    window.location.href = `mailto:IsaLukwago@my.uopeople.edu?subject=${subject}&body=${body}`;
  });
}
