import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, Code, Cloud, Brain, Bot } from 'lucide-react';

interface ExperienceProps {
  theme: 'light' | 'dark';
}

const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const experiences = [
    {
      company: "Linux World Pvt. Ltd.",
      position: "DevOps & Full Stack Intern",
      duration: "Summer Internship (2nd Year) + 15 Days",
      location: "Remote",
      type: "Internship",
      description: "Worked on real-time projects, pipelines, and AI applications. Gained hands-on experience with development and deployment workflows in a professional environment.",
      domains: [
        {
          name: "Cloud Computing",
          icon: Cloud,
          color: "from-green-400 to-emerald-500",
          skills: ["AWS", "Ansible", "Terraform"]
        },
        {
          name: "DevOps",
          icon: Cloud,
          color: "from-blue-400 to-cyan-500",
          skills: ["Docker", "Jenkins", "Kubernetes", "CI/CD Pipelines"]
        },
        {
          name: "Machine Learning",
          icon: Brain,
          color: "from-purple-400 to-pink-500",
          skills: ["Data Analysis", "Model Training", "ML Algorithms"]
        },
        {
          name: "Agentic AI",
          icon: Bot,
          color: "from-orange-400 to-red-500",
          skills: ["AI Agents", "Automated Systems", "Intelligent Workflows"]
        }
      ],
      achievements: [
        "Implemented cloud infrastructure using AWS services and automation tools",
        "Built automated CI/CD pipelines for production deployments",
        "Implemented machine learning models for data analysis",
        "Created intelligent AI agents for workflow automation",
        "Collaborated with senior developers on enterprise-level projects"
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Ultra-Enhanced Background with Moving Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Line Network */}
        <div className="line-network">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`network-line ${isVisible ? 'animate-line-flow' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${50 + Math.random() * 200}px`,
                height: '2px',
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                background: `linear-gradient(90deg, transparent, ${
                  theme === 'dark' ? '#06b6d4' : '#8b5cf6'
                }60, transparent)`
              }}
            />
          ))}
        </div>

        {/* Circuit Board Pattern */}
        <div className="circuit-board">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="circuit-svg">
            <defs>
              <pattern id="circuit-exp" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <path d="M 0 7.5 L 7.5 7.5 L 7.5 0 M 7.5 7.5 L 15 7.5 M 7.5 7.5 L 7.5 15" 
                      stroke={theme === 'dark' ? '#06b6d4' : '#8b5cf6'} 
                      strokeWidth="0.3" 
                      fill="none" 
                      opacity="0.2"/>
                <circle cx="7.5" cy="7.5" r="0.8" fill={theme === 'dark' ? '#06b6d4' : '#8b5cf6'} opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-exp)"/>
          </svg>
        </div>

        {/* Data Flow Lines */}
        <div className="data-flow">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`data-stream ${isVisible ? 'animate-data-flow' : ''}`}
              style={{
                left: `${i * 7}%`,
                animationDelay: `${i * 0.2}s`,
                background: `linear-gradient(180deg, transparent, ${
                  theme === 'dark' ? '#06b6d4' : '#8b5cf6'
                }40, transparent)`
              }}
            />
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="floating-tech">
          {['💻', '⚙️', '🔧', '📊', '🚀', '⚡', '🔗', '💡'].map((icon, i) => (
            <div
              key={i}
              className={`tech-icon ${isVisible ? 'animate-tech-float' : ''}`}
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

        {/* Parallax Background */}
        <div 
          className="parallax-layer-exp"
          style={{
            transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.03}px)`,
          }}
        >
          <div className={`w-full h-full opacity-5 ${theme === 'dark' ? 'bg-gradient-to-br from-cyan-500 to-purple-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} ${isVisible ? 'animate-title-reveal' : 'opacity-0'}`}>
            My <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full ${isVisible ? 'animate-line-expand' : 'w-0'} transition-all duration-1000`}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full timeline-enhanced">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full animate-pulse opacity-50"></div>
              </div>

              {/* Experience Card with Enhanced Effects */}
              <div className="relative pl-24 pb-12">
                {/* Enhanced Timeline Node */}
                <div className="absolute left-4 top-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-white shadow-2xl flex items-center justify-center timeline-node-enhanced">
                  <Briefcase className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Main Card with Ultra-Enhanced Effects */}
                <div className={`p-10 rounded-3xl shadow-2xl backdrop-blur-sm border experience-card-ultra ${
                  theme === 'dark' 
                    ? 'bg-gray-800/60 border-gray-700' 
                    : 'bg-white/80 border-gray-200'
                } hover:shadow-3xl transition-all duration-700 group ${isVisible ? 'animate-card-reveal' : 'opacity-0'}`}>
                  
                  {/* Header with Enhanced Styling */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                      <h3 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500`}>
                        {exp.position}
                      </h3>
                      <p className="text-2xl text-cyan-500 font-bold mb-3">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-6 text-base">
                        <span className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Calendar className="w-5 h-5" />
                          {exp.duration}
                        </span>
                        <span className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          <MapPin className="w-5 h-5" />
                          {exp.location}
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description with Enhanced Typography */}
                  <p className={`text-xl mb-10 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {exp.description}
                  </p>

                  {/* Domains with Ultra-Enhanced Cards */}
                  <div className="mb-10">
                    <h4 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Domains Covered
                    </h4>
                    <div className="grid md:grid-cols-2 gap-8">
                      {exp.domains.map((domain, domainIndex) => {
                        const Icon = domain.icon;
                        return (
                          <div key={domainIndex} className={`p-8 rounded-2xl backdrop-blur-sm border domain-card-ultra ${
                            theme === 'dark' 
                              ? 'bg-gray-900/40 border-gray-700' 
                              : 'bg-white/60 border-gray-200'
                          } hover:shadow-2xl transition-all duration-500 group`}>
                            <div className="flex items-center gap-4 mb-6">
                              <div className={`p-4 rounded-full bg-gradient-to-r ${domain.color} shadow-2xl group-hover:scale-125 transition-transform duration-500`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <h5 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {domain.name}
                              </h5>
                            </div>
                            <div className="flex flex-wrap gap-3">
                              {domain.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className={`px-3 py-2 text-sm rounded-full transition-all duration-300 hover:scale-110 ${
                                  theme === 'dark'
                                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                            
                            {/* Enhanced Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${domain.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-500`}></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Achievements with Enhanced Styling */}
                  <div>
                    <h4 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Key Achievements
                    </h4>
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className={`flex items-start gap-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
                          <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ultra-Enhanced Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Holographic Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-500/30 transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Skills Summary with Barrel Effect */}
        <div className="mt-20 text-center barrel-effect-container">
          <h3 className={`text-3xl font-bold mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} ${isVisible ? 'animate-title-reveal' : 'opacity-0'}`}>
            Professional Skills Gained
          </h3>
          <div className="flex flex-wrap justify-center gap-6 barrel-skills-grid">
            {[
              "DevOps Engineering", "Machine Learning", 
              "AI Development", "Project Management", "Team Collaboration",
              "Production Deployment", "Code Review",
              "Technical Documentation", "Problem Solving"
            ].map((skill, index) => (
              <span 
                key={index} 
                className={`px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-base font-semibold hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl skill-barrel-item ${isVisible ? 'animate-skill-barrel-reveal' : 'opacity-0'}`}
                style={{
                  animationDelay: `${index * 0.1 + 1}s`,
                  transform: isVisible ? 'none' : 'perspective(1000px) rotateX(30deg) translateY(20px)'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;