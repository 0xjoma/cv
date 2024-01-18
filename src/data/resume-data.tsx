import {
  AmbitLogo,
  BarepapersLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
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
    email: "0xjoma@proton.me",
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
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Incident Report Analysis",
      techStack: ["Side Project", "Android", "Kotlin"],
      description:
        "The company experienced a security event when all network services suddenly stopped responding.",
      link: {
        label: "Read more",
        href: "https://0xjoma.github.io/jekyll/update/2021/10/18/incident-report-analysis.html",
      },
    },
    {
      title: "Setting Up Kali Linux on a Bootable USB Device for macOS/OS X",
  techStack: ["Side Project", "Kali Linux", "macOS"],
  description:
    "This guide outlines the process of creating a Kali Linux bootable USB device using a hard drive on a macOS environment.",
  link: {
    label: "Read more",
    href: "https://0xjoma.github.io/jekyll/update/2023/10/18/setting-up-kali-linux.html",
  },
},
  ],
} as const ;
