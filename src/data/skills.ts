import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core programming syntax and computational fundamentals.",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Core Language", iconName: "python" },
      { name: "JavaScript", level: "ES6+ Modern", iconName: "javascript" },
      { name: "HTML5", level: "Semantic Markup", iconName: "html" },
      { name: "CSS3", level: "Modern Layouts", iconName: "css" },
      { name: "SQL", level: "Relational Queries", iconName: "database" }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Interactive, accessible, and responsive user interfaces.",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Component Architecture", iconName: "react" },
      { name: "Next.js", level: "App Router & SSR", iconName: "next" },
      { name: "Tailwind CSS", level: "Utility-First Styling", iconName: "tailwind" },
      { name: "Responsive Design", level: "Cross-Device Systems", iconName: "devices" },
      { name: "Axios", level: "API Integration", iconName: "network" }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Server architecture, RESTful services, and security workflows.",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Runtime Environment", iconName: "node" },
      { name: "Express.js", level: "REST API Framework", iconName: "express" },
      { name: "FastAPI", level: "Async Python Services", iconName: "fastapi" },
      { name: "REST APIs", level: "Service Contract Design", iconName: "api" },
      { name: "JWT", level: "Stateless Auth", iconName: "key" },
      { name: "Bcrypt", level: "Password Cryptography", iconName: "lock" }
    ]
  },
  {
    title: "AI, ML & Data Science",
    description: "Data preparation, statistical analysis, and machine learning models.",
    icon: "Cpu",
    skills: [
      { name: "Artificial Intelligence", level: "Reasoning & LLMs", iconName: "bot" },
      { name: "Machine Learning", level: "Supervised Learning", iconName: "cpu" },
      { name: "Scikit-learn", level: "Models & SMOTE", iconName: "brain" },
      { name: "Pandas", level: "Data Wrangling", iconName: "table" },
      { name: "NumPy", level: "Array Computing", iconName: "binary" },
      { name: "Matplotlib", level: "Visualization", iconName: "bar-chart" },
      { name: "Seaborn", level: "Statistical Graphics", iconName: "line-chart" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "NoSQL document persistence and relational query management.",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "Document Store & Mongoose", iconName: "mongodb" },
      { name: "MySQL", level: "Relational Tables & Joins", iconName: "mysql" },
      { name: "Cloudinary", level: "Cloud Media Assets", iconName: "cloud" }
    ]
  },
  {
    title: "Developer Tools & Ecosystem",
    description: "Version control, workflow efficiency, and debugging toolchain.",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Distributed Versioning", iconName: "git" },
      { name: "GitHub", level: "Collaboration & CI/CD", iconName: "github" },
      { name: "VS Code", level: "Primary Development IDE", iconName: "code" },
      { name: "Postman", level: "API Testing & Mocking", iconName: "send" },
      { name: "Figma", level: "UI Prototyping", iconName: "figma" },
      { name: "Jupyter Notebook", level: "Data Exploration", iconName: "book-open" },
      { name: "Multer", level: "Multipart Uploads", iconName: "upload" },
      { name: "Razorpay", level: "Payment Gateway", iconName: "credit-card" }
    ]
  }
];
