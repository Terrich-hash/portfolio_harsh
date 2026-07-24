// AI Assistant Floating Chatbot Widget for Harsh Choudhary Portfolio

import { personalInfo, skills, projects, homelabServices, experiences, leadership } from '../data/portfolioData.js';

export function initChatbot() {
  const toggleBtn = document.getElementById("chatbot-toggle");
  const windowEl = document.getElementById("chatbot-window");
  const closeBtn = document.getElementById("chatbot-close");
  const messagesEl = document.getElementById("chatbot-messages");
  const form = document.getElementById("chatbot-form");
  const input = document.getElementById("chatbot-input");
  const chipsContainer = document.getElementById("chatbot-chips");

  if (!toggleBtn || !windowEl || !messagesEl || !input) return;

  // Toggle Chat Window
  toggleBtn.addEventListener("click", () => {
    windowEl.classList.toggle("open");
    if (windowEl.classList.contains("open")) {
      input.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      windowEl.classList.remove("open");
    });
  }

  // Handle Chips Click
  if (chipsContainer) {
    chipsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("chat-chip")) {
        const query = e.target.dataset.query;
        handleUserQuery(query);
      }
    });
  }

  // Handle Form Submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    input.value = "";
    handleUserQuery(query);
  });

  function handleUserQuery(userText) {
    // Render User Message
    appendMessage(userText, "user");

    // Show Typing Indicator
    const typingId = appendTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator(typingId);
      const botResponse = generateBotResponse(userText);
      appendMessage(botResponse, "bot");
    }, 500);
  }

  function appendMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-msg ${sender}-msg`;
    msgDiv.innerHTML = text;
    messagesEl.appendChild(msgDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function appendTypingIndicator() {
    const id = "typing-" + Date.now();
    const div = document.createElement("div");
    div.id = id;
    div.className = "chat-msg bot-msg typing-dots";
    div.innerHTML = `<span>.</span><span>.</span><span>.</span>`;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return id;
  }

  function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function generateBotResponse(inputStr) {
    const text = inputStr.toLowerCase().trim();

    // 1. Contact / Email / LinkedIn / GitHub / Reach
    if (text.includes("contact") || text.includes("email") || text.includes("gmail") || text.includes("linkedin") || text.includes("github") || text.includes("reach") || text.includes("message") || text.includes("talk") || text.includes("hire") || text.includes("mail")) {
      return `You can reach Harsh directly via:<br><br>
📧 <strong>Email:</strong> <a href="mailto:hc000269@gmail.com" style="color: var(--accent-yellow); text-decoration: underline;">hc000269@gmail.com</a><br>
💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harsh-choudhary-51b081200/" target="_blank" style="color: var(--accent-yellow); text-decoration: underline;">LinkedIn Profile ↗</a><br>
💻 <strong>GitHub:</strong> <a href="https://github.com/terrich-hash" target="_blank" style="color: var(--accent-yellow); text-decoration: underline;">terrich-hash ↗</a><br>
✍️ <strong>Blog:</strong> <a href="https://terrich-hash.github.io/terrich_blog/" target="_blank" style="color: var(--accent-yellow); text-decoration: underline;">Technical Blog ↗</a>`;
    }

    // 2. Projects / Deepfake / Browser2API / Work / Code
    if (text.includes("project") || text.includes("deepfake") || text.includes("wavlm") || text.includes("browser2api") || text.includes("backend") || text.includes("chat") || text.includes("built") || text.includes("system")) {
      return `Here are Harsh's top engineering projects:<br><br>
1. <strong>Deepfake Audio Detection System:</strong> WavLM speech embeddings + XGBoost classifier for sub-100ms API inference.<br>
2. <strong>Browser2API Converter:</strong> Automatically converts browser HAR network recordings into executable REST API endpoints.<br>
3. <strong>Scalable Social Media Backend API:</strong> Clean architecture microservice with FastAPI, PostgreSQL, and Docker.<br>
4. <strong>Feed Recommendation Engine:</strong> Multi-factor ranking algorithm based on recency & engagement.<br>
5. <strong>AsyncIO TCP Chat Server:</strong> Zero-dependency event-driven socket server in Python.`;
    }

    // 3. Homelab / Self-Hosted / Infrastructure / Server
    if (text.includes("homelab") || text.includes("server") || text.includes("self") || text.includes("nginx") || text.includes("docker") || text.includes("vpn") || text.includes("wireguard") || text.includes("pi-hole")) {
      return `Harsh maintains a personal <strong>Linux Homelab</strong> running 20+ containerized microservices:<br><br>
⚡ <strong>Services:</strong> Nginx Reverse Proxy, Pi-hole DNS AdBlock, WireGuard VPN, Restic Automated Backups, and Prometheus/Grafana monitoring.<br>
📖 Check out his documentation: <a href="https://terrich-hash.github.io/homelab/" target="_blank" style="color: var(--accent-yellow); text-decoration: underline;">Homelab Docs ↗</a>`;
    }

    // 4. Who is Harsh / About / Education / Degree / NIU
    if (text.includes("who") || text.includes("about") || text.includes("education") || text.includes("background") || text.includes("gpa") || text.includes("degree") || text.includes("university") || text.includes("niu") || text.includes("tell me about harsh")) {
      return `<strong>Harsh Choudhary</strong> is a Software Engineer specializing in Machine Learning, Backend Development, and Linux Homelab Infrastructure.<br><br>🎓 <strong>Academics:</strong> B.Tech CSE (Data Science) @ Noida International University (2024–2028, GPA 8+/10).<br>🚀 <strong>Current Role:</strong> ML & Backend Intern @ C-DAC Noida.`;
    }

    // 5. Internship / Experience / CDAC
    if (text.includes("intern") || text.includes("c-dac") || text.includes("experience") || text.includes("cdac") || text.includes("role") || text.includes("job")) {
      return `Harsh is currently a <strong>Machine Learning & Backend Intern</strong> at <strong>Centre for Development of Advanced Computing (C-DAC), Noida</strong>.<br><br>Key Responsibilities:<br>• Developing AI inference models & REST APIs<br>• Automated audio/text dataset preprocessing<br>• Latency optimization on Linux server infrastructure.`;
    }

    // 6. Skills / Tech Stack / Languages
    if (text.includes("skill") || text.includes("tech") || text.includes("stack") || text.includes("python") || text.includes("fastapi") || text.includes("pytorch") || text.includes("go") || text.includes("golang") || text.includes("sql")) {
      return `Harsh's technical stack includes:<br><br>
• <strong>Backend:</strong> FastAPI, REST APIs, PostgreSQL, SQLAlchemy, JWT, Redis, AsyncIO<br>
• <strong>AI / ML:</strong> PyTorch, XGBoost, WavLM, Computer Vision, Speech Representation<br>
• <strong>DevOps & Linux:</strong> Linux Administration, Docker Compose, Nginx Reverse Proxy, WireGuard, GitHub Actions<br>
• <strong>Languages:</strong> Python, Go, JavaScript, TypeScript, SQL`;
    }

    // 7. Greeting check with word boundaries (avoids 'his' / 'him' matching 'hi')
    if (/\b(hi|hello|hey|greetings|howdy|sup)\b/i.test(text)) {
      return `Hello! I'm Harsh's AI Portfolio Assistant. How can I help you today? You can ask me about his <strong>Projects</strong>, <strong>Homelab</strong>, <strong>Tech Stack</strong>, <strong>Internship at C-DAC</strong>, or <strong>Contact details</strong>.`;
    }

    // Fallback Default
    return `I can help you explore Harsh's portfolio! Try asking:<br>
• "What are Harsh's top projects?"<br>
• "Tell me about his C-DAC internship"<br>
• "What is his homelab setup?"<br>
• "How can I contact him?"`;
  }
}
