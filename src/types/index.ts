export interface ProfileData {
  name: string;
  shortName: string;
  monogram: string;
  headline: string;
  eyebrow: string;
  heroHeadline: string;
  heroHighlight: string;
  heroDescription: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  hackerrankUrl: string;
  leetcodeUrl: string;
  resumeUrl: string;
  avatarUrl: string;
  aboutText: string[];
  principles: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export type ProjectCategory = "All" | "AI & ML" | "Full Stack" | "IoT & Systems";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  architecture?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isVerifiedRepo: boolean;
  featured: boolean;
  imagePlaceholderGradient: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  status: "Current" | "Past";
  description: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gradeLabel: string;
  gradeValue: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  pdfUrl?: string;
  type: "Role" | "Skill" | "Course";
  badgeColor: string;
}
