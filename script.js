// 1. Automatically update the footer copyright year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 2. Add a one-click "Copy Email" helper to the Contact section
const contactLinks = document.querySelector(".contact-links");

if (contactLinks) {
  const copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.textContent = "Copy Email";
  copyBtn.className = "btn btn-outline";
  copyBtn.style.cursor = "pointer";
  copyBtn.style.background = "transparent";
  copyBtn.style.fontFamily = "inherit";

  copyBtn.addEventListener("click", () => {
    const email = "IsaLukwago@my.uopeople.edu";
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Email Copied!";
      copyBtn.style.borderColor = "#38bdf8";
      copyBtn.style.color = "#38bdf8";

      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.borderColor = "";
        copyBtn.style.color = "";
      }, 2000);
    });
  });

  contactLinks.appendChild(copyBtn);
}
