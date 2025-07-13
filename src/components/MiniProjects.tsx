import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, Github, Code } from 'lucide-react';

interface MiniProjectsProps {
  theme: 'light' | 'dark';
}

interface MiniProject {
  id: number;
  icon: any;
  label: string;
  value: string;
  color: string;
  repoLink: string;
  category: string;
}

export default function MiniProjects({ theme }: MiniProjectsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<MiniProject | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const section = document.getElementById('mini-projects');
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

  const miniProjects: MiniProject[] = [
    {
      id: 1,
      icon: Award,
      label: "Web Scraping using Python",
      value: "Automated data extraction from websites using Python scripts with BeautifulSoup and Selenium.",
      color: "from-cyan-500 to-blue-500",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py",
      category: "Python Automation"
    },
    {
      id: 2,
      icon: Award,
      label: "Send an Email with Python",
      value: "Use Python to successfully send an email programmatically using SMTP libraries.",
      color: "from-purple-500 to-pink-500",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py",
      category: "Python Automation"
    },
    {
      id: 3,
      icon: Award,
      label: "Send an SMS with Python",
      value: "Send a text message using Python and an SMS gateway/API integration.",
      color: "from-green-400 to-blue-400",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py",
      category: "Python Automation"
    },
    {
      id: 4,
      icon: Award,
      label: "Make a Phone Call with Python",
      value: "Use Python to make a phone call using a text-to-voice API and telephony services.",
      color: "from-yellow-400 to-orange-400",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py",
      category: "Python Automation"
    },
    {
      id: 5,
      icon: Award,
      label: "Post on Instagram with Python",
      value: "Post a message and images on Instagram using Python automation with Instagram API.",
      color: "from-pink-400 to-red-400",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py",
      category: "Python Automation"
    },
    {
      id: 6,
      icon: Award,
      label: "Menu-Driven Python Project",
      value: "A comprehensive menu-driven Python program that combines all automation tasks into a single interface.",
      color: "from-gray-700 to-gray-900",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py",
      category: "Python Automation"
    },
    {
      id: 7,
      icon: Award,
      label: "Take Photo Using JavaScript",
      value: "Create a JavaScript function to access the webcam and capture a photo using MediaDevices API.",
      color: "from-cyan-500 to-blue-500",
      repoLink: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html",
      category: "JavaScript Automation"
    },
    {
      id: 8,
      icon: Award,
      label: "Send Email Using JavaScript or API",
      value: "Use EmailJS or a backend API to send email through a JavaScript-based interface.",
      color: "from-purple-500 to-pink-500",
      repoLink: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html",
      category: "JavaScript Automation"
    },
    {
      id: 9,
      icon: Award,
      label: "Send WhatsApp Message Using JavaScript",
      value: "Use WhatsApp web URL scheme or API to initiate a WhatsApp message from JavaScript.",
      color: "from-green-400 to-blue-400",
      repoLink: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html",
      category: "JavaScript Automation"
    },
    {
      id: 10,
      icon: Award,
      label: "Send WhatsApp Message Using Python",
      value: "Automate WhatsApp messaging using Python with web automation or API integration.",
      color: "from-green-500 to-teal-500",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py",
      category: "Python Automation"
    },
    {
      id: 11,
      icon: Award,
      label: "Track Most Viewed Product using Javascript",
      value: "Create a system to track and analyze the most viewed products on an e-commerce platform.",
      color: "from-indigo-500 to-purple-600",
      repoLink: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html",
      category: "JavaScript Analytics"
    },
    {
      id: 12,
      icon: Award,
      label: "Get Current IP and Location using Javascript",
      value: "Build a script to retrieve current IP address and geolocation information using JavaScript APIs.",
      color: "from-blue-600 to-indigo-700",
      repoLink: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html",
      category: "JavaScript API"
    }
  ];

  const openModal = (project: MiniProject) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="mini-projects" className={`pt-32 pb-20 relative overflow-hidden min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating mini project icons */}
        <div className="floating-mini-project-icons">
          {['🐍', '⚡', '🔧', '🎯', '💡', '🌟', '🔥', '🚀', '📱', '🌐', '📧', '📞'].map((icon, i) => (
            <div
              key={i}
              className={`absolute text-3xl opacity-10 ${isVisible ? 'animate-float-complex' : ''} hover:opacity-30 hover:scale-125 transition-all duration-300`}
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

        {/* Parallax background */}
        <div 
          className="parallax-layer-3"
          style={{
            transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.00005})`,
          }}
        >
          <div className={`w-full h-full opacity-5 ${theme === 'dark' ? 'bg-gradient-to-bl from-green-500 to-blue-500' : 'bg-gradient-to-bl from-blue-500 to-green-500'}`} />
        </div>

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="grid-pattern">
            <defs>
              <pattern id="grid" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke={theme === 'dark' ? '#10b981' : '#3b82f6'} strokeWidth="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} ${isVisible ? 'animate-title-reveal' : 'opacity-0'}`}>
            Mini <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full ${isVisible ? 'animate-line-expand' : 'w-0'} transition-all duration-1000 delay-300`}></div>
          <p className={`mt-4 text-lg font-medium ${theme === 'dark' ? 'text-green-200' : 'text-blue-700'} animate-float`}>
            Quick automation tasks and mini projects showcasing various technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer project-card-3d ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } ${isVisible ? 'animate-card-reveal' : 'opacity-0'} project-3d-tilt`}
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => openModal(project)}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400 group-hover:shadow-[0_0_20px_4px_rgba(34,197,94,0.3)] transition-all duration-500 pointer-events-none"></div>
                
                {/* Enhanced Project Content */}
                <div className="p-6 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs rounded-full animate-pulse">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${project.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300`}>
                      {project.label}
                    </h3>
                  </div>
                  
                  <p className={`text-sm mb-4 line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} group-hover:text-gray-500 transition-colors duration-300`}>
                    {project.value}
                  </p>
                  
                  {/* Action Button */}
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.repoLink, '_blank');
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg"
                    >
                      <Code className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>
                
                {/* Enhanced Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Particle burst effect on hover */}
                <div className="particle-burst opacity-0 group-hover:opacity-100">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="particle"
                      style={{
                        '--angle': `${i * 60}deg`,
                        '--delay': `${i * 0.1}s`
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className={`relative max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl modal-3d ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${selectedProject.color} rounded-xl shadow-lg`}>
                    <selectedProject.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} animate-title-reveal`}>
                      {selectedProject.label}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} animate-slide-in-up`}>
                  {selectedProject.value}
                </p>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                  <button
                    onClick={closeModal}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Code className="w-5 h-5" />
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 