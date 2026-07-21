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
      description: "MeetFlow is a modern real-time video conferencing and collaboration platform designed to make online meetings simple, fast, and interactive. Users can create instant meeting rooms, join existing meetings using unique room codes, preview their camera and microphone before joining, and communicate through real-time audio and video. Built with WebRTC and Socket.IO, MeetFlow will include features such as mic and camera controls, live chat, multi-user conferencing, screen sharing, participant management, and host controls for a seamless meeting experience.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "TypeScript", "PostgresSQL", "Socket.io", "WebRTC"],
      link: "https://github.com/UBX-CODE/MeetFlow",
      link2: "https://github.com/UBX-CODE/MeetFlow",
      images: [ "/3.png","/heropage.png"]
    },
    {
      title: "DevOS",
      type: "Operating System",
      description: "DevOS is a modern full-stack developer productivity platform that combines project management, visual workflow design, and developer tooling into a single collaborative workspace. It provides Kanban-based task management, an interactive infinite workflow editor powered by React Flow, secure Google OAuth and JWT authentication, GitHub integration, and LeetCode profile analytics using GraphQL. Built with the MERN stack and TypeScript, DevOS focuses on delivering a scalable and intuitive development experience through modular architecture, secure backend APIs, and responsive UI design. The platform is evolving into an all-in-one developer operating system with advanced capabilities including multiple workflow management, AI-powered workflow generation, workflow templates, real-time collaboration, version control, and intelligent planning tools for software teams and individual developers.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "GraphQL"],
      link: "https://github.com/UBX-CODE/DevOS",
      link2: "https://dev-os-iota.vercel.app",
      images: [ "/LandingPage.png","/Dashboard.png"]
    },

  ] as Project[],
  certifications: [
    { name: "Machine Learning with Python", issuer: "IBM" },
    { name: "Certified Generative AI Professional", issuer: "Oracle" },
    { name: "UX Design", issuer: "Google" },
    { name: "Red Hat Certified System Administrator", issuer: "RHCSA" },
    { name: "AWS Certified Developer", issuer: "Infosys" }
  ] as Certification[]
};
