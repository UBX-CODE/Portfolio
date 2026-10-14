export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  link2?: string;
  type: string;
  images?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}