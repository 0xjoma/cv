import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { Certificate } from "crypto";
import { name } from "file-loader";
import { link } from "fs";
import { url } from "inspector";
import { School } from "lucide-react";
import { title } from "process";

export const RESUME_DATA = {
  name: "Jomael Ortiz Perez",
  initials: "JOP",
  location: "Oahu, HI",
  locationLink: "https://www.google.com/maps/place/Ewa+beach+hi",
  about:
    "Currently pursuing a M.S. in Cybersecurity at the University of Wisconsin-La Crosse.",
  summary:
    "Dedicated and mission-driven professional with a passion for cybersecurity and a commitment to protecting digital assets and information systems. My background has instilled a strong sense of discipline, adaptability, and a relentless drive to tackle complex challenges head-on. I thrive in high-pressure environments and excel at making critical decisions when it matters most. As an analytical thinker with a keen eye for detail, I approach cybersecurity challenges from multiple angles, always considering both security's technical and human elements. My academic background in Cybersecurity and Information Systems and industry-recognized certifications like CompTIA Security+ have equipped me with a solid theoretical foundation. I'm eager to apply this knowledge in real-world scenarios, bridging the gap between theory and practice. With my unique blend of skills, education, and personal qualities, I aim to significantly protect digital infrastructures and foster a security-first mindset in any organization I join. I bring a fresh perspective, combining strategic thinking with technical acumen. I am eager to collaborate with experienced professionals, contribute innovative ideas, and grow into a trusted cybersecurity leader.",
  avatarUrl:
    "https://raw.githubusercontent.com/0xjoma/cv/0817785d1a15515ad2256951ef580a3fa0b674c3/src/images/logos/jomaelortizperez.png",
  personalWebsiteUrl: "https://0xjoma.github.io/",
  contact: {
    email: "jomael.ortizperez.cv@proton.me",
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
    {
      school: "CompTIA",
      degree: "Security+ ce Certification",
      start: "2024",
      end: "2027",
      url: "https://www.credly.com/badges/63db803c-5963-44ac-9532-858951efeed5/public_url",
    },
    {
      school: "CompTIA",
      degree: "IT Fundamentals (ITF+) Certification",
      start: "2023",
      end: "∞",
    },
    {
      school: "Columbia Southern University",
      degree: "Ethical Hacker Certificate",
      start: "2023",
      end: "∞",
    },
    {
      school: "Coursera",
      degree: "Google Cybersecurity Certificate",
      start: "2023",
      end: "∞",
    },
  ],

  work: [
    {
      company: "US Army",
      link: "https://www.goarmy.com/",
      badges: ["Active Duty"],
      title: "Logistics Engineer",
      start: "2012",
      end: "Present",
      description:
        "Senior Logistician Engineer and Supervisor with over ten years of experience in the United States Army. Proven track record of proper personnel, equipment, and resources management, including supervising a 5-member team and overseeing over $300 million in military assets. Adept at managing multiple projects simultaneously while ensuring optimal utilization and accountability of high-value resources. I implement strategic asset management protocols, resulting in improved efficiency and cost-effectiveness in resource allocation.",
    },
    {
      company: "BiggerMINDS LLC",
      link: "https://biggerminds.io/",
      badges: ["Remote", "Shutdown"],
      title: "Founder",
      start: "2021",
      end: "2022",
      description:
        "As the founder of BiggerMINDS, I developed a unique set of complementary products that once formed an entire sustainable ecosystem. My vision was to create a platform enabling users, businesses, and projects to access a token with unlimited utility in a vast network of services. At its peak, BiggerMINDS was valued at over 1 million dollars, which was a testament to the potential we had created. The ecosystem I  built included the MIND+ Token as our core utility token, an NFT  Marketplace for buying, selling, and trading NFTs, NFT Staking that allowed users to stake their NFTs for rewards, unique NFTs within our ecosystem, MIND+ Staking for additional benefits, and various other products to enhance the overall user experience. I designed the system to be sustainable, with the MIND+ token offering unlimited utility, and made it accessible to a wide range of participants. I aimed to foster a vibrant and interconnected community of users and projects. Despite the innovative approach and initial success, I ultimately had to make the difficult decision to shut down the business. The experience of creating and running BiggerMINDS taught me valuable lessons about blockchain technology, community building, and the challenges of running a startup in the volatile crypto space.",
    },
  ],

  skills: [
    "Analytical Thinking",
    "Blockchain",
    "Cloud Security",
    "Communication",
    "Continuous Learning",
    "Cryptography",
    "Ethical Hacking",
    "Incident Response",
    "Leadership",
    "Linux",
    "Network Security",
    "Penetration Testing",
    "Problem-Solving",
    "Python",
    "Risk Assessment",
    "Security Information and Event Management (SIEM)",
    "Teamwork",
  ],

  projects: [
    {
      title: "The Eratosthenes Method",
      techStack: ["Academic", "M.S Cybersecurity"],
      description:
        "In this project, I will explore the Eratosthenes Method, a technique used to find prime numbers.",
      link: {
        href: "https://0xjoma.github.io/academic/2024/09/07/the-eratosthenes-method.html",
      },
    },
    {
      title: "Analyzing Network Protocols",
      techStack: ["Academic", "M.S Cybersecurity"],
      description:
        "In this lab assignment, I will analyze network protocols using WS and NWI tools.",
      link: {
        href: "https://0xjoma.github.io/academic/2024/08/10/analyzing-network-protocols.html",
      },
    },
    {
      title: "Governance and Law",
      techStack: ["Academic", "B.S Cybersecurity"],
      description:
        "This project delves into cyberspace governance’s complex and dynamic realm, focusing on the legal and policy frameworks that govern cybersecurity.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2024/01/02/governance-and-law.html",
      },
    },
    {
      title: "Capstone Project",
      techStack: ["Academic", "B.S Cybersecurity"],
      description:
        "I embarked on an ambitious journey to design a Request for Proposal (RFP) for a hypothetical but innovative project in the healthcare technology sector.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2024/01/01/rfp-creation.html",
      },
    },
    {
      title: "Uncovering Evidence",
      techStack: [
        "Academic", "B.S Cybersecurity",
      ],
      description:
        "My recent experience in a Digital Forensics class, involving a hands-on lab session, offered a deep dive into this intriguing and crucial aspect of digital investigation.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/12/11/uncovering-new-evidence-using-bootable-forensic-utilities.html",
      },
    },
    {
      title: "Kali Linux On VMware",
      techStack: [
        "Side Project", "Cybersecurity",
      ],
      description:
        "A comprehensive guide on how to install Kali Linux, a leading Linux distribution for security and penetration testing, on a MacBook Pro equipped with the Apple M1 chip using VMWare.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/12/09/how-to-set-up-kali-linux-on-macbook-pro-m1-using-vmware.html",
      },
    },
    {
      title: "VAT part: I",
      techStack: [
        "Side Project", "Cybersecurity",
      ],
      description:
        "I am creating a Python-based vulnerability assessment tool, specifically targeting XSS (Cross-Site Scripting) vulnerabilities.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/11/03/update-a-file-through-python-algorithm.html",
      },
    },
    {
      title: "Updating a File",
      techStack: ["Side Project", "Cybersecurity"],
      description:
        "I created a python algorithm to automate updating the allow_list.txt file and remove these IP addresses that should no longer have access.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/11/03/update-a-file-through-python-algorithm.html",
      },
    },
    {
      title: "Information Security",
      techStack: ["Academic", "B.S Cybersecurity"],
      description:
        "I devised a comprehensive information security policy for a hypothetical entity.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/28/information-security-policy.html",
      },
    },
    {
      title: "Vulnerability Assessment",
      techStack: ["Side Project", "Cybersecurity"],
      description:
        "The scope of this vulnerability assessment relates to the current access controls of the system.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/27/vulnerability-assessment-report.html",
      },
    },
    {
      title: "SQL Queries",
      techStack: ["Side Project", "Cybersecurity"],
      description:
        "It is my job to ensure the system is safe, investigate all potential security issues, and update employee computers as needed. ",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/26/apply-filters-to-sql-queries.html",
      },
    },
    {
      title: "File Permissions in Linux",
      techStack: ["Side Project", "Cybersecurity"],
      description:
        "Updating the file permissions for certain files and directories within the projects directory.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/24/file-permissions-in-linux.html",
      },
    },
    {
      title: "Incident Report Analysis",
      techStack: ["Side Project", "Cybersecurity"],
      description:
        "An Incident Report Analysis for a company that experienced a security event when all network services suddenly stopped responding.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/23/incident-report-analysis.html",
      },
    },
    {
      title: "Setting Up Kali Linux",
      techStack: ["Side Project", "Cybersecurity"],
      description:
        "This guide outlines the process of creating a Kali Linux bootable USB device using a hard drive on a macOS environment.",
      link: {
        href: "https://0xjoma.github.io/jekyll/update/2023/10/18/setting-up-kali-linux.html",
      },
    },
  ],
} as const;
