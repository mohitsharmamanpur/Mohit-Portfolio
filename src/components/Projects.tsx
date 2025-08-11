import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, Award, X } from 'lucide-react';
import Background3D from './Background3D';

interface ProjectsProps {
  theme: 'light' | 'dark';
}

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  award?: string;
  github?: string;
  demo?: string;
  image: string;
  category: string;
}

export default function Projects({ theme }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<'industry' | 'major' | 'minor'>('industry');

  useEffect(() => {
    const handleScroll = () => {};

    const section = document.getElementById('projects');
    if (section) {
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        setIsVisible(true);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'industry-projects') {
        setActiveSection('industry');
      } else if (hash === 'major-projects') {
        setActiveSection('major');
      } else if (hash === 'minor-projects') {
        setActiveSection('minor');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when active section changes
  useEffect(() => {
    const hash = activeSection === 'industry' ? 'industry-projects' : 
                 activeSection === 'major' ? 'major-projects' : 'minor-projects';
    window.location.hash = hash;
  }, [activeSection]);

  const industryProjects: Project[] = [
    {
      id: 1,
      title: "Full CI/CD Pipeline",
      description: "Built a comprehensive CI/CD pipeline to automate build-test-deploy workflows for applications, demonstrating modern DevOps practices.",
      tech: ["Docker", "Jenkins", "Git", "GitHub", "Kubernetes"],
      features: [
        "Automated build and testing processes",
        "Multi-stage Docker containerization",
        "Kubernetes orchestration",
        "Automated deployment to staging/production",
        "Rollback capabilities",
        "Monitoring and logging integration"
      ],
      github: "https://github.com/mohitsharmamanpur/CI-CD_Pipeline",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industry Level"
    },
    {
      id: 2,
      title: "Microservices Scaling inside Docker",
      description: "Implemented microservices architecture with Docker containerization and automated scaling capabilities.",
      tech: ["Docker", "Docker Compose", "Microservices", "Load Balancing"],
      features: [
        "Containerized microservices architecture",
        "Automated service discovery",
        "Load balancing and scaling",
        "Health monitoring and recovery",
        "Service communication patterns",
        "Deployment automation"
      ],
      github: "https://github.com/mohitsharmamanpur/Microservices_Architecture",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industry Level"
    },
    {
      id: 3,
      title: "Multinode Kubernetes Cluster",
      description: "Deployed and managed a multi-node Kubernetes cluster for container orchestration and application deployment.",
      tech: ["Kubernetes", "Docker", "Cluster Management", "Orchestration"],
      features: [
        "Multi-node cluster setup",
        "Pod scheduling and management",
        "Service discovery and load balancing",
        "Persistent storage management",
        "Monitoring and logging",
        "Security and RBAC"
      ],
      github: "https://github.com/mohitsharmamanpur/Kubernetes-Cluster",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industry Level"
    },
    {
      id: 4,
      title: "Project 4 - Coming Soon",
      description: "Exciting new industry-level project in development. Stay tuned for updates!",
      tech: ["Coming Soon"],
      features: [
        "Project details will be revealed soon",
        "Industry-standard implementation",
        "Advanced technologies",
        "Real-world applications"
      ],
      github: "https://github.com/mohitsharmamanpur/Coming-Soon-Project",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industry Level"
    },
    {
      id: 5,
      title: "Project 5 - Coming Soon",
      description: "Exciting new industry-level project in development. Stay tuned for updates!",
      tech: ["Coming Soon"],
      features: [
        "Project details will be revealed soon",
        "Industry-standard implementation",
        "Advanced technologies",
        "Real-world applications"
      ],
      github: "#",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industry Level"
    },
    {
      id: 6,
      title: "Project 6 - Coming Soon",
      description: "Exciting new industry-level project in development. Stay tuned for updates!",
      tech: ["Coming Soon"],
      features: [
        "Project details will be revealed soon",
        "Industry-standard implementation",
        "Advanced technologies",
        "Real-world applications"
      ],
      github: "#",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industry Level"
    },
    {
      id: 7,
      title: "Project 7 - Coming Soon",
      description: "Exciting new industry-level project in development. Stay tuned for updates!",
      tech: ["Coming Soon"],
      features: [
        "Project details will be revealed soon",
        "Industry-standard implementation",
        "Advanced technologies",
        "Real-world applications"
      ],
      github: "#",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industry Level"
    }
  ];

  const majorProjects: Project[] = [
    {
      id: 7,
      title: "End-to-End Web Server Automation with Terraform on AWS",
      description: "A comprehensive Infrastructure as Code (IaC) project that demonstrates automated cloud deployment. With a single 'terraform apply' command, this system provisions a complete, persistent Apache web server on AWS, automatically configures all infrastructure, and opens the live webpage in your browser. Solves the challenges of manual cloud deployments by creating a fast, reliable, and repeatable deployment pipeline.",
      tech: ["Terraform", "AWS", "EC2", "EBS", "Apache", "Infrastructure as Code", "Linux", "VPC", "Security Groups"],
      features: [
        "Single-command deployment with 'terraform apply'",
        "Automated EC2 instance provisioning",
        "EBS volume creation and attachment for persistence",
        "Automatic Apache HTTP Server installation and configuration",
        "Persistent storage mounting to /var/www/html",
        "Automated browser opening to live webpage",
        "Infrastructure as Code best practices",
        "AWS VPC and Security Group configuration",
        "Remote and local provisioner automation",
        "Complete infrastructure teardown capability",
        "Error handling and rollback mechanisms",
        "Scalable and repeatable deployment process"
      ],
      github: "https://github.com/mohitsharmamanpur/terraform-aws-webserver",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 8,
      title: "Titanic Survival Prediction - End-to-End MLOps Pipeline",
      description: "Comprehensive MLOps project implementing a complete machine learning pipeline for Titanic survival prediction. Features automated data preprocessing, model training with Logistic Regression, AWS S3 integration for model persistence, Flask API for real-time predictions, and Streamlit dashboard for interactive user experience. Demonstrates industry-standard MLOps practices with automated training, deployment, and monitoring workflows.",
      tech: ["Python", "Pandas", "Scikit-learn", "Joblib", "Flask", "Streamlit", "AWS S3", "Boto3", "MLOps", "Machine Learning"],
      features: [
        "End-to-end ML pipeline automation",
        "Advanced data preprocessing & feature engineering",
        "Logistic Regression model with hyperparameter tuning",
        "Comprehensive model evaluation with confusion matrix",
        "AWS S3 integration for model versioning & storage",
        "RESTful Flask API for real-time predictions",
        "Interactive Streamlit dashboard with data visualization",
        "Automated model training, saving, and deployment pipeline",
        "Model persistence and retrieval system",
        "Production-ready code architecture",
        "Error handling and logging mechanisms",
        "Scalable cloud-based model management"
      ],
      github: "https://github.com/mohitsharmamanpur/MLOps-Project-titanic",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 9,
      title: "Create own Telegram Bot using AWS-cloud Server",
      description: "Developed a custom Telegram bot deployed on AWS cloud infrastructure for automated messaging and interactions.",
      tech: ["Python", "AWS", "Telegram API", "Cloud Computing"],
      features: [
        "Custom bot functionality",
        "AWS EC2 deployment",
        "Automated messaging",
        "User interaction handling",
        "Cloud scalability",
        "Real-time responses"
      ],
      github: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 10,
      title: "Launching Serverless EC2 instance via API-Gateway",
      description: "Implemented serverless architecture to launch EC2 instances through API Gateway integration.",
      tech: ["AWS Lambda", "API Gateway", "EC2", "Serverless"],
      features: [
        "Serverless EC2 management",
        "API Gateway integration",
        "Automated instance provisioning",
        "Cost optimization",
        "Scalable architecture",
        "Event-driven triggers"
      ],
      github: "https://github.com/mohitsharmamanpur/Serverless-EC2-API-Gateway",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 11,
      title: "Create App, when user comes in URL or API than it show some information",
      description: "Developed a web application that displays information when users access specific URLs or API endpoints.",
      tech: ["Web Development", "API", "URL Routing", "Information Display"],
      features: [
        "Dynamic URL handling",
        "API endpoint responses",
        "Information display",
        "User-friendly interface",
        "Responsive design",
        "Real-time updates"
      ],
      github: "https://github.com/mohitsharmamanpur/URL-API-Info-App",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 12,
      title: "Launching Instances inside cloud using AI and Computer Vision",
      description: "Implemented AI-powered computer vision system for automated cloud instance management and deployment.",
      tech: ["AI", "Computer Vision", "Cloud Computing", "Automation"],
      features: [
        "AI-powered automation",
        "Computer vision integration",
        "Cloud instance management",
        "Intelligent deployment",
        "Visual recognition",
        "Automated scaling"
      ],
      github: "https://github.com/mohitsharmamanpur/AI-Computer-Vision-Cloud",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 13,
      title: "File Upload Notification",
      description: "When a file is uploaded to S3, it triggers a Lambda function that sends a notification using SNS. Ensures real-time alerts for uploads.",
      tech: ["AWS S3", "AWS Lambda", "AWS SNS", "Notifications"],
      features: [
        "S3 file upload detection",
        "Lambda function triggers",
        "SNS notifications",
        "Real-time alerts",
        "Automated workflows",
        "Event-driven architecture"
      ],
      github: "https://github.com/mohitsharmamanpur/S3-Lambda-SNS-Notification",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 14,
      title: "Audio to Text Conversion",
      description: "On audio file upload, S3 triggers Lambda which uses Amazon Transcribe to convert the audio into text automatically.",
      tech: ["AWS S3", "AWS Lambda", "Amazon Transcribe", "Audio Processing"],
      features: [
        "Audio file processing",
        "Automatic transcription",
        "S3 integration",
        "Lambda automation",
        "Text extraction",
        "Real-time conversion"
      ],
      github: "https://github.com/mohitsharmamanpur/Audio-Text-Transcribe",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 15,
      title: "Dataset-Based Model Training",
      description: "When a dataset is uploaded, Lambda invokes Amazon SageMaker to train a machine learning model with minimal manual input.",
      tech: ["AWS Lambda", "Amazon SageMaker", "Machine Learning", "Automation"],
      features: [
        "Dataset upload detection",
        "Automated model training",
        "SageMaker integration",
        "ML pipeline automation",
        "Model deployment",
        "Performance monitoring"
      ],
      github: "https://github.com/mohitsharmamanpur/SageMaker-ML-Training",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 16,
      title: "PDF Summarization using LLM",
      description: "When a PDF is uploaded, Lambda calls Amazon Bedrock, which uses LLMs to generate a smart summary of the document.",
      tech: ["AWS Lambda", "Amazon Bedrock", "LLM", "PDF Processing"],
      features: [
        "PDF document processing",
        "LLM integration",
        "Smart summarization",
        "Automated extraction",
        "Content analysis",
        "Intelligent insights"
      ],
      github: "https://github.com/mohitsharmamanpur/PDF-LLM-Summarization",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 17,
      title: "Linear Regression Machine Learning model",
      description: "Implemented a linear regression machine learning model for predictive analytics and data analysis.",
      tech: ["Machine Learning", "Linear Regression", "Python", "Data Analysis"],
      features: [
        "Linear regression implementation",
        "Data preprocessing",
        "Model training",
        "Prediction capabilities",
        "Performance evaluation",
        "Statistical analysis"
      ],
      github: "https://github.com/mohitsharmamanpur/Linear-Regression-ML",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 18,
      title: "Multilinear Regression Machine learning model",
      description: "Developed a multilinear regression model for complex predictive modeling with multiple variables.",
      tech: ["Machine Learning", "Multilinear Regression", "Python", "Predictive Modeling"],
      features: [
        "Multilinear regression",
        "Multiple variable analysis",
        "Complex modeling",
        "Feature engineering",
        "Model validation",
        "Advanced predictions"
      ],
      github: "https://github.com/mohitsharmamanpur/Multilinear-Regression-ML",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    },
    {
      id: 19,
      title: "Binary Classification ML Model",
      description: "Binary Classification ML Model using Sigmoid Function with Confusion Matrix for evaluation.",
      tech: ["Machine Learning", "Binary Classification", "Sigmoid Function", "Confusion Matrix"],
      features: [
        "Binary classification",
        "Sigmoid function implementation",
        "Confusion matrix evaluation",
        "Model performance metrics",
        "Classification accuracy",
        "Decision boundary analysis"
      ],
      github: "https://github.com/mohitsharmamanpur/Binary-Classification-ML",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Major Project"
    }
  ];

  const minorProjects: Project[] = [
    {
      id: 20,
      title: "Launching apache web server inside docker",
      description: "Containerized Apache web server deployment using Docker for consistent and portable web hosting.",
      tech: ["Docker", "Apache", "Web Server", "Containerization"],
      features: [
        "Docker containerization",
        "Apache web server setup",
        "Port mapping",
        "Volume mounting",
        "Custom configurations",
        "Easy deployment"
      ],
      github: "https://github.com/mohitsharmamanpur/Apache-Docker-Server",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 20,
      title: "Docker inside Docker (DIND concept)",
      description: "Implemented Docker-in-Docker concept for nested containerization and isolated development environments.",
      tech: ["Docker", "DIND", "Containerization", "Isolation"],
      features: [
        "Nested containerization",
        "Isolated environments",
        "Development sandboxing",
        "Resource management",
        "Security isolation",
        "CI/CD integration"
      ],
      github: "https://github.com/mohitsharmamanpur/Docker-in-Docker-DIND",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 21,
      title: "Linear Regression model inside Docker",
      description: "Containerized linear regression machine learning model for consistent deployment and execution.",
      tech: ["Docker", "Machine Learning", "Linear Regression", "Containerization"],
      features: [
        "ML model containerization",
        "Linear regression implementation",
        "Consistent deployment",
        "Portable execution",
        "Environment isolation",
        "Easy scaling"
      ],
      github: "https://github.com/mohitsharmamanpur/ML-Docker-Container",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 22,
      title: "Run Flask app inside Docker",
      description: "Containerized Flask web application for consistent deployment and easy scaling.",
      tech: ["Docker", "Flask", "Python", "Web Development"],
      features: [
        "Flask app containerization",
        "Web application deployment",
        "Consistent environment",
        "Easy scaling",
        "Port management",
        "Development workflow"
      ],
      github: "https://github.com/mohitsharmamanpur/Flask-Docker-App",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 23,
      title: "Install Firefox Browser inside Docker",
      description: "Containerized Firefox browser installation for isolated web browsing and testing environments.",
      tech: ["Docker", "Firefox", "Browser", "Containerization"],
      features: [
        "Browser containerization",
        "Isolated browsing",
        "Testing environment",
        "Security isolation",
        "Easy cleanup",
        "Portable browser"
      ],
      github: "https://github.com/mohitsharmamanpur/Firefox-Docker-Browser",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 24,
      title: "Docker Compose",
      description: "Multi-container application orchestration using Docker Compose for complex service management.",
      tech: ["Docker Compose", "Container Orchestration", "Multi-service", "Automation"],
      features: [
        "Multi-container setup",
        "Service orchestration",
        "Automated deployment",
        "Service dependencies",
        "Environment management",
        "Easy scaling"
      ],
      github: "https://github.com/mohitsharmamanpur/Docker-Compose-Multi-Service",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 25,
      title: "Launching Wordpress server (Using Docker Volume)",
      description: "WordPress server deployment with persistent data storage using Docker volumes.",
      tech: ["Docker", "WordPress", "Docker Volumes", "CMS"],
      features: [
        "WordPress containerization",
        "Persistent data storage",
        "Volume management",
        "CMS deployment",
        "Data persistence",
        "Easy backup"
      ],
      github: "https://github.com/mohitsharmamanpur/WordPress-Docker-Volume",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 26,
      title: "Backup automation using Flask API",
      description: "Automated backup system implemented using Flask API for data protection and recovery.",
      tech: ["Flask", "Python", "API", "Backup Automation"],
      features: [
        "Automated backup system",
        "Flask API integration",
        "Data protection",
        "Scheduled backups",
        "Recovery mechanisms",
        "API endpoints"
      ],
      github: "https://github.com/mohitsharmamanpur/Flask-Backup-API",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 27,
      title: "Launching ec2 instances using Python",
      description: "Python automation for launching and managing EC2 instances in AWS cloud infrastructure.",
      tech: ["Python", "AWS EC2", "Boto3", "Cloud Automation"],
      features: [
        "EC2 instance automation",
        "Python scripting",
        "AWS integration",
        "Instance management",
        "Cloud provisioning",
        "Automated deployment"
      ],
      github: "https://github.com/mohitsharmamanpur/Python-EC2-Automation",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 28,
      title: "Make a Phone Call with Python",
      description: "Python automation for making phone calls using various telephony APIs and services.",
      tech: ["Python", "Telephony", "API Integration", "Automation"],
      features: [
        "Phone call automation",
        "API integration",
        "Voice communication",
        "Automated dialing",
        "Call management",
        "Telephony services"
      ],
      github: "https://github.com/mohitsharmamanpur/Python-Phone-Call",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 29,
      title: "Web Scraping using Python",
      description: "Python-based web scraping solution for extracting data from websites and online sources.",
      tech: ["Python", "Web Scraping", "Data Extraction", "Automation"],
      features: [
        "Web data extraction",
        "Automated scraping",
        "Data parsing",
        "Content extraction",
        "Information gathering",
        "Structured data"
      ],
      github: "https://github.com/mohitsharmamanpur/Python-Web-Scraping",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 30,
      title: "Send an Email with Python",
      description: "Python automation for sending emails using SMTP and email service integrations.",
      tech: ["Python", "SMTP", "Email", "Automation"],
      features: [
        "Email automation",
        "SMTP integration",
        "Bulk email sending",
        "Email templates",
        "Attachment support",
        "Scheduled emails"
      ],
      github: "https://github.com/mohitsharmamanpur/Python-Email-Automation",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 31,
      title: "Send an SMS with Python",
      description: "Python automation for sending SMS messages using various messaging APIs and services.",
      tech: ["Python", "SMS", "API Integration", "Messaging"],
      features: [
        "SMS automation",
        "API integration",
        "Bulk messaging",
        "Message delivery",
        "Status tracking",
        "Multi-provider support"
      ],
      github: "https://github.com/mohitsharmamanpur/Python-SMS-Automation",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 32,
      title: "Post on Instagram with Python",
      description: "Python automation for posting content on Instagram using API integration and automation tools.",
      tech: ["Python", "Instagram", "API", "Social Media"],
      features: [
        "Instagram automation",
        "Content posting",
        "API integration",
        "Social media management",
        "Scheduled posts",
        "Media upload"
      ],
      github: "https://github.com/mohitsharmamanpur/Python-Instagram-Automation",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    },
    {
      id: 33,
      title: "Send WhatsApp Message Using Python",
      description: "Python automation for sending WhatsApp messages using web automation and API integration.",
      tech: ["Python", "WhatsApp", "Automation", "Messaging"],
      features: [
        "WhatsApp automation",
        "Message sending",
        "Web automation",
        "API integration",
        "Bulk messaging",
        "Media sharing"
      ],
      github: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Minor Project"
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const renderProjectCard = (project: Project, index: number) => {
    // Special rendering for minor projects
    if (project.category === "Minor Project") {
      return (
        <div
          key={project.id}
          className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
            theme === 'dark' ? 'bg-gray-800/90 border border-gray-700' : 'bg-white/90 border border-gray-200'
          } ${isVisible ? 'animate-card-reveal' : 'opacity-0'} backdrop-blur-sm`}
          style={{animationDelay: `${index * 0.1}s`}}
        >
          {/* Project Content with Icon */}
          <div className="p-6">
            {/* Category Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-medium">
                Python Automation
              </span>
            </div>
            
            {/* Icon and Title */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-bold mb-2 line-clamp-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
              </div>
            </div>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-1 text-xs rounded-lg font-medium ${
                    theme === 'dark'
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className={`px-2 py-1 text-xs rounded-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.github && project.github !== '#' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 text-sm font-medium flex-1"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </button>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(project);
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-sm font-medium flex-1"
              >
                <ExternalLink className="w-4 h-4" />
                View Details
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Default rendering for other project types
    return (
      <div
        key={project.id}
        className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
          theme === 'dark' ? 'bg-gray-800/90 border border-gray-700' : 'bg-white/90 border border-gray-200'
        } ${isVisible ? 'animate-card-reveal' : 'opacity-0'} backdrop-blur-sm`}
        style={{animationDelay: `${index * 0.1}s`}}
      >
        {/* Enhanced Image with Gradient Overlay */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.category === 'Industry Level' 
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                : project.category === 'Major Project'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
            }`}>
              {project.category}
            </span>
          </div>

          {/* Award Badge */}
          {project.award && (
            <div className="absolute top-4 right-4">
              <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">
                <Award className="w-3 h-3" />
                {project.award}
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h3>
          
          <p className={`text-sm mb-4 line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={`px-2 py-1 text-xs rounded-lg font-medium ${
                  theme === 'dark'
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className={`px-2 py-1 text-xs rounded-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                +{project.tech.length - 4}
              </span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.github && project.github !== '#' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.github, '_blank');
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 text-sm font-medium flex-1"
              >
                <Github className="w-4 h-4" />
                View Code
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                openModal(project);
              }}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium flex-1"
            >
              <ExternalLink className="w-4 h-4" />
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className={`pt-32 pb-20 relative overflow-hidden min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* 3D Background Effects */}
      <Background3D theme={theme} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-cyan-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Explore my projects across different categories</p>
          
          {/* Enhanced Category Navigation */}
          <div className="relative">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              Choose a category below to view projects
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            
            {/* Main navigation container */}
            <div className={`relative flex flex-col sm:flex-row gap-4 sm:gap-2 p-2 rounded-2xl border-2 shadow-2xl ${theme === 'dark' ? 'bg-gray-800/90 border-gray-700 backdrop-blur-sm' : 'bg-white/90 border-gray-200 backdrop-blur-sm'}`}>
              
              {/* Navigation instruction */}
              <div className={`text-center sm:hidden mb-2 px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                <span className="text-sm font-medium">👆 Tap to explore different project categories</span>
              </div>
              
              <button
                onClick={() => setActiveSection('industry')}
                className={`group relative px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'industry'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-600 hover:border-cyan-500/50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    activeSection === 'industry' ? 'bg-white' : 'bg-cyan-500'
                  } ${activeSection !== 'industry' ? 'animate-pulse' : ''}`}></div>
                  <span>Industry Level</span>
                  {activeSection === 'industry' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  )}
                </div>
                {activeSection !== 'industry' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
              
              <button
                onClick={() => setActiveSection('major')}
                className={`group relative px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'major'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-600 hover:border-purple-500/50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300 hover:border-purple-500/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    activeSection === 'major' ? 'bg-white' : 'bg-purple-500'
                  } ${activeSection !== 'major' ? 'animate-pulse' : ''}`}></div>
                  <span>Major Projects</span>
                  {activeSection === 'major' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  )}
                </div>
                {activeSection !== 'major' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
              
              <button
                onClick={() => setActiveSection('minor')}
                className={`group relative px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'minor'
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg shadow-green-500/30'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-600 hover:border-green-500/50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300 hover:border-green-500/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    activeSection === 'minor' ? 'bg-white' : 'bg-green-500'
                  } ${activeSection !== 'minor' ? 'animate-pulse' : ''}`}></div>
                  <span>Minor Projects</span>
                  {activeSection === 'minor' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  )}
                </div>
                {activeSection !== 'minor' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
              
              {/* Desktop instruction */}
              <div className={`hidden sm:flex items-center px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700/30 text-gray-400' : 'bg-gray-50 text-gray-500'}`}>
                <span className="text-sm">👈 Click to switch categories</span>
              </div>
            </div>
            
            {/* Category counter */}
            <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
              {activeSection === 'industry' ? '🏢' : activeSection === 'major' ? '🚀' : '⭐'} 
              {activeSection === 'industry' ? 'Professional' : activeSection === 'major' ? 'Advanced' : 'Learning'} Projects
            </div>
          </div>
        </div>

        {/* Industry Level Projects */}
        {activeSection === 'industry' && (
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Industry Level Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>
        )}

        {/* Major Projects */}
        {activeSection === 'major' && (
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Major Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {majorProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>
        )}

        {/* Minor Projects */}
        {activeSection === 'minor' && (
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Minor Projects
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {minorProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>
        )}

        {/* Enhanced Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm rounded-full">
                    {selectedProject.category}
                  </span>
                  {selectedProject.award && (
                    <span className="flex items-center gap-2 px-3 py-1 bg-yellow-500 text-white text-sm rounded-full">
                      <Award className="w-4 h-4" />
                      {selectedProject.award}
                    </span>
                  )}
                </div>
                
                <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {selectedProject.title}
                </h2>
                
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedProject.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-2 rounded-lg text-sm font-medium ${
                            theme === 'dark'
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Key Features
                    </h3>
                    <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 