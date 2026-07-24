// Visitor Feedback & Contact Form Logic

export function initFeedbackForm() {
  const form = document.getElementById("feedback-form");
  const submitBtn = document.getElementById("feedback-submit-btn");
  const statusMsg = document.getElementById("feedback-status");

  if (!form || !submitBtn) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("feedback-name").value.trim();
    const email = document.getElementById("feedback-email").value.trim();
    const message = document.getElementById("feedback-message").value.trim();

    if (!name || !email || !message) return;

    // Loading State
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending Feedback...";

    setTimeout(() => {
      // Create mailto fallback link and trigger success display
      const mailtoUrl = `mailto:hc000269@gmail.com?subject=Feedback from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Sender: ${name} (${email})\n\nMessage:\n${message}`)}`;

      window.location.href = mailtoUrl;

      // Success State
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message →";
      form.reset();

      if (statusMsg) {
        statusMsg.style.display = "block";
        statusMsg.textContent = "Thank you for your feedback! Opening your email client to send...";
        setTimeout(() => {
          statusMsg.style.display = "none";
        }, 5000);
      }
    }, 600);
  });
}
