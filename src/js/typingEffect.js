// Hero Typing Effect for Harsh Choudhary Portfolio

export function initTypingEffect() {
  const targetEl = document.getElementById("typing-target");
  if (!targetEl) return;

  const phrases = [
    "Machine Learning Engineer",
    "Backend API Architect",
    "Linux Infrastructure Specialist",
    "Self-Hosted Homelab Engineer",
    "Async & Event-Driven Developer"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      targetEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 45;
    } else {
      targetEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at end of phrase
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400; // Pause before typing next phrase
    }

    setTimeout(type, typingSpeed);
  }

  type();
}
