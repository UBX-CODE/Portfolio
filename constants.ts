import { Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from './data';

export const PERSONAL_INFO = {
  email: RESUME_DATA.email,
  // You can update this to your actual location
  location: 'Jaipur, India',
};

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: `https://github.com/${RESUME_DATA.github}`,
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: `https://www.linkedin.com/in/${RESUME_DATA.linkedin}`,
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: `mailto:${RESUME_DATA.email}`,
    icon: Mail,
  },
];


