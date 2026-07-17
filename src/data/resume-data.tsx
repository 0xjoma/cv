import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Jomael Ortiz Perez",
  initials: "JOP",
  location: "Oahu, HI",
  locationLink:
    "https://www.google.com/maps/place/O%E2%80%98ahu/@21.3180178,-158.0290926,14z/data=!4m6!3m5!1s0x7c006632db726b03:0xd9587d69906fcbc3!8m2!3d21.4389123!4d-158.0000565!16zL20vMGRmY24?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
  about:
    "Currently pursuing an M.S. in Cybersecurity at the University of Wisconsin-La Crosse and building SaabFi LLC on Base.",
  summary:
    "Husband. Father of 3. Active Duty Warrant Officer. Master of Science in Cybersecurity Student, specializing in Security Architecture. Blockchain developer by night.",
  avatarUrl: "/0xjoma.png",
  contact: {
    email: "jomael.ortizperez.cv@proton.me",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/0xjoma",
        icon: "github",
      },
      {
        name: "X",
        url: "https://twitter.com/0xjoma",
        icon: "x",
      },
    ],
  },

  education: [
    {
      school: "University of Wisconsin-La Crosse",
      degree: "Master of Science in Cybersecurity",
      start: "2024",
      end: "Present",
    },
    {
      school: "Columbia Southern University",
      degree: "Bachelor of Science in Information Systems and Cybersecurity",
      start: "2019",
      end: "2024",
    },
  ],

  work: [
    {
      company: "SaabFi LLC",
      link: "https://saabfi.com/",
      badges: [],
      title: "Founder",
      start: "2026",
      end: null,
      description: "Simple, predictable, onchain finance.",
    },
    {
      company: "US Army",
      link: "https://www.goarmy.com/",
      badges: ["Active Duty"],
      title: "Property Accounting Technician",
      start: "2012",
      end: null,
      description:
        "Warrant Officer with over ten years of experience in the United States Army. Proven track record of proper personnel, equipment, and resources management, including supervising a 5-member team and overseeing over $300 million in military assets. Adept at managing multiple projects simultaneously while ensuring optimal utilization and accountability of high-value resources. I implement strategic asset management protocols, resulting in improved efficiency and cost-effectiveness in resource allocation.",
    },
  ],

  skills: [
    "Git",
    "Python",
    "Solidity",
    "Typescript",
    "AWS",
    "Project Management",
  ],

  projects: [],
} as const;
