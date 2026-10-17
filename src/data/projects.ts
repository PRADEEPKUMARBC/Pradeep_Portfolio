import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    tagline: "High-accuracy binary classification engine for identifying fraudulent financial transactions.",
    category: "AI & ML",
    summary:
      "A machine learning binary classification system engineered to distinguish authentic and fraudulent transactions from highly imbalanced financial datasets.",
    problem:
      "Credit card transaction streams suffer from extreme class imbalance (less than 0.2% fraud), causing naive classifiers to miss fraudulent activities while generating high false-alarm rates.",
    solution:
      "Implemented a resilient data-preprocessing and SMOTE oversampling pipeline with a Random Forest classifier. Backed by a high-performance FastAPI service with Pydantic schema validation and an interactive React transaction evaluator.",
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Random Forest",
      "Pandas",
      "NumPy",
      "Pydantic",
      "React.js"
    ],
    features: [
      "Trained with SMOTE synthetic oversampling on heavily skewed transaction distributions",
      "Random Forest classification for robust decision boundaries and feature importance extraction",
      "FastAPI REST microservice with asynchronous request handling and Pydantic validation",
      "Real-time fraud probability scoring and transaction parameter simulation interface",
      "Comprehensive evaluation metrics including Precision, Recall, and ROC-AUC curve analysis"
    ],
    architecture: [
      "Client: React dashboard for transaction parameter inputs and live anomaly visualization",
      "API Layer: FastAPI with asynchronous endpoints and strict Pydantic payload models",
      "ML Engine: Scikit-learn serialized pipeline loaded in memory for sub-50ms inference",
      "Data Processing: Pandas & NumPy normalization, standardization, and feature alignment"
    ],
    githubUrl: "https://github.com/PRADEEPKUMARBC/Credit-Card-Fraud-Detection",
    isVerifiedRepo: true,
    featured: true,
    imagePlaceholderGradient: "from-blue-600/30 via-cyan-500/20 to-slate-900/80",
    accentColor: "#38BDF8"
  },
  {
    id: "greencart-grocery-app",
    title: "GreenCart — Grocery Delivery App",
    tagline: "Full-stack MERN e-commerce application with Stripe payments and Cloudinary media pipeline.",
    category: "Full Stack",
    summary:
      "A complete grocery commerce platform offering seamless product discovery, shopping cart state persistence, role-based JWT authentication, and secure checkout.",
    problem:
      "Grocery e-commerce requires real-time stock management, fast image delivery, secure multi-step checkout, and seamless administrative control over inventory.",
    solution:
      "Built a full MERN stack application featuring Stripe Payment Intents, Multer and Cloudinary CDN for automated image optimization, and JWT + Bcrypt for secure customer and admin authorization.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Stripe",
      "Cloudinary",
      "Tailwind CSS",
      "JWT",
      "Multer"
    ],
    features: [
      "Dynamic catalog browsing with categorized grocery sections and instant search filtering",
      "Persistent cart and order state management with optimistic UI updates",
      "Stripe payment gateway integration for frictionless credit/debit card transactions",
      "Secure administrative image uploading pipeline via Multer to Cloudinary CDN",
      "Protected user routes and order history tracking powered by JWT and Bcrypt hashing"
    ],
    architecture: [
      "Frontend: React.js SPA with Tailwind CSS responsive design and Context state",
      "Backend: Node.js & Express.js REST API with structured controllers and error handlers",
      "Database: MongoDB with Mongoose schemas for users, products, orders, and sessions",
      "Third-party integrations: Stripe Payments API and Cloudinary Asset Storage"
    ],
    githubUrl: "https://github.com/PRADEEPKUMARBC",
    isVerifiedRepo: false,
    featured: true,
    imagePlaceholderGradient: "from-emerald-600/30 via-teal-500/20 to-slate-900/80",
    accentColor: "#34D399"
  },
  {
    id: "quick-gpt-platform",
    title: "Quick-GPT — AI Chat & Image Studio",
    tagline: "Multimodal AI assistant platform combining Gemini LLM intelligence with dynamic image creation.",
    category: "AI & ML",
    summary:
      "An intelligent conversational and creative workspace powered by Google Gemini API, enabling real-time Q&A, chat session persistence, and instant image generation with export capabilities.",
    problem:
      "Developers and creators often juggle multiple fragmented interfaces to access both conversational language reasoning and visual image generation.",
    solution:
      "Architected a unified MERN workspace with direct Gemini API streaming integration, persistent conversational storage, and direct media downloading with Cloudinary caching.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "Cloudinary",
      "Tailwind CSS",
      "Axios"
    ],
    features: [
      "Instant contextual question answering powered by Google Gemini LLM API",
      "Prompt-to-image synthesis pipeline with download and asset preservation support",
      "Persistent conversation session history stored in MongoDB for seamless continuation",
      "Responsive markdown code rendering and syntax highlighting for technical prompts",
      "Streamlined Axios HTTP client with request throttling and comprehensive error boundaries"
    ],
    architecture: [
      "UI Layer: React.js with modular chat feeds, code blocks, and image display drawers",
      "API Gateway: Express.js server orchestrating token management and Gemini API calls",
      "Storage: MongoDB tracking session transcripts and generated asset references",
      "CDN: Cloudinary integration for serving synthesized visual media"
    ],
    githubUrl: "https://github.com/PRADEEPKUMARBC",
    isVerifiedRepo: false,
    featured: true,
    imagePlaceholderGradient: "from-purple-600/30 via-indigo-500/20 to-slate-900/80",
    accentColor: "#A78BFA"
  },
  {
    id: "smart-hospital-vaidhya-bandhu",
    title: "Smart Hospital & Vaidya Bandhu",
    tagline: "Government healthcare management system with automated scheduling and department routing.",
    category: "Full Stack",
    summary:
      "A healthcare facilitation platform tailored for government hospitals to streamline doctor appointment booking, monitor real-time clinical availability, and guide patients to correct medical departments.",
    problem:
      "Patients in municipal and government hospital environments encounter overwhelming queues, uncertain specialist schedules, and difficulty identifying the right clinical department for their symptoms.",
    solution:
      "Designed an accessible web application providing transparent doctor rosters, automated slot booking, and symptom-guided department recommendations (Vaidya Bandhu).",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "REST APIs"
    ],
    features: [
      "Accessible citizen-focused appointment scheduling interface",
      "Real-time doctor roster and availability tracking by clinical specialty",
      "Department guidance module assisting patients with triage navigation",
      "High-contrast, mobile-first responsive layout optimized for varied devices and network conditions",
      "Instant digital appointment slip generation and status verification"
    ],
    architecture: [
      "Frontend: React.js with Tailwind CSS design system emphasizing accessibility",
      "State: Client-side appointment state coordination with resilient fallback data",
      "Design: Minimal cognitive overhead layout tailored for diverse patient demographics"
    ],
    githubUrl: "https://github.com/PRADEEPKUMARBC",
    isVerifiedRepo: false,
    featured: false,
    imagePlaceholderGradient: "from-cyan-600/30 via-blue-500/20 to-slate-900/80",
    accentColor: "#60A5FA"
  },
  {
    id: "smart-irrigation-system",
    title: "Smart Irrigation & Soil Telemetry",
    tagline: "IoT-enabled automated crop hydration with soil-moisture sensor telemetry and AI logic.",
    category: "IoT & Systems",
    summary:
      "An automated agricultural irrigation system connecting physical soil-moisture sensors with an intelligent decision algorithm and a MERN remote monitoring dashboard.",
    problem:
      "Traditional agricultural watering schedules waste substantial water resources and risk root health by ignoring localized soil moisture levels and varying evaporation rates.",
    solution:
      "Coupled embedded soil hydration sensors with an intelligent threshold-decision controller that automatically regulates water valves while broadcasting live telemetry to a MERN cloud dashboard.",
    technologies: [
      "MERN Stack",
      "IoT Hardware",
      "Soil Sensors",
      "AI Decision Logic",
      "Node.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    features: [
      "Continuous soil-moisture level data acquisition from physical sensor probes",
      "Automated valve actuation triggered by soil hydration thresholds and AI decision heuristics",
      "Cloud-connected MERN dashboard displaying live hydration graphs and pump statuses",
      "Manual override controls enabling farmers to actuate valves remotely on demand",
      "Historical hydration logging and water conservation metrics reporting"
    ],
    architecture: [
      "Edge Layer: Microcontroller interfacing with soil moisture and ambient sensors",
      "Backend: Node.js server receiving sensor telemetry over HTTP/WebSocket",
      "Database: MongoDB storing time-series soil moisture readings and valve operations",
      "Dashboard: React interface rendering live telemetry charts and pump controls"
    ],
    githubUrl: "https://github.com/PRADEEPKUMARBC",
    isVerifiedRepo: false,
    featured: false,
    imagePlaceholderGradient: "from-amber-600/30 via-emerald-500/20 to-slate-900/80",
    accentColor: "#F59E0B"
  }
];
