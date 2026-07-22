import { Project, SkillCategory, Certification } from './types';

export const RESUME_DATA = {
  name: "Ujjawal Bhardwaj",
  role: "Full Stack Developer",
  tagline: "The best way to reach humans instead of spam folders, deliver transactional and marketing emails at scale.",
  email: "ujjwalsharma1910@gmail.com",
  linkedin: "ujjawal-bhardwaj-643625372",
  github: "UBX-CODE",
  about: "Full Stack Developer with hands-on experience in React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, and PostgreSQL. Experienced in engineering REST APIs, authentication workflows, responsive interfaces, and end-to-end web applications. Applied Data Structures & Algorithms, Object-Oriented Programming, and database design across full-stack projects and production deployments",
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
      title: "MeetFlow",
      type: "Video Conferencing App",
      description: "MeetFlow is a real-time video conferencing platform built with WebRTC and Socket.IO. It enables users to create and join meetings, preview audio and video before joining, and collaborate with features like live chat, screen sharing, participant management, and host controls.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "TypeScript", "PostgresSQL", "Socket.io", "WebRTC"],
      link: "https://github.com/UBX-CODE/MeetFlow",
      link2: "https://meet-flow-six.vercel.app",
      images: [ "/3.png","/heropage.png"]
    },
    {
      title: "DevOS",
      type: "Operating System",
      description: "DevOS is a full-stack developer productivity platform built with the MERN stack and TypeScript. It features Kanban task management, an infinite React Flow canvas, Google OAuth, GitHub integration, LeetCode analytics, and AI-powered workflows.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "GraphQL"],
      link: "https://github.com/UBX-CODE/DevOS",
      link2: "https://dev-os-iota.vercel.app",
      images: [ "/LandingPage.png","/Dashboard.png"]
    },
    {
      title: "Commitra",
      type: "Operating System",
      description: "Commitra — An agentic AI-powered CLI that analyzes Git diffs, understands code changes, and generates meaningful, context-aware commits.",
      technologies: ["Python", "Typer", "GroqAPI", "GitCLI"],
      link: "https://github.com/UBX-CODE/Commitra",
      link2: "https://github.com/UBX-CODE/Commitra",
      images: [ "/Commitra.jpeg"]
    },
    {
      title: "Bac-Prac",
      type: "Operating System",
      description: "A collection of backend microservices and full-stack projects built with Node.js, Express, MongoDB, and Redis to practice modern system design, web sockets, and backend engineering.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis"],
      link: "https://github.com/UBX-CODE/Backend-Prac",
      link2: "https://github.com/UBX-CODE/Backend-Prac",
      images: [ "/Backend.jpeg"]
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
