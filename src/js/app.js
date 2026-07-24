import { personalInfo, skills, projects, experiences, leadership, articles } from '../data/portfolioData.js';
import { initPipelineDemo } from './pipelineDemo.js';
import { renderHomelabWidget } from './homelabWidget.js';
import { initTypingEffect } from './typingEffect.js';
import { initTerminalWidget } from './terminalWidget.js';
import { initFeedbackForm } from './feedbackForm.js';
import { initChatbot } from './chatbot.js';

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects("All");
  setupProjectFilters();
  renderExperiences();
  renderLeadership();
  renderArticles();
  renderHomelabWidget();
  initPipelineDemo();
  initTypingEffect();
  initTerminalWidget();
  initFeedbackForm();
  initChatbot();
  setupEmailCopy();
  setupThemeToggle();
  setupScrollReveal();
  setupCursorGlow();
});

// Render Skills Matrix (Easy-to-understand layout)
function renderSkills() {
  const container = document.getElementById("skills-grid-container");
  if (!container) return;

  container.innerHTML = skills.map(cat => `
    <div class="skill-category-card reveal">
      <div class="category-header">
        <div class="category-title">
          <span>${cat.category}</span>
        </div>
        <div class="category-desc">${cat.description}</div>
      </div>
      <div class="skill-pills">
        ${cat.items.map(item => `
          <div class="skill-pill ${item.core ? 'core-pill' : ''}">
            <span class="level-indicator"></span>
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Render Projects
function renderProjects(filterCategory) {
  const container = document.getElementById("projects-grid-container");
  if (!container) return;

  const filtered = filterCategory === "All"
    ? projects
    : projects.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(p => `
    <div class="project-card reveal" data-category="${p.category}">
      <div>
        <div class="project-badge">${p.category}</div>
        <h3 class="project-title">${p.title}</h3>
        <div class="project-subtitle">${p.subtitle}</div>
        <p class="project-desc">${p.description}</p>
        <ul class="project-highlights">
          ${p.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <span>View Source</span>
            <span>→</span>
          </a>
          ${p.interactivePipeline ? `<a href="#deepfake-demo" class="project-link" style="color: var(--accent-yellow)">Interactive Pipeline →</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// Setup Project Filtering
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.category);
      setupScrollReveal();
    });
  });
}

// Render Experience Timeline
function renderExperiences() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = experiences.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-card">
        <h3 class="role-title">${exp.role}</h3>
        <div class="company-name">${exp.company}</div>
        <div class="timeline-meta">${exp.period} • ${exp.type}</div>
        <p class="project-desc" style="margin-bottom: 0.75rem">${exp.description}</p>
        <ul class="project-highlights">
          ${exp.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Render Leadership
function renderLeadership() {
  const container = document.getElementById("leadership-container");
  if (!container) return;

  container.innerHTML = leadership.map(item => `
    <div class="info-card reveal">
      <div class="info-card-header">
        <h4 class="info-card-title">${item.title}</h4>
      </div>
      <div class="edu-institution">${item.event}</div>
      <p class="project-desc">${item.desc}</p>
    </div>
  `).join('');
}

// Render Technical Articles
function renderArticles() {
  const container = document.getElementById("articles-container");
  if (!container) return;

  container.innerHTML = articles.map(art => `
    <a href="${art.url}" target="_blank" rel="noopener noreferrer" class="article-card reveal">
      <div>
        <div class="article-meta">${art.category} • ${art.readTime}</div>
        <h3 class="article-title">${art.title}</h3>
        <p class="article-desc">${art.desc}</p>
      </div>
      <div class="project-link" style="flex-shrink:0;">Read Article →</div>
    </a>
  `).join('');
}

// Copy Email Functionality with Toast
function setupEmailCopy() {
  const copyBtn = document.getElementById("copy-email-btn");
  const toast = document.getElementById("toast");

  if (copyBtn && toast) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(personalInfo.socials.email).then(() => {
        toast.classList.add("show");
        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);
      });
    });
  }
}

// Theme Toggle
function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    toggleBtn.textContent = nextTheme === "light" ? "DARK" : "LIGHT";
  });
}

// Scroll Reveal Observer
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-reveal");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// Cursor Spotlight Effect
function setupCursorGlow() {
  const heroSection = document.querySelector(".hero");
  if (!heroSection) return;

  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroSection.style.setProperty("--mouse-x", `${x}px`);
    heroSection.style.setProperty("--mouse-y", `${y}px`);
  });
}
