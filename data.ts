import { Project, SkillCategory, Certification } from './types';

export const RESUME_DATA = {
  name: "Ujjawal Bhardwaj",
  role: "Full Stack Developer",
  tagline: "The best way to reach humans instead of spam folders, deliver transactional and marketing emails at scale.",
  email: "ujjwalsharma1910@gmail.com",
  linkedin: "ujjawal-bhardwaj-643625372",
  github: "UBX-CODE",
  about: "Results-driven Computer Science Engineering student passionate about building high-quality, scalable software solutions. Skilled in developing full-stack applications using Python, JavaScript, React.js, Node.js and MongoDB. Recognized for problem-solving abilities, innovation, and a strong foundation in object-oriented programming and cloud-based architectures.",
  education: {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    school: "Arya College Of Engineering And It",
    years: "2023 – 2027",
    coursework: "DSA, Database Management Systems, Operating Systems, Cloud Computing"
  },
  skills: [
    { category: "Languages", items: ["Java", "Python", "C", "SQL", "JavaScript", "TypeScript"] },
    { category: "Web & Frameworks", items: ["Next.js", "React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Databases", items: ["MySQL", "MongoDB", "Firebase"] },
    { category: "Tools & Cloud", items: ["AWS (Basics)", "Git/GitHub", "Postman", "VS Code", "Linux"] },
    { category: "Concepts", items: ["OOP", "DSA", "System Design", "DBMS", "Computer Networks"] }
  ] as SkillCategory[],
  projects: [
    {
      title: "Unirank",
      type: "College Student Ranking Platform",
      description: "A full-stack web app that ranks college students based on their coding and professional achievements by fetching real-time data from platforms like LeetCode using GraphQL. Features include live leaderboards and achievement uploads.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "GraphQL"],
      link: "#"
    },
    {
      title: "Personal Portfolio Website",
      type: "Web Application",
      description: "Developed an animated, responsive portfolio website using React, Tailwind CSS, and GSAP — blending modern aesthetics with engaging motion effects.",
      technologies: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
      link: "https://ujjawal-portfolio.netlify.app/"
    },
    {
      title: "Student Database Management System",
      type: "System Software",
      description: "Designed and implemented a student database system in C using core data structures (Linked Lists, Trees, Hash Tables) for efficient data management and retrieval.",
      technologies: ["C", "File Handling", "Data Structures"],
      link: "#"
    }
  ] as Project[],
  certifications: [
    { name: "Machine Learning with Python", issuer: "IBM" },
    { name: "Certified Generative AI Professional", issuer: "Oracle" },
    { name: "UX Design", issuer: "Google" },
    { name: "Red Hat Certified System Administrator", issuer: "RHCSA" },
    { name: "AWS Certified Developer", issuer: "Infosys" }
  ] as Certification[]
};