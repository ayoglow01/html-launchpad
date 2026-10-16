const input = document.querySelector("#payload");
const result = document.querySelector("#result");

document.querySelector("#safe").addEventListener("click", () => {
  result.textContent = input.value; // shown as literal text
});

document.querySelector("#unsafe").addEventListener("click", () => {
  result.innerHTML = input.value; // parsed as HTML: never do this with untrusted data
});

document.addEventListener("securitypolicyviolation", (e) => {
  console.warn("CSP blocked:", e.violatedDirective, e.blockedURI || "(inline)");
});
