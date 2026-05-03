import { Terminal, Database, Cloud, Blocks, Layout, Wrench, Monitor, Layers, Code2 } from 'lucide-react';

export const heroData = {
  badge: "Consultant",
  firstName: "Suresh",
  lastName: "Priyadharshan",
  title: "FullStack Developer & Mendix Developer",
  email: "sureshpriyadharshan@gmail.com",
  linkedin: "https://www.linkedin.com/in/spdwebdeveloper/",
  resumeName: "SureshPriyadharshan_Resume.pdf",
  resumePath: "/SureshPriyadharshan_4Years.pdf",
  location: "Bangalore, India",
  phone: "+91-9629772311"
};

export const experienceData = [
  {
    company: "Mavenberg Innovations India",
    date: "Jul 2022 – Present",
    role: "Consultant | Consultant Trainee | Intern",
    bullets: [
      "Led the end-to-end development of a web-based analytics platform for monitoring and optimizing system usage.",
      "Designed and implemented interactive dashboards using modern frontend technologies to provide real-time insights and reporting.",
      "Developed secure and scalable backend services using RESTful API architecture.",
      "Structured and optimized database schemas to ensure efficient data storage and high-performance access.",
      "Integrated cloud-based storage solutions for secure document and data management.",
      "Automated build and deployment processes using CI/CD pipelines for faster and reliable releases.",
      "Streamlined data processing and transformation workflows to support analytics and visualization needs."
    ]
  }
];

export const educationData = {
  degree: "Bachelor of Engineering",
  major: "Production Engineering Sandwich",
  university: "PSG College of Technology, Coimbatore",
  year: "2022",
  certifications: [
    { title: "Mendix Rapid Developer", image: "/Mendix.png" },
    { title: "Google UX/UI Design", image: "/Google.png" }
  ],
  awards: [
    { title: "You Made the Difference", year: "2025", image: "/YouMadeTheDifference.png" },
    { title: "Above and Beyond Award", year: "2023" }
  ]
};

export const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="text-blue-500" size={24} />,
    items: ["React.js", "Vite.js", "HTML5", "CSS3", "Tailwind CSS", "Figma"]
  },
  {
    category: "Backend",
    icon: <Terminal className="text-green-500" size={24} />,
    items: ["Python", "Flask", "Node.js", "Express.js", "RESTful APIs", "Microservices"]
  },
  {
    category: "Database",
    icon: <Database className="text-yellow-500" size={24} />,
    items: ["MongoDB", "PostgreSQL", "Data Processing", "Mongoose"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="text-cyan-500" size={24} />,
    items: ["Azure DevOps", "Azure App Service", "Azure Blob Storage", "CI/CD Pipelines", "Git"]
  },
  {
    category: "Low-Code",
    icon: <Blocks className="text-purple-500" size={24} />,
    items: ["Mendix Studio Pro", "Microflows", "Domain Models", "Marketplace Connectors"]
  },
  {
    category: "Specialized",
    icon: <Wrench className="text-orange-500" size={24} />,
    items: ["Teamcenter Integration", "Dashboard Development", "Power BI", "Data Analytics", "System Integration"]
  }
];

export const projectsData = [
  {
    title: "Enterprise License Management Platform",
    status: "Present",
    description: "Architected a full-stack solution to monitor and optimize high-value software licenses. Features include real-time analytics dashboards, role-based access control, and CI/CD integration.",
    tags: ["React.js", "Express.js", "MongoDB", "Azure Blob", "Figma"],
    icon: <Monitor className="text-cyan-500" size={20} />,
    image: "/project-license.png"
  },
  {
    title: "Cross-System Application Integration",
    status: "Completed",
    description: "Centralized integration solution connecting manufacturing systems, ticketing modules, and engineering platforms. Includes real-time risk analysis based on engineering progress and inventory.",
    tags: ["Mendix", "ERP Systems", "Ticketing System", "PLM System"],
    icon: <Layers className="text-purple-500" size={20} />,
    image: "/project-integration.png"
  },
  {
    title: "PLM Data Integration System",
    status: "Completed",
    description: "Integrated low-code platforms with core Product Lifecycle Management systems using custom connectors. Developed features to retrieve and display item structures and BOM details within the application. Ensured secure API interactions.",
    tags: ["Mendix", "PLM Data", "APIs", "Microflows"],
    icon: <Code2 className="text-cyan-400" size={20} />,
    image: "/project-plm.png"
  },
  {
    title: "Learning Management System",
    status: "Completed",
    description: "Full-featured LMS built to streamline organizational training. Features role-based access, module management for trainers, and dynamic progress dashboards for admins.",
    tags: ["Mendix Studio Pro", "UI Components", "Domain Models"],
    icon: <Monitor className="text-green-500" size={20} />,
    image: "/project-lms.png"
  },
  {
    title: "Lifecycle Analytics Dashboard",
    status: "Completed",
    description: "Engineered a backend service to transform complex XML data into structured models. Embedded analytics in a React.js interface for dynamic product lifecycle management reporting.",
    tags: ["React.js", "Flask", "Power BI", "REST APIs"],
    icon: <Layers className="text-orange-500" size={20} />,
    image: "/project-analytics.png"
  },
  {
    title: "On-Premise to Cloud Data Migration",
    status: "Completed",
    description: "Conceptualized workflows in Figma and built modular React.js components. Constructed APIs to map and facilitate secure cloud data transformation, accelerating cloud migrations.",
    tags: ["React.js", "Flask", "Figma", "Cloud Migration"],
    icon: <Code2 className="text-teal-500" size={20} />,
    image: "/project-migration.png"
  },
  {
    title: "Real-Time Transaction Dashboards",
    status: "Completed",
    description: "Delivered data-driven dashboards visualizing system transaction status in real-time. Built reusable frontend modules to monitor reliability with transaction retry management features.",
    tags: ["React.js", "Dashboards", "UI Mockups"],
    icon: <Monitor className="text-pink-500" size={20} />,
    image: "/project-transactions.png"
  }
];

export const contactData = {
  title: "Ready To Connect?",
  description: "",
  email: "sureshpriyadharshan@gmail.com"
};
