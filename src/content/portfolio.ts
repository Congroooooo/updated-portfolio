export type Experience = {
  role: string;
  company: string;
  period: string;
  arrangement: string;
  summary: string;
  details: string[];
};

export type Project = {
  number: string;
  name: string;
  category: string;
  period: string;
  role: string;
  description: string;
  stack: string[];
};

export const profile = {
  name: "Nicko Balmes",
  title: "Junior Software Engineer & Full-Stack Developer",
  location: "Quezon, Philippines",
  email: "nckoblms@gmail.com",
  github: "https://github.com/Congroooooo",
  introduction:
    "I build thoughtful web applications across the interface, API, and everything in between.",
  about:
    "I’m a Computer Science graduate working on full-stack products, responsive interfaces, and AI-assisted engineering workflows. I care about making complex systems feel clear to the people who use them, and about shipping work that is useful, maintainable, and carefully considered.",
};

export const experience: Experience[] = [
  {
    role: "Junior Software Engineer",
    company: "Kodecraft Technologies OPC",
    period: "May 2026 — Present",
    arrangement: "Tayabas, Quezon · Hybrid",
    summary:
      "Building application features and translating product requirements and interface designs into working software.",
    details: [
      "Contribute to frontend implementation and application development.",
      "Support testing, debugging, and verification of delivered features.",
      "Collaborate through technical discussions, engineering documentation, and Git-based workflows.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Protocode Digital Solutions Inc.",
    period: "Apr 2026 — Present",
    arrangement: "Remote",
    summary:
      "Developing internal business applications across web and mobile interfaces, backend services, and data integrations.",
    details: [
      "Build features with Ionic, Angular, and Laravel.",
      "Collaborate on application design, integration, testing, and deployment.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Mega Cellular Network Inc.",
    period: "Jan 2026 — Apr 2026",
    arrangement: "Onsite",
    summary:
      "Implemented responsive Angular and Tailwind CSS pages for the MegaPay website project.",
    details: [
      "Worked on service, promotional, and FAQ experiences.",
      "Participated in tickets, validation, code review, API testing, and sprint activities.",
    ],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    name: "PAMO",
    category: "Inventory & ordering system",
    period: "2025",
    role: "Lead Developer · Full Stack · UI/UX",
    description:
      "A web-based inventory and ordering system for STI College Lucena. I led the interface design and development, from user flows and Figma prototypes to a responsive frontend and PHP/MySQL backend.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Figma"],
  },
  {
    number: "02",
    name: "Alertify",
    category: "Hackathon project",
    period: "2025",
    role: "UI/UX · Frontend",
    description:
      "An earthquake alert and safety recommendation concept. I designed a clear emergency-focused interface and built the responsive frontend with React, Vite, and Tailwind CSS.",
    stack: ["React", "Vite", "Tailwind CSS"],
  },
  {
    number: "03",
    name: "PreptalkAI",
    category: "Hackathon project",
    period: "2025",
    role: "UI/UX · Frontend",
    description:
      "An AI-powered interview preparation concept with mock interview flows. I designed the interface and built responsive components for different interview personas.",
    stack: ["React", "Vite", "Tailwind CSS"],
  },
];

export const skillGroups = [
  {
    name: "Interface",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    name: "Application & data",
    items: ["Laravel", "PHP", "Node.js", "REST APIs", "MySQL", "PostgreSQL"],
  },
  {
    name: "Workflow & delivery",
    items: ["Git", "Playwright", "Postman", "Docker", "Figma", "Vercel"],
  },
];

export const recognitions = [
  { title: "Service Awardee", detail: "STI College Lucena · 2026" },
  { title: "Excellence in CS Thesis", detail: "STI College Lucena · 2026" },
  { title: "OpenIT Hackathon — Champion", detail: "2025" },
  { title: "Hack The Flood — Top 10", detail: "UP Diliman · 2025" },
  { title: "Innolympics — Top 10 (Track)", detail: "2026" },
];
