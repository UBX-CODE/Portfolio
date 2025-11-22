export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  type: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
}