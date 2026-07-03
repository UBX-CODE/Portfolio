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
    { category: "Languages", items: ["Java", "Python", "SQL", "JavaScript", "TypeScript"] },
    { category: "Web & Frameworks", items: ["Next.js", "React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Databases", items: ["MySQL", "MongoDB", "Firebase","PostgreSQL"] },
    { category: "Tools & Cloud", items: ["AWS (Basics)", "Git/GitHub", "Postman", "VS Code", "Linux"] },
    { category: "Concepts", items: ["OOP", "DSA", "System Design", "DBMS", "Computer Networks"] }
  ] as SkillCategory[],
  projects: [
    {
      title: "DevOS",
      type: "Operating System",
      description: "DevOS is a full-stack developer productivity platform that helps users manage projects, tasks, and visual workflows in one place. It features Kanban task management, an infinite workflow canvas built with React Flow, Google OAuth authentication, GitHub and LeetCode integration, and secure backend APIs. The platform is designed to streamline software planning, system design, and project collaboration through an intuitive and scalable interface.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "GraphQL"],
      link: "https://github.com/UBX-CODE/DevOS",
      link2: "https://dev-os-iota.vercel.app"
    },
    {
      title: "ALLC",
      type: "Smart Doctor Appointment Booking System",
      description: "A web-based platform designed to streamline the process of booking doctor appointments. It connects patients with healthcare providers, allowing users to search for doctors, view their availability, and schedule appointments seamlessly.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/UBX-CODE/Allc",
      link2: "https://asianllc.vercel.app/"
    },
    {
      title: "Unirank",
      type: "College Student Ranking Platform",
      description: "A full-stack web app that ranks college students based on their coding and professional achievements by fetching real-time data from platforms like LeetCode using GraphQL. Features include live leaderboards and achievement uploads.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "GraphQL"],
      link: "https://github.com/UBX-CODE/Unirank",
      link2: "https://uni-rank.netlify.app"
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