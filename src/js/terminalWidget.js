// Interactive Homelab Terminal Simulator

import { homelabServices, personalInfo } from '../data/portfolioData.js';

export function initTerminalWidget() {
  const inputEl = document.getElementById("terminal-input");
  const outputEl = document.getElementById("terminal-output");
  if (!inputEl || !outputEl) return;

  const commands = {
    help: () => `
Available Commands:
  <span style="color: var(--accent-yellow)">fetch</span>       - View system & engineer specifications
  <span style="color: var(--accent-yellow)">status</span>      - Check homelab live container statuses
  <span style="color: var(--accent-yellow)">projects</span>    - List top featured engineering projects
  <span style="color: var(--accent-yellow)">contact</span>     - View contact email and links
  <span style="color: var(--accent-yellow)">clear</span>       - Clear terminal output
`,
    fetch: () => `
<span style="color: var(--accent-yellow)">OS:</span> Arch Linux / Ubuntu Server x86_64
<span style="color: var(--accent-yellow)">Host:</span> Homelab Infrastructure Node 01
<span style="color: var(--accent-yellow)">Uptime:</span> 99.98% (Self-hosted 20+ containers)
<span style="color: var(--accent-yellow)">Engineer:</span> ${personalInfo.name} (${personalInfo.handle})
<span style="color: var(--accent-yellow)">Education:</span> B.Tech CSE (Data Science) @ NIU (GPA 8+/10)
<span style="color: var(--accent-yellow)">Current Role:</span> ML & Backend Intern @ C-DAC Noida
<span style="color: var(--accent-yellow)">Stack:</span> Python, Go, FastAPI, PyTorch, WavLM, Docker, PostgreSQL, Linux
`,
    status: () => homelabServices.map(s => `[ONLINE] ${s.name.padEnd(20)} | ${s.tech.padEnd(18)} | ${s.desc}`).join("\n"),
    projects: () => `
1. Deepfake Audio Detection System (WavLM + XGBoost + FastAPI)
2. Browser2API Engine (Automated HAR to REST generator)
3. Scalable Social Media Backend API (Clean Arch + Docker + PostgreSQL)
4. Feed Recommendation Engine (Recency & Engagement Ranking)
5. AsyncIO TCP Chat Server (Pure Python Event Loop)
`,
    contact: () => `
Email:    ${personalInfo.socials.email}
GitHub:   ${personalInfo.socials.github}
LinkedIn: ${personalInfo.socials.linkedin}
Blog:     ${personalInfo.socials.blog}
`
  };

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = inputEl.value.trim().toLowerCase();
      inputEl.value = "";

      if (cmd === "") return;

      appendOutput(`\n<span style="color: var(--accent-yellow)">harsh@homelab:~$</span> ${cmd}`);

      if (cmd === "clear") {
        outputEl.innerHTML = `Type '<span style="color: var(--accent-yellow)">help</span>' to list available terminal commands.\n`;
        return;
      }

      if (commands[cmd]) {
        appendOutput(commands[cmd]());
      } else {
        appendOutput(`bash: command not found: ${cmd}. Type '<span style="color: var(--accent-yellow)">help</span>' for available options.`);
      }
    }
  });

  function appendOutput(text) {
    outputEl.innerHTML += text + "\n";
    outputEl.scrollTop = outputEl.scrollHeight;
  }
}
