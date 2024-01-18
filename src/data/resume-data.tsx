import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jomael Ortiz Perez",
  initials: "JOP",
  location: "Ewa Beach, HI",
  locationLink: "https://www.google.com/maps/place/Ewa+beach+hi",
  about:
    "Currently pursuing a M.S. in Cybersecurity at the University of Wisconsin-La Crosse.",
  summary:
    "Active military member with a background in Information Systems and Cybersecurity, committed to strengthening digital defenses and fostering knowledge sharing in the dynamic field of cybersecurity. I am a staunch advocate for knowledge sharing. I use my blog and X to chronicle my cybersecurity journey, share insights from my academic pursuits, and participate in discussions on the ever-evolving cybersecurity landscape.",
  avatarUrl: "",
  personalWebsiteUrl: "https://0xjoma.github.io/",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/0xjoma",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jomael-ortiz-perez/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/0xjoma",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Wisconsin-La Crosse",
      degree: "Master's Degree in Cybersecurity",
      start: "Summer 2024",
      end: "Present",
    },
    {
      school: "Columbia Southern University",
      degree: "Bachelor's Degree in Information Systems and Cybersecurity",
      start: "2019",
      end: "2024",
    },
  ],
  work: [
    {
      company: "US Army",
      link: "https://www.goarmy.com/",
      badges: ["Active Duty"],
      title: "Logistics Supervisor",
      start: "2012",
      end: "Present",
      description:
        "Senior Logistician and Supervisor with over 9 years of experience in the United States Army. Proven track record of proper management of personnel, equipment, and resources. Adept at managing multiple projects simultaneously. Skilled at building relationships with internal and external stakeholders. Strong leadership skills with the ability to motivate and inspire others.",
    },
    {
      company: "BiggerMINDS LLC",
      link: "https://biggerminds.io/",
      badges: ["Remote", "Shutdown"],
      title: "Founder",
      start: "2021",
      end: "2022",
      description:
        "BiggerMINDS developed a unique set of complementary products, MIND+ token, NFT Marketplace, NFT Staking, NFTs, MIND+ Staking and more, to create an entire sustainable ecosystem, enabling users, businesses, and projects access to a token with unlimited utility in a vast ecosystem.",
    },

  ],
  skills: [
    "Adaptability",
    "Attention to Detail",
    "Authentication",
    "Cloud Security",
    "Communication",
    "Critical Thinking",
    "Cybersecurity Assessment",
    "Encryption",
    "Flask",
    "Information Assurance",
    "Information Security (INFOSEC)",
    "Information Systems",
    "Intrusion Detection Systems (IDS)",
    "Intrusion Prevention Systems (IPS)",
    "Leadership",
    "Linux",
    "Network Analyzer (sniffing) tools",
    "Network Security",
    "Organization",
    "PostgreSQL",
    "Problem Solving",
    "Python",
    "Security Information and Event Management (SIEM)",
    "SQL Alchemy",
    "Teamwork",
    "Threat Analysis",
    "Time Management",
    "Writing"
  ],

  projects: [
    
    {
      title: "File Permissions in Linux",
      techStack: ["Side Project", "Linux"],
      description:
        "Updating the file permissions for certain files and directories within the projects directory.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/24/file-permissions-in-linux.html",
      }
    },
    {
      title: "Incident Report Analysis",
      techStack: ["Side Project"],
      description:
        "An Incident Report Analysis for a company that experienced a security event when all network services suddenly stopped responding.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2021/10/18/incident-report-analysis.html",
      },
    },
    {
      title: "Setting Up Kali Linux",
      techStack: ["Side Project", "Kali Linux", "macOS"],
      description:
        "This guide outlines the process of creating a Kali Linux bootable USB device using a hard drive on a macOS environment.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/18/setting-up-kali-linux.html",
  },
},
  ],
} as const ;
