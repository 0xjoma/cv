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
  avatarUrl: "https://raw.githubusegitrcontent.com/0xjoma/cv/main/src/images/logos/0xjoma.jpg",
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
      end: "TBD",
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
    "Docker",
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
      title: "Governance and Law",
      techStack: ["Academic", "Cybersecurity"],
      description:
        "This project delves into cyberspace governance’s complex and dynamic realm, focusing on the legal and policy frameworks that govern cybersecurity.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2024/01/02/governance-and-law.html",
      }
    },
    {
      title: "Capstone Project",
      techStack: ["Academic", "Cybersecurity"],
      description:
        "I embarked on an ambitious journey to design a Request for Proposal (RFP) for a hypothetical but innovative project in the healthcare technology sector.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2024/01/01/rfp-creation.html",
      }
    },
    {
      title: "Hack The Box",
      techStack: ["Academic", "Cybersecurity"],
      description:
        "I am thrilled to share the beginning of an exhilarating journey with Hack The Box.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/12/19/my-hack-the-box-journey-begins.html",
      }
    },
    {
      title: "Uncovering Evidence",
      techStack: ["Academic", "BrowsingHistoryView", "FavoritesView", "Helix", "IECacheView", "IECookiesView", "MyLastSearch", "ProcessExplorer", "Cybersecurity"],
      description:
        "My recent experience in a Digital Forensics class, involving a hands-on lab session, offered a deep dive into this intriguing and crucial aspect of digital investigation.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/12/11/uncovering-new-evidence-using-bootable-forensic-utilities.html",
      }
    },
    {
      title: "Kali Linux On VMware",
      techStack: ["Side Project", "Kali Linux", "VMware", "macOS", "M1", "Cybersecurity"],
      description:
        "A comprehensive guide on how to install Kali Linux, a leading Linux distribution for security and penetration testing, on a MacBook Pro equipped with the Apple M1 chip using VMWare.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/12/09/how-to-set-up-kali-linux-on-macbook-pro-m1-using-vmware.html",
      }
    },
    {
      title: "VAT part: I",
      techStack: ["Side Project", "Python", "XSS Vulnerabilities", "Cybersecurity"],
      description:
        "I am creating a Python-based vulnerability assessment tool, specifically targeting XSS (Cross-Site Scripting) vulnerabilities.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/11/03/update-a-file-through-python-algorithm.html",
      }
    },
    {
      title: "Updating a File",
      techStack: ["Side Project", "Cybersecurity"],
      description:
        "I created a python algorithm to automate updating the allow_list.txt file and remove these IP addresses that should no longer have access.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/11/03/update-a-file-through-python-algorithm.html",
      }
    },
    {
      title: "Information Security",
      techStack: ["Academic", "Policy", "Cybersecurity"],
      description:
        "I devised a comprehensive information security policy for a hypothetical entity.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/28/information-security-policy.html",
      }
    },
    {
      title: "Vulnerability Assessment",
      techStack: ["Side Project", "Linux", "MySQL", "Cybersecurity"],
      description:
        "The scope of this vulnerability assessment relates to the current access controls of the system.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/27/vulnerability-assessment-report.html",
      }
    },
    {
      title: "SQL Queries",
      techStack: ["Side Project", "Linux", "SQL", "Cybersecurity"],
      description:
        "It is my job to ensure the system is safe, investigate all potential security issues, and update employee computers as needed. ",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/26/apply-filters-to-sql-queries.html",
      }
    },
    {
      title: "File Permissions in Linux",
      techStack: ["Side Project", "Linux", "Cybersecurity"],
      description:
        "Updating the file permissions for certain files and directories within the projects directory.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/24/file-permissions-in-linux.html",
      }
    },
    {
      title: "Incident Report Analysis",
      techStack: ["Side Project", "Cybersecurity"],
      description:
        "An Incident Report Analysis for a company that experienced a security event when all network services suddenly stopped responding.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2021/10/18/incident-report-analysis.html",
      },
    },
    {
      title: "Setting Up Kali Linux",
      techStack: ["Side Project", "Kali Linux", "macOS", "Cybersecurity"],
      description:
        "This guide outlines the process of creating a Kali Linux bootable USB device using a hard drive on a macOS environment.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/18/setting-up-kali-linux.html",
  },
},
  ],
} as const ;
