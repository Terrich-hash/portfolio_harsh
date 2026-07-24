// Homelab Interactive Service Map Widget

import { homelabServices } from '../data/portfolioData.js';

export function renderHomelabWidget() {
  const container = document.getElementById("homelab-grid-container");
  if (!container) return;

  container.innerHTML = homelabServices.map(service => `
    <div class="homelab-card" data-name="${service.name}">
      <div class="homelab-info">
        <div class="homelab-name">${service.name}</div>
        <div class="homelab-tech">${service.tech}</div>
        <div class="homelab-desc">${service.desc}</div>
      </div>
      <div class="status-pill" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;">
        <span class="status-dot"></span>
        <span>${service.status}</span>
      </div>
    </div>
  `).join('');
}
