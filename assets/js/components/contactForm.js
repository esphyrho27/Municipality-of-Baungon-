import { submitContactMessage } from "../api/resources.js";

function setError(fieldId, show) {
  document.getElementById(fieldId).classList.toggle("error", show);
}

function setStatus(box, message, isError = false) {
  box.textContent = message;
  box.classList.toggle("error-status", isError);
  box.classList.add("show");
}

export function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const statusBox = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("cf-name").value.trim();
    const email = document.getElementById("cf-email").value.trim();
    const subject = document.getElementById("cf-subject").value.trim();
    const message = document.getElementById("cf-message").value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    let valid = true;
    if (name.length < 2) { setError("f-name", true); valid = false; } else setError("f-name", false);
    if (!emailOk) { setError("f-email", true); valid = false; } else setError("f-email", false);
    if (subject.length < 2) { setError("f-subject", true); valid = false; } else setError("f-subject", false);
    if (message.length < 10) { setError("f-message", true); valid = false; } else setError("f-message", false);

    if (!valid) {
      statusBox.classList.remove("show");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    // Routed through the API layer — once a real backend and
    // database exist, this will actually persist the message
    // and/or email the municipal office, with no change needed
    // here (see config/config.js and assets/js/api/client.js).
    const result = await submitContactMessage({ name, email, subject, message });

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";

    if (result.ok) {
      setStatus(statusBox, "Your message has been sent. The municipal office will respond soon. (Demo form — not yet connected to a live inbox.)");
      form.reset();
      setTimeout(() => statusBox.classList.remove("show"), 6000);
    } else {
      setStatus(statusBox, "Something went wrong sending your message. Please try again in a moment.", true);
    }
  });
}
