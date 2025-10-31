const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending...";

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      status.textContent = "❌ Something went wrong. Try again later.";
    }
  } catch (error) {
    status.textContent = "⚠️ Network error. Please try again.";
  }
});
