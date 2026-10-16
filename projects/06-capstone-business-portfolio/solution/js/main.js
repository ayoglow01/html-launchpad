// Progressive enhancement only: every page works without this file.

// Contact form: accessible inline errors on submit.
const form = document.querySelector("#contact-form");
if (form) {
  // Turn off browser bubbles only when this script runs; without JS, native validation still works.
  form.noValidate = true;
  form.addEventListener("submit", (event) => {
    let firstInvalid = null;
    for (const field of form.querySelectorAll("input, select, textarea")) {
      const error = document.getElementById(`${field.id}-error`);
      if (!error) continue;
      if (field.checkValidity()) {
        field.removeAttribute("aria-invalid");
        error.textContent = "";
      } else {
        field.setAttribute("aria-invalid", "true");
        error.textContent = field.dataset.error || field.validationMessage;
        firstInvalid ??= field;
      }
    }
    if (firstInvalid) {
      event.preventDefault();
      firstInvalid.focus();
    }
  });
}

// Footer year.
const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
  year.setAttribute("datetime", year.textContent);
}
