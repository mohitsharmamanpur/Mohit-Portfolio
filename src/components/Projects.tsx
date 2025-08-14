import { useState, useEffect, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo?: string;
  image: string;
  category: string;
  award?: string;
  linkedin?: string;
}

interface ProjectsProps {
  theme: 'light' | 'dark';
}

// Industry Level Projects (IDs 1-5)
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
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Industry Level"
  },
  {
    id: 2,
    title: "Microservices Architecture",
    description: "Designed and implemented a scalable microservices architecture for enterprise applications.",
    tech: ["Docker", "Kubernetes", "Node.js", "MongoDB", "RabbitMQ"],
    features: [
      "Containerized microservices",
      "Service discovery and load balancing",
      "Asynchronous communication",
      "Centralized logging",
      "Auto-scaling"
    ],
    github: "https://github.com/mohitsharmamanpur/Microservices_Architecture",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Industry Level"
  },
  {
    id: 3,
    title: "Kubernetes Cluster",
    description: "Set up and managed a production-grade Kubernetes cluster with monitoring and logging.",
    tech: ["Kubernetes", "Helm", "Prometheus", "Grafana", "ELK Stack"],
    features: [
      "High availability setup",
      "Auto-scaling nodes",
      "Monitoring and alerting",
      "Log aggregation",
      "RBAC implementation"
    ],
    github: "https://github.com/mohitsharmamanpur/Kubernetes-Cluster",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Industry Level"
  },
  {
    id: 4,
    title: "Automated WordPress on AWS with Terraform",
    description: "Fully automated deployment of a secure, scalable WordPress application on AWS using Infrastructure as Code.",
    tech: ["Terraform", "AWS", "WordPress", "RDS", "VPC"],
    features: [
      "Custom VPC with public/private subnets",
      "Secure RDS instance in private subnets",
      "Automated WordPress installation",
      "Fine-grained security groups",
      "High availability architecture",
      "Single-command deployment"
    ],
    github: "https://github.com/mohitsharmamanpur/AWS-WordPress-Terraform",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Industry Level"
  },
  {
    id: 5,
    title: "Coming Soon Project",
    description: "An exciting new project currently under development. Stay tuned for updates!",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    features: [
      "Modern web application",
      "Responsive design",
      "Secure authentication",
      "RESTful API"
    ],
    github: "#",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Industry Level"
  }
];

// Major Projects (IDs 6-30)
const majorProjects: Project[] = [
  {
    id: 6,
    title: "Terraform AWS Automation",
    description: "Infrastructure as Code using Terraform to automate AWS resource provisioning.",
    tech: ["Terraform", "AWS", "CI/CD"],
    features: [
      "Automated infrastructure deployment",
      "Multi-environment support",
      "Modular architecture"
    ],
    github: "https://github.com/mohitsharmamanpur/terraform-automated-aws-server",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 7,
    title: "Titanic MLOps Pipeline",
    description: "End-to-end MLOps pipeline for the Titanic survival prediction challenge.",
    tech: ["Python", "Scikit-learn", "MLflow", "Docker", "FastAPI"],
    features: [
      "Data preprocessing pipeline",
      "Model training and evaluation",
      "Model versioning",
      "API endpoint for predictions"
    ],
    github: "https://github.com/mohitsharmamanpur/MLOps-Project-titanic",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_machinelearning-mlops-aws-activity-7360618359807209472--96e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 8,
    title: "AI-Powered Startup Assistant",
    description: "An intelligent assistant that helps refine startup ideas, perform market research, and generate business plans using Agentic AI.",
    tech: ["LangChain", "Google Gemini 2.5", "Streamlit", "Python"],
    features: [
      "Refines vague startup ideas into clear problem-solution statements",
      "Performs automated market research (size, competitors, trends)",
      "Generates complete Business Model Canvas",
      "Creates structured Pitch Deck",
      "Writes 30-second persuasive Elevator Pitch",
      "Agentic AI architecture with LangChain"
    ],
    github: "https://github.com/mohitsharmamanpur/Agentic-AI-tool1",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 9,
    title: "Cloud System Monitor Bot",
    description: "A Telegram bot for real-time system monitoring and performance metrics tracking.",
    tech: ["Python", "python-telegram-bot", "psutil", "Docker", "Cloud"],
    features: [
      "Real-time system metrics monitoring (CPU, RAM, Disk)",
      "24/7 cloud-hosted solution",
      "Interactive Telegram commands (/start, /status)",
      "Readable performance statistics",
      "Lightweight and efficient"
    ],
    github: "https://github.com/mohitsharmamanpur/System-Monitor-Bot",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 10,
    title: "Serverless EC2 API Gateway",
    description: "Serverless API Gateway for EC2 instance management.",
    tech: ["AWS Lambda", "API Gateway", "EC2", "Python"],
    features: [
      "RESTful API endpoints",
      "JWT authentication",
      "Auto-scaling integration",
      "Cost-effective solution"
    ],
    github: "https://github.com/mohitsharmamanpur/Serverless-EC2-API-Gateway",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 11,
    title: "URL API Info App",
    description: "A web application to extract and display information about any URL.",
    tech: ["Node.js", "Express", "Cheerio", "React"],
    features: [
      "URL metadata extraction",
      "Preview generation",
      "Link analysis",
      "Responsive UI"
    ],
    github: "https://github.com/mohitsharmamanpur/URL-API-Info-App",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 12,
    title: "AI Computer Vision Cloud",
    description: "Cloud-based computer vision solution for image analysis.",
    tech: ["Python", "OpenCV", "TensorFlow", "AWS"],
    features: [
      "Object detection",
      "Image classification",
      "Face recognition",
      "Scalable cloud architecture"
    ],
    github: "https://github.com/mohitsharmamanpur/AI-Computer-Vision-Cloud",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_ai-aws-gesturecontrol-activity-7355076978820997121-NzC7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/3861437/pexels-photo-3861437.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 10,
    title: "S3 Lambda SNS Notification",
    description: "Automated file processing with S3, Lambda, and SNS notifications.",
    tech: ["AWS S3", "AWS Lambda", "SNS", "Python"],
    features: [
      "Event-driven architecture",
      "Real-time notifications",
      "File processing pipeline",
      "Serverless implementation"
    ],
    github: "https://github.com/mohitsharmamanpur/S3-Lambda-SNS-Notification",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 11,
    title: "Audio Text Transcribe",
    description: "Convert speech to text with high accuracy using AI.",
    tech: ["Python", "SpeechRecognition", "Flask", "AWS Transcribe"],
    features: [
      "Speech-to-text conversion",
      "Multiple language support",
      "Web interface",
      "Batch processing"
    ],
    github: "https://github.com/mohitsharmamanpur/Audio-Text-Transcribe",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 12,
    title: "SageMaker ML Training",
    description: "Machine learning model training pipeline using AWS SageMaker.",
    tech: ["AWS SageMaker", "Python", "Scikit-learn", "Pandas"],
    features: [
      "Distributed training",
      "Hyperparameter optimization",
      "Model deployment",
      "Monitoring"
    ],
    github: "https://github.com/mohitsharmamanpur/SageMaker-ML-Training",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/3861437/pexels-photo-3861437.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 13,
    title: "PDF LLM Summarization",
    description: "AI-powered document summarization using large language models.",
    tech: ["Python", "Transformers", "PyPDF2", "Streamlit"],
    features: [
      "PDF text extraction",
      "Abstractive summarization",
      "Web interface",
      "Customizable summary length"
    ],
    github: "https://github.com/mohitsharmamanpur/PDF-LLM-Summarization",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 14,
    title: "Linear Regression ML",
    description: "Implementation of linear regression from scratch.",
    tech: ["Python", "NumPy", "Matplotlib", "Pandas"],
    features: [
      "Gradient descent optimization",
      "Feature scaling",
      "Model evaluation",
      "Visualization"
    ],
    github: "https://github.com/mohitsharmamanpur/Linear-Regression-ML",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/3861437/pexels-photo-3861437.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 13,
    title: "Multilinear Regression ML",
    description: "Implementation of multilinear regression for multiple features.",
    tech: ["Python", "NumPy", "Matplotlib", "Scikit-learn"],
    features: [
      "Multiple feature support",
      "Feature selection",
      "Regularization",
      "Cross-validation"
    ],
    github: "https://github.com/mohitsharmamanpur/Multilinear-Regression-ML",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  },
  {
    id: 16,
    title: "Binary Classification ML",
    description: "Binary classification model implementation with various algorithms.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    features: [
      "Logistic regression",
      "SVM",
      "Decision trees",
      "Model evaluation metrics"
    ],
    github: "https://github.com/mohitsharmamanpur/Binary-Classification-ML",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/3861437/pexels-photo-3861437.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Major Project"
  }
];

// Minor Projects (IDs 30+)
const minorProjects: Project[] = [
  {
    id: 33,
    title: "AWS Apache Web Server Automation with Ansible",
    description: "Automated Apache Web Server deployment on AWS using Ansible across 3 EC2s (1 Controller, 2 Managed). Started with ad-hoc commands, then fully automated via YAML Playbook for one-click provisioning.",
    tech: ["Ansible", "AWS EC2", "YAML", "Linux", "Apache"],
    features: [
      "3-instance setup: 1 Controller, 2 Managed",
      "Initial configuration via ad-hoc commands",
      "Idempotent Ansible Playbook for end-to-end automation",
      "Apache installation and service management",
      "One-click deployment workflow"
    ],
    github: "#",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_devops-ansible-aws-activity-7361745143479025664-fihU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 30,
    title: "Apache Docker Server",
    description: "Dockerized Apache web server with custom configuration.",
    tech: ["Docker", "Apache", "Linux"],
    features: [
      "Lightweight container",
      "Custom configuration",
      "Volume mounting",
      "Port mapping"
    ],
    github: "https://github.com/mohitsharmamanpur/Apache-Docker-Server",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 18,
    title: "Docker in Docker (DIND)",
    description: "Running Docker inside a Docker container for CI/CD pipelines.",
    tech: ["Docker", "CI/CD", "DevOps"],
    features: [
      "Nested Docker environment",
      "CI/CD pipeline integration",
      "Isolated build environment"
    ],
    github: "https://github.com/mohitsharmamanpur/Docker-in-Docker-DIND",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 19,
    title: "ML Docker Container",
    description: "Pre-configured Docker container for machine learning development.",
    tech: ["Docker", "Python", "Jupyter", "ML"],
    features: [
      "Pre-installed ML libraries",
      "Jupyter notebook support",
      "GPU acceleration"
    ],
    github: "https://github.com/mohitsharmamanpur/ML-Docker-Container",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 20,
    title: "Flask Docker App",
    description: "Dockerized Flask web application with production-ready configuration.",
    tech: ["Docker", "Flask", "Python", "Nginx"],
    features: [
      "Production-ready setup",
      "Nginx reverse proxy",
      "WSGI server",
      "Environment variables"
    ],
    github: "https://github.com/mohitsharmamanpur/Flask-Docker-App",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 21,
    title: "Firefox Docker Browser",
    description: "Headless Firefox browser in a Docker container for web automation.",
    tech: ["Docker", "Selenium", "Python", "Firefox"],
    features: [
      "Headless browsing",
      "Selenium WebDriver",
      "Screenshots",
      "Automation ready"
    ],
    github: "https://github.com/mohitsharmamanpur/Firefox-Docker-Browser",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 22,
    title: "Docker Compose Multi-Service",
    description: "Multi-container application using Docker Compose.",
    tech: ["Docker", "Docker Compose", "Microservices"],
    features: [
      "Containerized services",
      "Networking between containers",
      "Volume management"
    ],
    github: "https://github.com/mohitsharmamanpur/Docker-Compose-Multi-Service",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 31,
    title: "WordPress Docker Volume",
    description: "WordPress with persistent storage using Docker volumes.",
    tech: ["Docker", "WordPress", "MySQL", "PHP"],
    features: [
      "Persistent storage",
      "Database volume",
      "Easy backup",
      "Portable setup"
    ],
    github: "https://github.com/mohitsharmamanpur/WordPress-Docker-Volume",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 24,
    title: "Flask Backup API",
    description: "RESTful API for managing file backups with Flask.",
    tech: ["Python", "Flask", "REST API", "File handling"],
    features: [
      "File upload/download",
      "Authentication",
      "Metadata storage",
      "Versioning"
    ],
    github: "https://github.com/mohitsharmamanpur/Flask-Backup-API",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 25,
    title: "Python EC2 Automation",
    description: "Automate AWS EC2 instance management with Python.",
    tech: ["Python", "AWS", "Boto3", "EC2"],
    features: [
      "Instance creation/termination",
      "Status monitoring",
      "Tag management",
      "Cost optimization"
    ],
    github: "https://github.com/mohitsharmamanpur/Python-EC2-Automation",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 26,
    title: "Python Phone Call",
    description: "Make phone calls programmatically using Python.",
    tech: ["Python", "Twilio", "API", "Automation"],
    features: [
      "Voice calls",
      "Text-to-speech",
      "Call recording",
      "Call tracking"
    ],
    github: "https://github.com/mohitsharmamanpur/Python-Phone-Call",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 27,
    title: "Python Web Scraping",
    description: "Web scraping and data extraction using Python.",
    tech: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    features: [
      "HTML parsing",
      "Data extraction",
      "CSV/Excel export",
      "Rate limiting"
    ],
    github: "https://github.com/mohitsharmamanpur/Python-Web-Scraping",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 28,
    title: "Python Email Automation",
    description: "Automate email sending and processing with Python.",
    tech: ["Python", "SMTP", "IMAP", "Email parsing"],
    features: [
      "Send/receive emails",
      "Attachments handling",
      "Templates",
      "Scheduling"
    ],
    github: "https://github.com/mohitsharmamanpur/Python-Email-Automation",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 32,
    title: "Python SMS Automation",
    description: "Send and receive SMS messages programmatically.",
    tech: ["Python", "Twilio", "API", "Automation"],
    features: [
      "Send SMS/MMS",
      "Receive messages",
      "Status callbacks",
      "Scheduling"
    ],
    github: "https://github.com/mohitsharmamanpur/Python-SMS-Automation",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  },
  {
    id: 30,
    title: "Python Instagram Automation",
    description: "Automate Instagram interactions using Python.",
    tech: ["Python", "Selenium", "WebDriver", "Automation"],
    features: [
      "Auto-like posts",
      "Follow/unfollow",
      "Commenting",
      "Analytics"
    ],
    github: "https://github.com/mohitsharmamanpur/Python-Instagram-Automation",
    linkedin: "https://www.linkedin.com/posts/mohit-sharma-236829318_aws-terraform-automation-activity-7360980905194102784-BSey?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A",
    image: "https://images.pexels.com/photos/211290/pexels-photo-211290.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Minor Project"
  }
];

export default function Projects({ theme }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<'industry' | 'major' | 'minor'>('industry');
  const [isVisible, setIsVisible] = useState(false);

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

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

  // Removed URL hash sync to prevent external hash changes from switching sections.

  // No derived memoization; we render completely separate blocks per section to avoid mixing

  return (
    <section id="projects" className={`py-16 md:py-24 lg:py-32 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-gray-800">
            {['industry', 'major', 'minor'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section as 'industry' | 'major' | 'minor')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === section
                    ? 'bg-white dark:bg-gray-700 text-cyan-600 dark:text-cyan-400 shadow'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {section === 'industry' ? 'Industry Projects' : 
                 section === 'major' ? 'Major Projects' : 'Minor Projects'}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - render exclusive blocks to prevent cross-tab DOM reuse */}
        {activeSection === 'industry' && (
          <div key="industry" className={`grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1`}>
            {industryProjects.map((project, index) => (
              <div key={`industry-${project.id}`} className="h-full">
                <ProjectCard
                  project={project}
                  theme={theme}
                  onOpenModal={openModal}
                  index={index}
                  isVisible={isVisible}
                />
              </div>
            ))}
          </div>
        )}
        {activeSection === 'major' && (
          <div key="major" className={`grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1`}>
            {majorProjects.map((project, index) => (
              <div key={`major-${project.id}`} className="h-full">
                <ProjectCard
                  project={project}
                  theme={theme}
                  onOpenModal={openModal}
                  index={index}
                  isVisible={isVisible}
                />
              </div>
            ))}
          </div>
        )}
        {activeSection === 'minor' && (
          <div key="minor" className={`grid gap-6 lg:grid-cols-5 md:grid-cols-2 grid-cols-1`}>
            {minorProjects.map((project, index) => (
              <div key={`minor-${project.id}`} className="h-full">
                <ProjectCard
                  project={project}
                  theme={theme}
                  onOpenModal={openModal}
                  index={index}
                  isVisible={isVisible}
                />
              </div>
            ))}
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject}
            onClose={closeModal}
            theme={theme}
          />
        )}
      </div>
    </section>
  );
}