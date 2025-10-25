import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Jomael Ortiz Perez",
  initials: "JOP",
  location: "Oahu, HI",
  locationLink:
    "https://www.google.com/maps/place/O%E2%80%98ahu/@21.3180178,-158.0290926,14z/data=!4m6!3m5!1s0x7c006632db726b03:0xd9587d69906fcbc3!8m2!3d21.4389123!4d-158.0000565!16zL20vMGRmY24?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
  about:
    "Currently pursuing a M.S. in Cybersecurity at the University of Wisconsin-La Crosse and building xTessera on base chain.",
  summary:
    "Active Duty Warrant Officer. Husband. Father of 3. Master of Science in Cybersecurity Student, specializing in Security Architecture. Blockchain developer by night.",
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
    {
      school: "CompTIA",
      degree: "Security+ ce Certification",
      start: "2024",
      end: "2027",
    },
    {
      school: "Columbia Southern University",
      degree: "Ethical Hacker Certificate",
      start: "2023",
      end: "Present",
    },
  ],

  work: [
    {
      company: "US Army",
      link: "https://www.goarmy.com/",
      badges: ["Active Duty"],
      title: "Accountable Property Officer",
      start: "2012",
      end: null,
      description:
        "Warrant Officer with over ten years of experience in the United States Army. Proven track record of proper personnel, equipment, and resources management, including supervising a 5-member team and overseeing over $300 million in military assets. Adept at managing multiple projects simultaneously while ensuring optimal utilization and accountability of high-value resources. I implement strategic asset management protocols, resulting in improved efficiency and cost-effectiveness in resource allocation.",
    },
    {
      company: "BiggerMINDS LLC",
      link: "https://biggerminds.io/",
      badges: ["Remote", "Shutdown"],
      title: "Founder",
      start: "2021",
      end: "2022",
      description:
        "As the founder of BiggerMINDS, I developed a suite of interconnected blockchain products. My vision was o create a platform enabling users, businesses, and projects to access a single token that could be used across all our services, from an NFT marketplace to staking tools. At its peak, BiggerMINDS was valued at over 1 million dollars, which was a testament to the potential we had created. The ecosystem I  built included the MIND+ Token as our core utility token, an NFT  Marketplace for buying, selling, and trading NFTs, NFT Staking that allowed users to stake their NFTs for rewards, unique NFTs within our ecosystem, MIND+ Staking for additional benefits, and other tools designed to support and connect these core services. I designed the system to be sustainable, with the MIND+ token offering by creating a clear economic model for the token and focusing on a straightforward user interface. I aimed to A key priority was building an active and engaged community for our users and project partners. Despite the innovative approach and initial success, I ultimately had to make the difficult decision to shut down the business. The experience of creating and running BiggerMINDS taught me valuable lessons about blockchain technology, community building, and the challenges of running a startup in the volatile crypto space.",
    },
  ],

  skills: ["Cryptography", "Ethical Hacking", "Python", "Solidity"],

  projects: [
    {
      title: "BiggerMINDS",
      techStack: ["Blockchain", "Solidity"],
      description:
        "BiggerMINDS was a blockchain-based platform that aimed to create a sustainable ecosystem of products and services.",
    },
  ],
} as const;
