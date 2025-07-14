import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Award, X } from 'lucide-react';

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
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [flippedId, setFlippedId] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const section = document.getElementById('projects');
    // Check if section is already in viewport on mount
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "CI/CD Pipeline Automation",
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
      github: "https://github.com/mohitsharmamanpur/DevOps-project-1",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "DevOps"
    },
    {
      id: 2,
      title: "IPC Section Suggestion System using ML",
      description: "An intelligent ML system to suggest IPC sections for legal cases, reducing manual referencing errors and saving time in legal documentation.",
      tech: ["Python", "Scikit-learn", "Flask"],
      features: [
        "Natural Language Processing for case analysis",
        "ML model trained on legal case data",
        "Intelligent IPC section recommendations",
        "Confidence scoring system",
        "Legal document parser",
        "Web-based interface for easy access"
      ],
      github: "https://github.com/mohitsharmamanpur/IPC-Section-Suggestion-ML",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "A modern, animated portfolio website to showcase my projects, skills, and achievements. Built with React and Tailwind CSS.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      features: [
        "Animated hero and project sections",
        "Responsive design for all devices",
        "Dark/light theme toggle",
        "Interactive project modals",
        "Custom 3D and glitch effects",
        "Fast performance with Vite"
      ],
      github: "https://github.com/mohitsharmamanpur/Mohit-Portfolio",
      demo: "https://mohitportfolio30.netlify.app/",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Frontend"
    },
    {
      id: 4,
      title: "BGMI (Battlegrounds Mobile India) Info Site",
      description: "A web-based info hub for BGMI players providing data on guns, maps, damage stats, utilities, and more.",
      tech: ["HTML", "CSS", "JavaScript"],
      features: [
        "Gamer theme with glitch text and dark mode.",
        "Used in projects to help YouTubers and eSports players.",
        "Complete weapon database with damage statistics",
        "Interactive maps with strategic locations",
        "Player statistics tracking",
        "Mobile responsive design"
      ],
      github: "https://github.com/mohitsharmamanpur/bgmi-project",
      demo: "https://bgmi-info.netlify.app",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Alumni Association Platform",
      description: "A website that connects college/school students to their alumni for networking, mentorship, and career support.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Alumni registration and profile management",
        "Mentorship matching system",
        "Event management and notifications",
        "Career opportunity board",
        "Discussion forums and networking",
        "Success stories showcase"
      ],
      github: "https://github.com/mohitsharmamanpur/Collage-Assoiciation-Platform",
      demo: "https://alumni-connect.netlify.app",
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web Development"
    },
    {
      id: 6,
      title: "Menu Based Project",
      description: "A menu-based project is a program or application that presents the user with a list of options (a menu) and performs specific actions based on the user's selection. It usually follows this structure:",
      tech: ["Machine Learning", "Linux", "Windows", "Python", "DevOps", "Cloud", "Agentic AI", "Full-Stack", "JavaScript"],
      features: [
        "User-friendly menu-driven interface",
        "Supports multiple platforms: Linux, Windows",
        "Integrates Machine Learning and DevOps tasks",
        "Cloud and Agentic AI capabilities",
        "Full-Stack and JavaScript automation"
      ],
      github: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Automation"
    },
    {
      id: 7,
      title: "Automated EC2 Instance Launch Using Python & Boto3 | AWS Cloud Project",
      description: "I’m excited to share that I successfully launched an Amazon EC2 instance using Python (Boto3 SDK)! This hands-on experience helped me understand the real power of Infrastructure as Code (IaC), cloud automation, and AWS services — crucial skills in the DevOps and cloud ecosystem.",
      tech: ["Python", "AWS", "Boto3", "Cloud", "DevOps"],
      features: [
        "Launched a t2.micro EC2 instance using a Python script",
        "Integrated AWS credentials securely with the Boto3 SDK",
        "Specified AMI, region, and instance configurations programmatically",
        "Understood the backend automation behind GUI-based EC2 launches",
        "Explored how DevOps tools leverage automation for scalable deployments"
      ],
      github: "https://github.com/mohitsharmamanpur/aws-ec2-automation",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Cloud/DevOps"
    },
    {
      id: 8,
      title: "Finance Education Chatbot using Google Gemini + Gradio",
      description: "In the fast-paced world of AI and finance, I’ve created a beginner-friendly chatbot that explains financial concepts like SIPs, mutual funds, stocks, Nifty 50, compound interest, and more — all in simple, easy-to-understand language. The chatbot is powered by Google’s Gemini 1.5 Flash model and features a sleek Gradio interface where users can ask finance-related questions and get instant AI-generated responses.",
      tech: ["Python", "Gradio", "Google Gemini", "AI", "Finance"],
      features: [
        "Natural language answers to complex finance topics",
        "Interactive Gradio UI with input, examples, and clear options",
        "Prompt-engineered backend for reliable, beginner-focused output",
        "Beginner-friendly explanations for financial literacy",
        "Explores Generative AI in education"
      ],
      github: "https://github.com/mohitsharmamanpur/finance-chatbot-gemini",
      image: "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "AI/Education"
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={`pt-32 pb-20 relative overflow-hidden min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating project icons */}
        <div className="floating-project-icons">
          {['💻', '🚀', '⚡', '🔧', '🎯', '💡', '🌟', '🔥'].map((icon, i) => (
            <div
              key={i}
              className={`absolute text-4xl opacity-15 ${isVisible ? 'animate-float-complex' : ''} hover:opacity-30 hover:scale-125 transition-all duration-300`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Parallax background with tech pattern */}
        <div 
          className="parallax-layer-3"
          style={{
            transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0001})`,
          }}
        >
          <div className={`w-full h-full opacity-10 ${theme === 'dark' ? 'bg-gradient-to-bl from-cyan-500 to-purple-500' : 'bg-gradient-to-bl from-purple-500 to-pink-500'}`} />
        </div>

        {/* Enhanced Hexagonal grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="hexagon-pattern">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="10" height="8.66" patternUnits="userSpaceOnUse">
                <polygon points="5,0 8.66,2.5 8.66,6.5 5,9 1.34,6.5 1.34,2.5" stroke={theme === 'dark' ? '#06b6d4' : '#8b5cf6'} strokeWidth="0.3" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} ${isVisible ? 'animate-title-reveal' : 'opacity-0'}`}>
            Major <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full ${isVisible ? 'animate-line-expand' : 'w-0'} transition-all duration-1000 delay-300`}></div>
          <p className={`mt-4 text-lg font-medium ${theme === 'dark' ? 'text-cyan-200' : 'text-purple-700'} animate-float`}>Click image to see details about project.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-visible rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer project-card-3d ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } ${isVisible ? 'animate-card-reveal' : 'opacity-0'} project-3d-tilt`}
              style={{animationDelay: `${index * 0.2}s`}}
              onClick={(e) => {
                // If the image area was not clicked, open modal
                if (!(e.target as HTMLElement).closest('.project-image-flip')) {
                  openModal(project);
                }
              }}
            >
              {/* Image Flip Effect Only */}
              <div
                className={`project-image-flip${flippedId === project.id ? ' flipped' : ''}`}
                onClick={e => {
                  e.stopPropagation();
                  setFlippedId(flippedId === project.id ? null : project.id);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image-front">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-cyan-400 group-hover:shadow-[0_0_32px_8px_rgba(34,211,238,0.4)] transition-all duration-500 pointer-events-none animate-gradient-border"></div>
                    {/* Overlay effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
                        Click to View Details
                      </div>
                    </div>
                  </div>
                <div className="project-image-back">
                  <div className="flex flex-col justify-center items-center w-full h-48 p-4 bg-gradient-to-br from-cyan-500/80 to-purple-500/80 rounded-2xl">
                    <h3 className="text-lg font-bold text-white mb-2">Key Features</h3>
                    <ul className="text-white text-sm space-y-1">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {project.features.length > 4 && (
                      <p className="text-xs text-white/80 mt-2">+{project.features.length - 4} more features</p>
                    )}
                  </div>
                </div>
              </div>
              {/* End Image Flip Effect Only */}
                  {/* Enhanced Project Content */}
                  <div className="p-6 relative">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs rounded-full animate-pulse">
                        {project.category}
                      </span>
                    </div>
                {/* Glitch effect on title */}
                <h3 className={`text-xl font-bold mb-3 glitch-text ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`} data-text={project.title}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-4 line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} group-hover:text-gray-500 transition-colors duration-300`}>
                      {project.description}
                    </p>
                    {/* Enhanced Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs rounded-full transition-all duration-300 hover:scale-110 ${
                            theme === 'dark'
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                          style={{animationDelay: `${techIndex * 0.1}s`}}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs text-gray-500 animate-pulse">+{project.tech.length - 3} more</span>
                      )}
                    </div>
                    {/* Enhanced Action Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, '_blank');
                          }}
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </button>
                      )}
                  {project.github && (
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                      className="p-2 ml-1 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                  )}
                      {project.demo && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demo, '_blank');
                          }}
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </button>
                      )}
                    </div>
                  </div>
              {/* Enhanced Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              {/* Particle burst effect on hover */}
              <div className="particle-burst opacity-0 group-hover:opacity-100">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      '--angle': `${i * 45}deg`,
                      '--delay': `${i * 0.1}s`
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className={`relative max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl modal-3d ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              {/* Enhanced Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Enhanced Modal Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} animate-title-reveal`}>
                    {selectedProject.title}
                  </h3>
                  {selectedProject.award && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 animate-bounce-gentle">
                      <Award className="w-4 h-4" />
                      {selectedProject.award}
                    </div>
                  )}
                </div>

                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} animate-slide-in-up`}>
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="animate-slide-in-left">
                    <h4 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} animate-slide-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="animate-slide-in-right">
                    <h4 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={tech}
                          className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-sm font-medium hover:scale-110 transition-transform duration-300 animate-slide-in-up"
                          style={{animationDelay: `${index * 0.1}s`}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}