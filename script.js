const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const menuToggle = document.getElementById("menu-toggle");
const primaryNav = document.getElementById("primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    primaryNav.classList.toggle("open");
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("open");
    });
  });
}

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("sender-name").value.trim();
    const email = document.getElementById("sender-email").value.trim();
    const topic = document.getElementById("interest-topic").value;
    const message = document.getElementById("sender-message").value.trim();

    const subject = encodeURIComponent(
      `[Portfolio Inquiry] ${topic} — from ${name}`
    );
    const body = encodeURIComponent(
      `Hi Isa,\n\nMy name is ${name} (${email}).\nI am reaching out regarding: ${topic}.\n\n${message}\n\nBest regards,\n${name}`
    );

    if (formFeedback) {
      formFeedback.textContent =
        "Opening your email app with your message prepared...";
    }

    window.location.href = `mailto:IsaLukwago@my.uopeople.edu?subject=${subject}&body=${body}`;
  });
}
