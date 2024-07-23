import userIcon from "@/Images/userIcon.svg";
import apps from "@/Images/applications.svg";
import tasks from "@/Images/TaskIcon.svg";
import { tokens } from "@/app/themes";
const Colors =tokens();

export const categories = [
    {
      icon:userIcon, 
      title: "Agents",
      description: "Creating and managing experts",
      route: "/agents", 
    },
    {
      icon: apps, 
      title: "Applications",
      description: "Discover apps to integrate with Tasks.",
      route: "/applications", 
    },
    {
      icon:tasks, 
      title: "Documentation & Knowledge Base",
      description: "Stay updated with the latest digital content.",
      route: "/docs", 
    },
  ];

  export const categorie = [
    "Writing",
    "Productivity",
    "Research & Analysis",
    "Programming"
  ];
  

  export const docData = [
    {
      title: 'CohereForAI/c4ai-command-r-plus',
      description: "Command R+ is Cohere's latest LLM and is the first open weight model to beat GPT4 in the Chatbot Arena!",
      tag1: "Knowledge Base",
      tag2: "Figma",
    },
    {
      title: 'CohereForAI/c4ai-command-r-pro',
      description: "Command R Pro offers advanced features for enterprise-level AI applications.",
      tag1: "Knowledge Base",
      tag2: "Figma",
    },
    {
      title: 'CohereForAI/c4ai-command-r-basic',
      description: "Command R Basic is perfect for small-scale AI applications and hobby projects.",
      tag1: "Knowledge Base",
      tag2: "Figma",
    },
    {
      title: 'CohereForAI/c4ai-command-r-lite',
      description: "Command R Lite is a lightweight model designed for mobile and embedded systems.",
      tag1: "Knowledge Base",
      tag2: "Figma",
    },
    {
      title: 'CohereForAI/c4ai-command-r-advanced',
      description: "Command R Advanced includes cutting-edge features for high-performance AI.",
      tag1: "Knowledge Base",
      tag2: "Figma",
    },
    {
      title: 'CohereForAI/c4ai-command-r-ultra',
      description: "Command R Ultra provides unparalleled performance for the most demanding AI tasks.",
      tag1: "Knowledge Base",
      tag2: "Figma",
    },
    {
      title: 'CohereForAI/c4ai-command-r-experimental',
      description: "Command R Experimental is where we test the latest AI innovations.",
      tag1: "Knowledge Base",
      tag2: "Figma",
    },
    {
      title: 'CohereForAI/c4ai-command-r-custom',
      description: "Command R Custom allows you to tailor the AI to your specific needs.",
      tag1: "Knowledge Base",
      tag2: "Figma",
    },
  ];
  


  export const taskcat = [
    "Writing",
    "Productivity",
    "Research & Analysis",
    "Programming",
    "Writing",
    "Productivity",
    "Research & Analysis",
    "Programming",
    "Writing",
    "Productivity",
    "Research & Analysis",
    "Programming",
    "Writing",
    "Productivity",
    "Research & Analysis",
    "Programming"
  ];



  export const staticagents = [
      {
        title: 'Security Co-Pilot',
        description: 'Talk to Security Expert, Stay Secure!',
   
      },
      {
        title: 'Incident Handler',
        description: 'Consult Incident Handler, Manage crises.',

      },
      {
        title: 'Security Analyst',
        description: 'Meet Security Analyst, Analyze threats.',
        // image: 'https://via.placeholder.com/48'
      },
      {
        title: 'Privacy Expert',
        description: 'Discuss with Privacy Consultant, Safeguard data.',
       
      },
      {
        title: 'My Playbooks',
        description: 'Discuss with Privacy Consultant, Safeguard data.',
  
      },
      {
        title: 'Policy Expert',
        description: 'Connect with Pen Tester, Test defenses.',

      },
    ];
    export const applications = [
      {
        id: 1,
        title: 'Splunk Analytics',
        description: 'Integrate Splunk to monitor and analyze machine-generated big data through a web-style interface.',
        image:" splunk",
      },
      {
        id: 2,
        title: 'Atlassian JIRA',
        description: 'Integrates JIRA to provide robust issue tracking and project management capabilities within your application.',
        image: "appTwo",
      },
      {
        id: 3,
        title: 'VirusTotal Malware Analysis',
        description: 'Uses VirusTotal to analyze suspicious files and URLs to detect types of malware.',
        image: "appfour",
      },
      {
        id: 4,
        title: 'Tenable Vulnerability Management',
        description: 'Provides comprehensive vulnerability scanning capabilities using Tenable to enhance security posture.',
        image: "appThree",
      },
      {
        id: 5,
        title: 'QRadar SIEM',
        description: 'This expert will tell you everything you ask about IP Addresses.',
        image:"splunk",
      },
      {
        id: 6,
        title: 'IP Lookup Tool',
        description: 'Provides IP address lookup and geolocation services to identify and trace IP addresses.',
        image: "appfour",
      },
    ];

    export const taskData = [
      {
        title: "Risk Mitigation Strategy Development",
        description: "Develop comprehensive risk mitigation strategies by analysing historical incidents and industry standards, prioritizing actions to minimize impact.",
      },
      {
        title: "Risk Assessment Report Generation",
        description:
          "Develop comprehensive risk mitigation strategies by analysing historical incidents and industry standards, prioritizing actions to minimize impact.",
      },
      {
        title: "Risk Trend Analysis & Prediction",
        description: "Develop comprehensive risk mitigation strategies by analysing historical incidents and industry standards, prioritizing actions to minimize impact.",
      },
      {
        title: "Threat Intelligence Correlation",
        description: "Develop comprehensive risk mitigation strategies by analysing historical incidents and industry standards, prioritizing actions to minimize impact.",
      },
      {
        title: "Threat Intelligence Synthesis",
        description: "Develop comprehensive risk mitigation strategies by analysing historical incidents and industry standards, prioritizing actions to minimize impact.",
      },
      {
        title: "Shift Handover Details",
        description: "Develop comprehensive risk mitigation strategies by analysing historical incidents and industry standards, prioritizing actions to minimize impact.",
      },
      
    ];

    export const settingsModal = [
      {
        icon:userIcon, 
        title: "System Controls",
        description: "Creating and managing experts",
        route: "/systemcontrols", 
      },
      {
        icon: apps, 
        title: "User Management",
        description: "Discover apps to integrate with Tasks.",
        route: "/usermanagement", 
      },
      {
        icon:tasks, 
        title: "Workspace Settings",
        description: "Stay updated with the latest digital content.",
        route: "/workspace", 
      },
    ];
    
  

export interface ConfigDetails {
  enable_internet: boolean;
  enable_cyber_news: boolean;
  enable_fetch_content: boolean;
  private_open_ai_key: string;
  private_secret_key: string;
  mode: string;
  private_base_url?: string;
}


export type User = {
  id: number;
  name: string;
  role: string;
  email: string;
  full_name:string;
};

export const data = [
  {
      id: 1,
      filename: "data_protection.pdf",
      description: "Data Protection Standard 2025 (DPS-2025)",
      author: "Venkatesh Siddi",
      createdAt: "21 Jan 2024",
      lastUpdate: "24 Mar 2024",
      category: "Work",
      categoryColor: "#00bcd4"
  },
  {
      id: 2,
      filename: "incident_irp.pdf",
      description: "Cyber Incident Response Protocol (CIRP)",
      author: "Venkatesh Siddi",
      createdAt: "21 Jan 2024",
      lastUpdate: "24 Mar 2024",
      category: "Work",
      categoryColor: "#00bcd4"
  },
  {
      id: 3,
      filename: "eula_document.pdf",
      description: "End-User Encryption Requirement (EUER)",
      author: "Venkatesh Siddi",
      createdAt: "21 Jan 2024",
      lastUpdate: "24 Mar 2024",
      category: "Personal",
      categoryColor: "#ff5722"
  },
  {
      id: 4,
      filename: "3rd-party-risk.pdf",
      description: "Third-Party Vendor Security Assessment (TPVSA)",
      author: "Venkatesh Siddi",
      createdAt: "21 Jan 2024",
      lastUpdate: "24 Mar 2024",
      category: "Personal",
      categoryColor: "#ff5722"
  },
  {
      id: 5,
      filename: "sdlc_document-venky.pdf",
      description: "Software Development Life Cycle Security Compliance (SDLC-SC)",
      author: "Venkatesh Siddi",
      createdAt: "21 Jan 2024",
      lastUpdate: "24 Mar 2024",
      category: "Personal",
      categoryColor: "#ff5722"
  },
  {
      id: 6,
      filename: "sdlc_document_astik.pdf",
      description: "Software Development Life Cycle Security Compliance (SDLC-SC)",
      author: "Venkatesh Siddi",
      createdAt: "21 Jan 2024",
      lastUpdate: "24 Mar 2024",
      category: "Personal",
      categoryColor: "#ff5722"
  }
];

export const Categories = [
  {
      id: 1,
      name: "Documents",
      color: Colors.personal[100],
      viewer: 0,
      doc_count: 20
  },
  {
      id: 2,
      name: "Policies",
      color: Colors.work[100],
      viewer: 50,
      doc_count: 10
  },
  {
      id: 3,
      name: "Standards",
      color: Colors.project[100],
      viewer: 34,
      doc_count: 35
  },
  {
      id: 4,
      name: "Incidents",
      color: Colors.app_doc[100],
      viewer: 20,
      doc_count: 40
  },
  {
      id: 5,
      name: "Projects"
  }
];
    

  
  
   
  
  