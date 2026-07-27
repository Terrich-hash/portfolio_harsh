export const personalInfo = {
  name: "Harsh Choudhary",
  title: "Machine Learning Engineer • Backend Developer • Homelab Engineer",
  handle: "harshchoudhary.dev",
  status: "Available for Opportunities",
  location: "Noida / Delhi NCR, India",
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering (Data Science)",
    institution: "Noida International University",
    period: "2024 – 2028",
    gpa: "8+/10"
  },
  bio: "I'm a Software Engineer with hands-on experience in Backend Development, Artificial Intelligence, Machine Learning, Linux Infrastructure, Networking, and Self-Hosted Systems. Rather than only learning concepts theoretically, I believe in building production-ready systems that solve real-world problems.",
  philosophy: "I believe the best way to learn is by building. Every project is an opportunity to bridge the gap between software engineering and system infrastructure.",
  socials: {
    github: "https://github.com/terrich-hash",
    linkedin: "https://www.linkedin.com/in/harsh-choudhary-51b081200/",
    blog: "https://terrich-hash.github.io/terrich_blog/",
    homelabDocs: "https://terrich-hash.github.io/homelab/",
    email: "hc000269@gmail.com"
  }
};

export const skills = [
  {
    category: "Backend Engineering",
    icon: "server",
    description: "Designing REST APIs, async event loops, clean architecture, and secure auth.",
    items: [
      { name: "FastAPI", level: "Advanced", core: true },
      { name: "REST API Design", level: "Advanced", core: true },
      { name: "PostgreSQL & SQLAlchemy", level: "Intermediate", core: true },
      { name: "JWT & OAuth Auth", level: "Advanced", core: true },
      { name: "Redis Caching", level: "Intermediate", core: true },
      { name: "AsyncIO & TCP", level: "Intermediate", core: true },
      { name: "Event-driven Architecture", level: "Intermediate", core: true }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "cpu",
    description: "Building speech representations, computer vision, & gradient boosted pipelines.",
    items: [
      { name: "PyTorch", level: "Advanced", core: true },
      { name: "XGBoost", level: "Advanced", core: true },
      { name: "WavLM & Hugging Face", level: "Advanced", core: true },
      { name: "Computer Vision", level: "Intermediate", core: true },
      { name: "Speech Representation", level: "Advanced", core: true },
      { name: "Feature Engineering", level: "Advanced", core: true },
      { name: "Model Inference & Deployment", level: "Advanced", core: true }
    ]
  },
  {
    category: "Linux & DevOps Infrastructure",
    icon: "terminal",
    description: "Homelab administration, containerization, reverse proxying, and automation.",
    items: [
      { name: "Linux Administration", level: "Advanced", core: true },
      { name: "Docker & Compose", level: "Advanced", core: true },
      { name: "GitHub Actions CI/CD", level: "Intermediate", core: true },
      { name: "Reverse Proxy & Nginx", level: "Advanced", core: true },
      { name: "Networking (DNS, SSL, ZeroTrust)", level: "Advanced", core: true },
      { name: "Shell Scripting", level: "Advanced", core: true },
      { name: "Backup & System Monitoring", level: "Advanced", core: true }
    ]
  },
  {
    category: "Languages & Databases",
    icon: "code",
    description: "Polyglot programming across backend logic, scripts, and databases.",
    items: [
      { name: "Python", level: "Expert", core: true },
      { name: "Go (Golang)", level: "Intermediate", core: true },
      { name: "JavaScript / TypeScript", level: "Intermediate", core: true },
      { name: "SQL", level: "Advanced", core: true },
      { name: "PostgreSQL", level: "Advanced", core: true },
      { name: "SQLite", level: "Intermediate", core: true },
      { name: "Redis DB", level: "Intermediate", core: true }
    ]
  }
];

export const projects = [
  {
    id: "deepfake-audio",
    title: "Deepfake Audio Detection System",
    category: "AI/ML",
    featured: true,
    subtitle: "Self-supervised speech embedding pipeline + XGBoost binary classifier",
    description: "Production-style AI pipeline for detecting synthetic & AI-generated speech using Microsoft WavLM embeddings and gradient boosting for low-latency REST API inference.",
    tech: ["Microsoft WavLM", "XGBoost", "FastAPI", "Python", "Librosa", "FFmpeg"],
    highlights: [
      "High accuracy speech feature extraction using pre-trained WavLM transformers",
      "Sub-100ms inference time via optimized XGBoost classification backend",
      "Full REST API integration with real-time confidence scoring and spectrogram visualization"
    ],
    github: "https://github.com/terrich-hash",
    live: "https://terrich-hash.github.io/terrich_blog/posts/wavlm-xgboost-deepfake-detection/",
    interactivePipeline: true
  },
  {
    id: "browser2api",
    title: "Browser2API Converter",
    category: "Backend",
    featured: true,
    subtitle: "Convert browser network recordings (HAR files) into reusable API endpoints automatically",
    description: "Automated developer tooling that parses HTTP Archive (HAR) browser network captures and converts them into production-ready executable REST API endpoints and backend client code.",
    tech: ["Python", "FastAPI", "HAR Parser", "REST API", "Code Generator"],
    highlights: [
      "Parses complex HTTP network sessions, headers, auth tokens, and request payloads automatically",
      "Generates clean, reusable backend API endpoints and client code directly from browser network logs"
    ],
    github: "https://github.com/Terrich-hash/Browser2API",
    live: "https://github.com/Terrich-hash/Browser2API"
  },
  {
    id: "social-media-backend",
    title: "Scalable Social Media Backend API",
    category: "Backend",
    featured: true,
    subtitle: "Clean architecture microservices backend with Docker & PostgreSQL",
    description: "High-performance backend engine supporting user auth, posts, nested comments, likes, follower relationships, and optimized SQL queries.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Docker", "Redis"],
    highlights: [
      "Clean Architecture implementation isolating domain logic from framework",
      "Query latency reduced by 40% using PostgreSQL indexing & Redis caching",
      "Containerized with Docker Compose for seamless single-command deployment"
    ],
    github: "https://github.com/Terrich-hash/Social-Backend",
    live: "https://github.com/Terrich-hash/Social-Backend"
  },
  {
    id: "recommendation-engine",
    title: "Feed Recommendation Engine",
    category: "Backend",
    featured: false,
    subtitle: "Recency, engagement, and relevance content ranking pipeline",
    description: "Custom recommendation algorithm inspired by modern social media feeds, calculating dynamic feed scores based on user interaction history and recency decay.",
    tech: ["Python", "PostgreSQL", "Redis", "NumPy", "FastAPI"],
    highlights: [
      "Multi-factor score calculation combining recency, likes, and topic relevance",
      "Sub-50ms feed retrieval with Redis cached candidate pools"
    ],
    github: "https://github.com/Terrich-hash/social-feed-recommendation",
    live: "https://github.com/Terrich-hash/social-feed-recommendation"
  },
  {
    id: "async-chat-app",
    title: "Real-time Event-Driven Chat Server",
    category: "Backend",
    featured: false,
    subtitle: "Pure Standard Library Python AsyncIO TCP Server",
    description: "Low-latency TCP chat server engineered using only Python standard library AsyncIO, featuring custom session management and non-blocking broadcast queues.",
    tech: ["Python AsyncIO", "TCP Sockets", "Event-driven", "Data Structures"],
    highlights: [
      "Zero third-party dependencies — built entirely on Python AsyncIO primitives",
      "Supports hundreds of concurrent user socket connections with minimal RAM footprint"
    ],
    github: "https://github.com/Terrich-hash/chat",
    live: "https://github.com/Terrich-hash/chat"
  }
];

export const homelabServices = [
  { name: "Reverse Proxy", tech: "Nginx / Traefik", status: "Active", desc: "SSL Termination & Routing" },
  { name: "DNS & AdBlock", tech: "Pi-hole / Unbound", status: "Active", desc: "Local DNS & ZeroTrust resolution" },
  { name: "Container Host", tech: "Docker & Compose", status: "Active", desc: "20+ Self-hosted microservices" },
  { name: "Storage & Backups", tech: "Restic / Automated Cron", status: "Active", desc: "Encrypted offsite & local snapshots" },
  { name: "Network Isolation", tech: "VLANs & WireGuard", status: "Active", desc: "Secure encrypted remote VPN access" },
  { name: "System Monitoring", tech: "Prometheus & Grafana", status: "Active", desc: "Real-time metrics & health alerts" }
];

export const experiences = [
  {
    role: "Machine Learning & Backend Intern",
    company: "Centre for Development of Advanced Computing (C-DAC), Noida",
    period: "Present Internship",
    type: "Internship",
    description: "Working on core Machine Learning models, Backend API architectures, audio/text data preprocessing, and deployment pipelines.",
    points: [
      "Developing production AI inference models and REST API interfaces",
      "Building automated data preprocessing pipelines for training datasets",
      "Optimizing model inference latency on Linux server infrastructure"
    ]
  },
  {
    role: "Homelab Infrastructure Engineer",
    company: "Personal Lab Infrastructure",
    period: "Ongoing Sandbox",
    type: "Self-Hosted",
    description: "Engineered and maintained a multi-service Linux homelab environment to gain hands-on production sysadmin and DevOps experience.",
    points: [
      "Configured secure remote access via WireGuard VPN and dynamic DNS",
      "Automated container deployment, SSL renewal, and snapshot backups",
      "Maintained comprehensive Markdown infrastructure documentation"
    ]
  }
];

export const leadership = [
  {
    title: "Event Operations Lead",
    event: "Eureka! 2025 (NEC, IIT Bombay)",
    desc: "Coordinated event operations, logistics, and candidate management for national entrepreneurship challenge."
  },
  {
    title: "Hackathon Lead",
    event: "University-Level Hackathon",
    desc: "Spearheaded planning and execution for 200+ developer participants, managing schedule, judging criteria, and tech setup."
  }
];

export const articles = [
  {
    title: "Building My Homelab: From an Old Laptop to a Self-Hosted Cloud",
    category: "DevOps & Homelab",
    readTime: "6 min read",
    desc: "A complete guide to building a dual-server self-hosted homelab using an old Lenovo laptop running Arch Linux and an old Android phone running Termux Docker, linked via Tailscale Zero Trust and Nginx Proxy Manager.",
    url: "https://terrich-hash.github.io/terrich_blog/posts/building-my-homelab-from-an-old-laptop-to-a-self-hosted-cloud/"
  },
  {
    title: "Building a Deepfake Audio Detection Pipeline with WavLM & XGBoost",
    category: "AI & ML",
    readTime: "6 min read",
    desc: "How speech representation embeddings from transformers can be combined with gradient boosted trees for sub-100ms synthetic audio detection.",
    url: "https://terrich-hash.github.io/terrich_blog/posts/wavlm-xgboost-deepfake-detection/"
  },
  {
    title: "Git & GitHub Engineering Fundamentals & Best Practices",
    category: "DevOps & Version Control",
    readTime: "7 min read",
    desc: "Comprehensive guide to Git workflows, branching strategies, commit cleanliness, and GitHub Actions automation.",
    url: "https://terrich-hash.github.io/terrich_blog/posts/git-fundamentals/"
  },
  {
    title: "Introduction to Machine Learning & Model Pipeline Architecture",
    category: "AI & ML",
    readTime: "5 min read",
    desc: "Foundational principles of machine learning systems, data preprocessing, feature engineering, and model evaluation.",
    url: "https://terrich-hash.github.io/terrich_blog/posts/introduction-to-machine-learning/"
  }
];
