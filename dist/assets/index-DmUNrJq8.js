(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const u={name:"Harsh Choudhary",handle:"harshchoudhary.dev",socials:{github:"https://github.com/terrich-hash",linkedin:"https://www.linkedin.com/in/harsh-choudhary-51b081200/",blog:"https://terrich-hash.github.io/terrich_blog/",email:"hc000269@gmail.com"}},L=[{category:"Backend Engineering",icon:"server",description:"Designing REST APIs, async event loops, clean architecture, and secure auth.",items:[{name:"FastAPI",level:"Advanced",core:!0},{name:"REST API Design",level:"Advanced",core:!0},{name:"PostgreSQL & SQLAlchemy",level:"Intermediate",core:!0},{name:"JWT & OAuth Auth",level:"Advanced",core:!0},{name:"Redis Caching",level:"Intermediate",core:!0},{name:"AsyncIO & TCP",level:"Intermediate",core:!0},{name:"Event-driven Architecture",level:"Intermediate",core:!0}]},{category:"AI & Machine Learning",icon:"cpu",description:"Building speech representations, computer vision, & gradient boosted pipelines.",items:[{name:"PyTorch",level:"Advanced",core:!0},{name:"XGBoost",level:"Advanced",core:!0},{name:"WavLM & Hugging Face",level:"Advanced",core:!0},{name:"Computer Vision",level:"Intermediate",core:!0},{name:"Speech Representation",level:"Advanced",core:!0},{name:"Feature Engineering",level:"Advanced",core:!0},{name:"Model Inference & Deployment",level:"Advanced",core:!0}]},{category:"Linux & DevOps Infrastructure",icon:"terminal",description:"Homelab administration, containerization, reverse proxying, and automation.",items:[{name:"Linux Administration",level:"Advanced",core:!0},{name:"Docker & Compose",level:"Advanced",core:!0},{name:"GitHub Actions CI/CD",level:"Intermediate",core:!0},{name:"Reverse Proxy & Nginx",level:"Advanced",core:!0},{name:"Networking (DNS, SSL, ZeroTrust)",level:"Advanced",core:!0},{name:"Shell Scripting",level:"Advanced",core:!0},{name:"Backup & System Monitoring",level:"Advanced",core:!0}]},{category:"Languages & Databases",icon:"code",description:"Polyglot programming across backend logic, scripts, and databases.",items:[{name:"Python",level:"Expert",core:!0},{name:"Go (Golang)",level:"Intermediate",core:!0},{name:"JavaScript / TypeScript",level:"Intermediate",core:!0},{name:"SQL",level:"Advanced",core:!0},{name:"PostgreSQL",level:"Advanced",core:!0},{name:"SQLite",level:"Intermediate",core:!0},{name:"Redis DB",level:"Intermediate",core:!0}]}],y=[{id:"deepfake-audio",title:"Deepfake Audio Detection System",category:"AI/ML",featured:!0,subtitle:"Self-supervised speech embedding pipeline + XGBoost binary classifier",description:"Production-style AI pipeline for detecting synthetic & AI-generated speech using Microsoft WavLM embeddings and gradient boosting for low-latency REST API inference.",tech:["Microsoft WavLM","XGBoost","FastAPI","Python","Librosa","FFmpeg"],highlights:["High accuracy speech feature extraction using pre-trained WavLM transformers","Sub-100ms inference time via optimized XGBoost classification backend","Full REST API integration with real-time confidence scoring and spectrogram visualization"],github:"https://github.com/terrich-hash",live:"https://terrich-hash.github.io/terrich_blog/posts/wavlm-xgboost-deepfake-detection/",interactivePipeline:!0},{id:"browser2api",title:"Browser2API Converter",category:"Backend",featured:!0,subtitle:"Convert browser network recordings (HAR files) into reusable API endpoints automatically",description:"Automated developer tooling that parses HTTP Archive (HAR) browser network captures and converts them into production-ready executable REST API endpoints and backend client code.",tech:["Python","FastAPI","HAR Parser","REST API","Code Generator"],highlights:["Parses complex HTTP network sessions, headers, auth tokens, and request payloads automatically","Generates clean, reusable backend API endpoints and client code directly from browser network logs"],github:"https://github.com/Terrich-hash/Browser2API",live:"https://github.com/Terrich-hash/Browser2API"},{id:"social-media-backend",title:"Scalable Social Media Backend API",category:"Backend",featured:!0,subtitle:"Clean architecture microservices backend with Docker & PostgreSQL",description:"High-performance backend engine supporting user auth, posts, nested comments, likes, follower relationships, and optimized SQL queries.",tech:["FastAPI","PostgreSQL","SQLAlchemy","JWT","Docker","Redis"],highlights:["Clean Architecture implementation isolating domain logic from framework","Query latency reduced by 40% using PostgreSQL indexing & Redis caching","Containerized with Docker Compose for seamless single-command deployment"],github:"https://github.com/Terrich-hash/Social-Backend",live:"https://github.com/Terrich-hash/Social-Backend"},{id:"recommendation-engine",title:"Feed Recommendation Engine",category:"Backend",featured:!1,subtitle:"Recency, engagement, and relevance content ranking pipeline",description:"Custom recommendation algorithm inspired by modern social media feeds, calculating dynamic feed scores based on user interaction history and recency decay.",tech:["Python","PostgreSQL","Redis","NumPy","FastAPI"],highlights:["Multi-factor score calculation combining recency, likes, and topic relevance","Sub-50ms feed retrieval with Redis cached candidate pools"],github:"https://github.com/Terrich-hash/social-feed-recommendation",live:"https://github.com/Terrich-hash/social-feed-recommendation"},{id:"async-chat-app",title:"Real-time Event-Driven Chat Server",category:"Backend",featured:!1,subtitle:"Pure Standard Library Python AsyncIO TCP Server",description:"Low-latency TCP chat server engineered using only Python standard library AsyncIO, featuring custom session management and non-blocking broadcast queues.",tech:["Python AsyncIO","TCP Sockets","Event-driven","Data Structures"],highlights:["Zero third-party dependencies — built entirely on Python AsyncIO primitives","Supports hundreds of concurrent user socket connections with minimal RAM footprint"],github:"https://github.com/Terrich-hash/chat",live:"https://github.com/Terrich-hash/chat"}],f=[{name:"Reverse Proxy",tech:"Nginx / Traefik",status:"Active",desc:"SSL Termination & Routing"},{name:"DNS & AdBlock",tech:"Pi-hole / Unbound",status:"Active",desc:"Local DNS & ZeroTrust resolution"},{name:"Container Host",tech:"Docker & Compose",status:"Active",desc:"20+ Self-hosted microservices"},{name:"Storage & Backups",tech:"Restic / Automated Cron",status:"Active",desc:"Encrypted offsite & local snapshots"},{name:"Network Isolation",tech:"VLANs & WireGuard",status:"Active",desc:"Secure encrypted remote VPN access"},{name:"System Monitoring",tech:"Prometheus & Grafana",status:"Active",desc:"Real-time metrics & health alerts"}],E=[{role:"Machine Learning & Backend Intern",company:"Centre for Development of Advanced Computing (C-DAC), Noida",period:"Present Internship",type:"Internship",description:"Working on core Machine Learning models, Backend API architectures, audio/text data preprocessing, and deployment pipelines.",points:["Developing production AI inference models and REST API interfaces","Building automated data preprocessing pipelines for training datasets","Optimizing model inference latency on Linux server infrastructure"]},{role:"Homelab Infrastructure Engineer",company:"Personal Lab Infrastructure",period:"Ongoing Sandbox",type:"Self-Hosted",description:"Engineered and maintained a multi-service Linux homelab environment to gain hands-on production sysadmin and DevOps experience.",points:["Configured secure remote access via WireGuard VPN and dynamic DNS","Automated container deployment, SSL renewal, and snapshot backups","Maintained comprehensive Markdown infrastructure documentation"]}],S=[{title:"Event Operations Lead",event:"Eureka! 2025 (NEC, IIT Bombay)",desc:"Coordinated event operations, logistics, and candidate management for national entrepreneurship challenge."},{title:"Hackathon Lead",event:"University-Level Hackathon",desc:"Spearheaded planning and execution for 200+ developer participants, managing schedule, judging criteria, and tech setup."}],P=[{title:"Building a Deepfake Audio Detection Pipeline with WavLM & XGBoost",category:"AI & ML",readTime:"6 min read",desc:"How speech representation embeddings from transformers can be combined with gradient boosted trees for sub-100ms synthetic audio detection.",url:"https://terrich-hash.github.io/terrich_blog/posts/wavlm-xgboost-deepfake-detection/"},{title:"Git & GitHub Engineering Fundamentals & Best Practices",category:"DevOps & Version Control",readTime:"7 min read",desc:"Comprehensive guide to Git workflows, branching strategies, commit cleanliness, and GitHub Actions automation.",url:"https://terrich-hash.github.io/terrich_blog/posts/git-fundamentals/"},{title:"Introduction to Machine Learning & Model Pipeline Architecture",category:"AI & ML",readTime:"5 min read",desc:"Foundational principles of machine learning systems, data preprocessing, feature engineering, and model evaluation.",url:"https://terrich-hash.github.io/terrich_blog/posts/introduction-to-machine-learning/"}];function w(){const n=[{id:1,name:"Audio Upload",desc:"Raw WAV/MP3 payload received via FastAPI REST endpoint."},{id:2,name:"Preprocessing",desc:"Resampling to 16kHz, noise reduction, and Librosa normalization."},{id:3,name:"WavLM Extraction",desc:"Microsoft WavLM Large model extracts dense speech representations."},{id:4,name:"Embedding Gen",desc:"1024-dimensional self-supervised speech embedding vector produced."},{id:5,name:"XGBoost Classifier",desc:"Gradient boosted decision trees compute binary probability."},{id:6,name:"Prediction",desc:"Final classification score & confidence rating returned."}],t={human:{label:"Sample 1: Natural Human Speech",prediction:"REAL SPEECH",confidence:98.4,isReal:!0,waveformHeights:[30,45,60,80,50,40,65,85,45,30]},synthetic:{label:"Sample 2: AI Generated Voice (TTS)",prediction:"AI DEEPFAKE",confidence:99.1,isReal:!1,waveformHeights:[70,75,72,74,76,73,75,78,72,70]}};let a="human",o=!1;const i=document.querySelectorAll(".sample-btn"),r=document.getElementById("run-pipeline-btn"),c=document.getElementById("audio-waves-container"),l=document.getElementById("conf-fill"),p=document.getElementById("conf-text"),m=document.getElementById("pred-text"),h=document.getElementById("step-desc-text");if(!r)return;i.forEach(e=>{e.addEventListener("click",()=>{o||(i.forEach(d=>d.classList.remove("active")),e.classList.add("active"),a=e.dataset.sample,v())})}),r.addEventListener("click",()=>{o||s()});function v(){m.textContent="Awaiting Pipeline Run...",m.style.color="var(--text-muted)",p.textContent="--%",l.style.width="0%",h.textContent="Click 'Run Pipeline Simulation' to trace WavLM speech processing step by step.",document.querySelectorAll(".pipeline-step").forEach((e,d)=>{d===0?e.classList.add("active"):e.classList.remove("active")})}function s(){o=!0,r.disabled=!0,r.textContent="Executing WavLM Pipeline...",c.classList.add("wave-animating");const e=t[a],d=document.querySelectorAll(".pipeline-step");let g=0;const I=setInterval(()=>{d.forEach(k=>k.classList.remove("active")),g<n.length?(d[g].classList.add("active"),h.textContent=`Stage ${g+1}: ${n[g].desc}`,g++):(clearInterval(I),o=!1,r.disabled=!1,r.textContent="Run Pipeline Simulation",c.classList.remove("wave-animating"),m.textContent=e.prediction,m.style.color=e.isReal?"#10b981":"#ef4444",p.textContent=`${e.confidence}%`,l.style.width=`${e.confidence}%`,l.style.background=e.isReal?"#10b981":"#ef4444",h.textContent=`Complete! WavLM extracted 1024-dim speech embeddings & XGBoost classified audio as ${e.prediction} with ${e.confidence}% certainty.`)},600)}}function C(){const n=document.getElementById("homelab-grid-container");n&&(n.innerHTML=f.map(t=>`
    <div class="homelab-card" data-name="${t.name}">
      <div class="homelab-info">
        <div class="homelab-name">${t.name}</div>
        <div class="homelab-tech">${t.tech}</div>
        <div class="homelab-desc">${t.desc}</div>
      </div>
      <div class="status-pill" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;">
        <span class="status-dot"></span>
        <span>${t.status}</span>
      </div>
    </div>
  `).join(""))}function B(){const n=document.getElementById("typing-target");if(!n)return;const t=["Machine Learning Engineer","Backend API Architect","Linux Infrastructure Specialist","Self-Hosted Homelab Engineer","Async & Event-Driven Developer"];let a=0,o=0,i=!1,r=90;function c(){const l=t[a];i?(n.textContent=l.substring(0,o-1),o--,r=45):(n.textContent=l.substring(0,o+1),o++,r=90),!i&&o===l.length?(i=!0,r=2200):i&&o===0&&(i=!1,a=(a+1)%t.length,r=400),setTimeout(c,r)}c()}function T(){const n=document.getElementById("terminal-input"),t=document.getElementById("terminal-output");if(!n||!t)return;const a={help:()=>`
Available Commands:
  <span style="color: var(--accent-yellow)">fetch</span>       - View system & engineer specifications
  <span style="color: var(--accent-yellow)">status</span>      - Check homelab live container statuses
  <span style="color: var(--accent-yellow)">projects</span>    - List top featured engineering projects
  <span style="color: var(--accent-yellow)">contact</span>     - View contact email and links
  <span style="color: var(--accent-yellow)">clear</span>       - Clear terminal output
`,fetch:()=>`
<span style="color: var(--accent-yellow)">OS:</span> Arch Linux / Ubuntu Server x86_64
<span style="color: var(--accent-yellow)">Host:</span> Homelab Infrastructure Node 01
<span style="color: var(--accent-yellow)">Uptime:</span> 99.98% (Self-hosted 20+ containers)
<span style="color: var(--accent-yellow)">Engineer:</span> ${u.name} (${u.handle})
<span style="color: var(--accent-yellow)">Education:</span> B.Tech CSE (Data Science) @ NIU (GPA 8+/10)
<span style="color: var(--accent-yellow)">Current Role:</span> ML & Backend Intern @ C-DAC Noida
<span style="color: var(--accent-yellow)">Stack:</span> Python, Go, FastAPI, PyTorch, WavLM, Docker, PostgreSQL, Linux
`,status:()=>f.map(i=>`[ONLINE] ${i.name.padEnd(20)} | ${i.tech.padEnd(18)} | ${i.desc}`).join(`
`),projects:()=>`
1. Deepfake Audio Detection System (WavLM + XGBoost + FastAPI)
2. Browser2API Engine (Automated HAR to REST generator)
3. Scalable Social Media Backend API (Clean Arch + Docker + PostgreSQL)
4. Feed Recommendation Engine (Recency & Engagement Ranking)
5. AsyncIO TCP Chat Server (Pure Python Event Loop)
`,contact:()=>`
Email:    ${u.socials.email}
GitHub:   ${u.socials.github}
LinkedIn: ${u.socials.linkedin}
Blog:     ${u.socials.blog}
`};n.addEventListener("keydown",i=>{if(i.key==="Enter"){const r=n.value.trim().toLowerCase();if(n.value="",r==="")return;if(o(`
<span style="color: var(--accent-yellow)">harsh@homelab:~$</span> ${r}`),r==="clear"){t.innerHTML=`Type '<span style="color: var(--accent-yellow)">help</span>' to list available terminal commands.
`;return}a[r]?o(a[r]()):o(`bash: command not found: ${r}. Type '<span style="color: var(--accent-yellow)">help</span>' for available options.`)}});function o(i){t.innerHTML+=i+`
`,t.scrollTop=t.scrollHeight}}function x(){const n=document.getElementById("feedback-form"),t=document.getElementById("feedback-submit-btn"),a=document.getElementById("feedback-status");!n||!t||n.addEventListener("submit",o=>{o.preventDefault();const i=document.getElementById("feedback-name").value.trim(),r=document.getElementById("feedback-email").value.trim(),c=document.getElementById("feedback-message").value.trim();!i||!r||!c||(t.disabled=!0,t.textContent="Sending Feedback...",setTimeout(()=>{const l=`mailto:hc000269@gmail.com?subject=Feedback from ${encodeURIComponent(i)}&body=${encodeURIComponent(`Sender: ${i} (${r})

Message:
${c}`)}`;window.location.href=l,t.disabled=!1,t.textContent="Send Message →",n.reset(),a&&(a.style.display="block",a.textContent="Thank you for your feedback! Opening your email client to send...",setTimeout(()=>{a.style.display="none"},5e3))},600))})}function H(){const n=document.getElementById("chatbot-toggle"),t=document.getElementById("chatbot-window"),a=document.getElementById("chatbot-close"),o=document.getElementById("chatbot-messages"),i=document.getElementById("chatbot-form"),r=document.getElementById("chatbot-input"),c=document.getElementById("chatbot-chips");if(!n||!t||!o||!r)return;n.addEventListener("click",()=>{t.classList.toggle("open"),t.classList.contains("open")&&r.focus()}),a&&a.addEventListener("click",()=>{t.classList.remove("open")}),c&&c.addEventListener("click",s=>{if(s.target.classList.contains("chat-chip")){const e=s.target.dataset.query;l(e)}}),i.addEventListener("submit",s=>{s.preventDefault();const e=r.value.trim();e&&(r.value="",l(e))});function l(s){p(s,"user");const e=m();setTimeout(()=>{h(e);const d=v(s);p(d,"bot")},500)}function p(s,e){const d=document.createElement("div");d.className=`chat-msg ${e}-msg`,d.innerHTML=s,o.appendChild(d),o.scrollTop=o.scrollHeight}function m(){const s="typing-"+Date.now(),e=document.createElement("div");return e.id=s,e.className="chat-msg bot-msg typing-dots",e.innerHTML="<span>.</span><span>.</span><span>.</span>",o.appendChild(e),o.scrollTop=o.scrollHeight,s}function h(s){const e=document.getElementById(s);e&&e.remove()}function v(s){const e=s.toLowerCase().trim();return e.includes("contact")||e.includes("email")||e.includes("gmail")||e.includes("linkedin")||e.includes("github")||e.includes("reach")||e.includes("message")||e.includes("talk")||e.includes("hire")||e.includes("mail")?`You can reach Harsh directly via:<br><br>
📧 <strong>Email:</strong> <a href="mailto:hc000269@gmail.com" style="color: var(--accent-yellow); text-decoration: underline;">hc000269@gmail.com</a><br>
💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harsh-choudhary-51b081200/" target="_blank" style="color: var(--accent-yellow); text-decoration: underline;">LinkedIn Profile ↗</a><br>
💻 <strong>GitHub:</strong> <a href="https://github.com/terrich-hash" target="_blank" style="color: var(--accent-yellow); text-decoration: underline;">terrich-hash ↗</a><br>
✍️ <strong>Blog:</strong> <a href="https://terrich-hash.github.io/terrich_blog/" target="_blank" style="color: var(--accent-yellow); text-decoration: underline;">Technical Blog ↗</a>`:e.includes("project")||e.includes("deepfake")||e.includes("wavlm")||e.includes("browser2api")||e.includes("backend")||e.includes("chat")||e.includes("built")||e.includes("system")?`Here are Harsh's top engineering projects:<br><br>
1. <strong>Deepfake Audio Detection System:</strong> WavLM speech embeddings + XGBoost classifier for sub-100ms API inference.<br>
2. <strong>Browser2API Converter:</strong> Automatically converts browser HAR network recordings into executable REST API endpoints.<br>
3. <strong>Scalable Social Media Backend API:</strong> Clean architecture microservice with FastAPI, PostgreSQL, and Docker.<br>
4. <strong>Feed Recommendation Engine:</strong> Multi-factor ranking algorithm based on recency & engagement.<br>
5. <strong>AsyncIO TCP Chat Server:</strong> Zero-dependency event-driven socket server in Python.`:e.includes("homelab")||e.includes("server")||e.includes("self")||e.includes("nginx")||e.includes("docker")||e.includes("vpn")||e.includes("wireguard")||e.includes("pi-hole")?`Harsh maintains a personal <strong>Linux Homelab</strong> running 20+ containerized microservices:<br><br>
⚡ <strong>Services:</strong> Nginx Reverse Proxy, Pi-hole DNS AdBlock, WireGuard VPN, Restic Automated Backups, and Prometheus/Grafana monitoring.<br>
📖 Check out his documentation: <a href="https://terrich-hash.github.io/homelab/" target="_blank" style="color: var(--accent-yellow); text-decoration: underline;">Homelab Docs ↗</a>`:e.includes("who")||e.includes("about")||e.includes("education")||e.includes("background")||e.includes("gpa")||e.includes("degree")||e.includes("university")||e.includes("niu")||e.includes("tell me about harsh")?"<strong>Harsh Choudhary</strong> is a Software Engineer specializing in Machine Learning, Backend Development, and Linux Homelab Infrastructure.<br><br>🎓 <strong>Academics:</strong> B.Tech CSE (Data Science) @ Noida International University (2024–2028, GPA 8+/10).<br>🚀 <strong>Current Role:</strong> ML & Backend Intern @ C-DAC Noida.":e.includes("intern")||e.includes("c-dac")||e.includes("experience")||e.includes("cdac")||e.includes("role")||e.includes("job")?"Harsh is currently a <strong>Machine Learning & Backend Intern</strong> at <strong>Centre for Development of Advanced Computing (C-DAC), Noida</strong>.<br><br>Key Responsibilities:<br>• Developing AI inference models & REST APIs<br>• Automated audio/text dataset preprocessing<br>• Latency optimization on Linux server infrastructure.":e.includes("skill")||e.includes("tech")||e.includes("stack")||e.includes("python")||e.includes("fastapi")||e.includes("pytorch")||e.includes("go")||e.includes("golang")||e.includes("sql")?`Harsh's technical stack includes:<br><br>
• <strong>Backend:</strong> FastAPI, REST APIs, PostgreSQL, SQLAlchemy, JWT, Redis, AsyncIO<br>
• <strong>AI / ML:</strong> PyTorch, XGBoost, WavLM, Computer Vision, Speech Representation<br>
• <strong>DevOps & Linux:</strong> Linux Administration, Docker Compose, Nginx Reverse Proxy, WireGuard, GitHub Actions<br>
• <strong>Languages:</strong> Python, Go, JavaScript, TypeScript, SQL`:/\b(hi|hello|hey|greetings|howdy|sup)\b/i.test(e)?"Hello! I'm Harsh's AI Portfolio Assistant. How can I help you today? You can ask me about his <strong>Projects</strong>, <strong>Homelab</strong>, <strong>Tech Stack</strong>, <strong>Internship at C-DAC</strong>, or <strong>Contact details</strong>.":`I can help you explore Harsh's portfolio! Try asking:<br>
• "What are Harsh's top projects?"<br>
• "Tell me about his C-DAC internship"<br>
• "What is his homelab setup?"<br>
• "How can I contact him?"`}}document.addEventListener("DOMContentLoaded",()=>{R(),b("All"),$(),D(),M(),j(),C(),w(),B(),T(),x(),H(),G(),N(),A(),F()});function R(){const n=document.getElementById("skills-grid-container");n&&(n.innerHTML=L.map(t=>`
    <div class="skill-category-card reveal">
      <div class="category-header">
        <div class="category-title">
          <span>${t.category}</span>
        </div>
        <div class="category-desc">${t.description}</div>
      </div>
      <div class="skill-pills">
        ${t.items.map(a=>`
          <div class="skill-pill ${a.core?"core-pill":""}">
            <span class="level-indicator"></span>
            <span>${a.name}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join(""))}function b(n){const t=document.getElementById("projects-grid-container");if(!t)return;const a=n==="All"?y:y.filter(o=>o.category===n);t.innerHTML=a.map(o=>`
    <div class="project-card reveal" data-category="${o.category}">
      <div>
        <div class="project-badge">${o.category}</div>
        <h3 class="project-title">${o.title}</h3>
        <div class="project-subtitle">${o.subtitle}</div>
        <p class="project-desc">${o.description}</p>
        <ul class="project-highlights">
          ${o.highlights.map(i=>`<li>${i}</li>`).join("")}
        </ul>
      </div>
      <div>
        <div class="project-tech">
          ${o.tech.map(i=>`<span class="tech-tag">${i}</span>`).join("")}
        </div>
        <div class="project-footer">
          <a href="${o.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <span>View Source</span>
            <span>→</span>
          </a>
          ${o.interactivePipeline?'<a href="#deepfake-demo" class="project-link" style="color: var(--accent-yellow)">Interactive Pipeline →</a>':""}
        </div>
      </div>
    </div>
  `).join("")}function $(){const n=document.querySelectorAll(".filter-btn");n.forEach(t=>{t.addEventListener("click",()=>{n.forEach(a=>a.classList.remove("active")),t.classList.add("active"),b(t.dataset.category),A()})})}function D(){const n=document.getElementById("timeline-container");n&&(n.innerHTML=E.map(t=>`
    <div class="timeline-item reveal">
      <div class="timeline-card">
        <h3 class="role-title">${t.role}</h3>
        <div class="company-name">${t.company}</div>
        <div class="timeline-meta">${t.period} • ${t.type}</div>
        <p class="project-desc" style="margin-bottom: 0.75rem">${t.description}</p>
        <ul class="project-highlights">
          ${t.points.map(a=>`<li>${a}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join(""))}function M(){const n=document.getElementById("leadership-container");n&&(n.innerHTML=S.map(t=>`
    <div class="info-card reveal">
      <div class="info-card-header">
        <h4 class="info-card-title">${t.title}</h4>
      </div>
      <div class="edu-institution">${t.event}</div>
      <p class="project-desc">${t.desc}</p>
    </div>
  `).join(""))}function j(){const n=document.getElementById("articles-container");n&&(n.innerHTML=P.map(t=>`
    <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="article-card reveal">
      <div>
        <div class="article-meta">${t.category} • ${t.readTime}</div>
        <h3 class="article-title">${t.title}</h3>
        <p class="article-desc">${t.desc}</p>
      </div>
      <div class="project-link" style="flex-shrink:0;">Read Article →</div>
    </a>
  `).join(""))}function G(){const n=document.getElementById("copy-email-btn"),t=document.getElementById("toast");n&&t&&n.addEventListener("click",()=>{navigator.clipboard.writeText(u.socials.email).then(()=>{t.classList.add("show"),setTimeout(()=>{t.classList.remove("show")},3e3)})})}function N(){const n=document.getElementById("theme-toggle");n&&n.addEventListener("click",()=>{const a=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",a),n.textContent=a==="light"?"DARK":"LIGHT"})}function A(){const n=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&a.target.classList.add("active-reveal")})},{threshold:.1});document.querySelectorAll(".reveal").forEach(t=>n.observe(t))}function F(){const n=document.querySelector(".hero");n&&n.addEventListener("mousemove",t=>{const a=n.getBoundingClientRect(),o=t.clientX-a.left,i=t.clientY-a.top;n.style.setProperty("--mouse-x",`${o}px`),n.style.setProperty("--mouse-y",`${i}px`)})}
