import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Settings, Brain, Globe } from 'lucide-react';

interface SkillsProps {
  theme: 'light' | 'dark';
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('programming');
  const [animatedBars, setAnimatedBars] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const timer = setTimeout(() => setAnimatedBars(true), 500);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "Java", level: 80, color: "from-orange-400 to-orange-600" },
        { name: "C++", level: 75, color: "from-purple-400 to-purple-600" },
        { name: "HTML/CSS", level: 90, color: "from-green-400 to-green-600" },
        { name: "C", level: 70, color: "from-gray-400 to-gray-600" }
      ]
    },
    ml: {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        { name: "Scikit-Learn", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "Pandas", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "NumPy", level: 88, color: "from-indigo-400 to-indigo-600" },
        { name: "Data Preprocessing", level: 85, color: "from-purple-400 to-purple-600" },
        { name: "Model Training", level: 80, color: "from-pink-400 to-pink-600" },
        { name: "Deep Learning", level: 70, color: "from-red-400 to-red-600" }
      ]
    },
    database: {
      title: "Database Management",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "PostgreSQL", level: 75, color: "from-green-400 to-green-600" },
        { name: "MongoDB", level: 80, color: "from-yellow-400 to-yellow-600" },
        { name: "Database Design", level: 75, color: "from-purple-400 to-purple-600" }
      ]
    },
    web: {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "Bootstrap", level: 90, color: "from-purple-400 to-purple-600" },
        { name: "Tailwind CSS", level: 88, color: "from-blue-400 to-blue-600" },
        { name: "MERN Stack", level: 82, color: "from-pink-400 to-pink-600" }
      ]
    },
    devops: {
      title: "DevOps Tools",
      icon: Settings,
      skills: [
        { name: "Docker", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Jenkins", level: 80, color: "from-red-400 to-red-600" },
        { name: "Kubernetes", level: 75, color: "from-cyan-400 to-cyan-600" },
        { name: "Ansible", level: 70, color: "from-orange-400 to-orange-600" },
        { name: "Terraform", level: 65, color: "from-purple-400 to-purple-600" },
        { name: "Git & GitHub", level: 90, color: "from-gray-400 to-gray-600" }
      ]
    },
    cloud: {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 80, color: "from-orange-400 to-orange-600" },
        { name: "Azure", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Google Cloud", level: 70, color: "from-green-400 to-green-600" },
        { name: "IBM Cloud", level: 65, color: "from-purple-400 to-purple-600" },
        { name: "DigitalOcean", level: 70, color: "from-cyan-400 to-cyan-600" }
      ]
    }
  };

  return (
    <section id="skills" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Enhanced Animated Background with Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code symbols with enhanced effects */}
        <div className="floating-code-symbols">
          {['<>', '{}', '[]', '()', '/>', '&&', '||', '==', '!=', '++'].map((symbol, i) => (
            <div
              key={i}
              className={`absolute text-3xl font-mono opacity-15 ${isVisible ? 'animate-float-complex' : ''} ${theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'} hover:opacity-30 hover:scale-125 transition-all duration-300`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Enhanced Parallax background layers */}
        <div 
          className="parallax-layer-2"
          style={{
            transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.02}deg)`,
          }}
        >
          <div className={`w-full h-full opacity-10 ${theme === 'dark' ? 'bg-gradient-to-tr from-cyan-500 to-purple-500' : 'bg-gradient-to-tr from-purple-500 to-pink-500'}`} />
        </div>

        {/* Enhanced Circuit board pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="circuit-pattern">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20" stroke={theme === 'dark' ? '#06b6d4' : '#8b5cf6'} strokeWidth="0.5" fill="none"/>
                <circle cx="10" cy="10" r="1" fill={theme === 'dark' ? '#06b6d4' : '#8b5cf6'}/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Floating tech icons */}
        <div className="floating-tech-icons">
          {['💻', '🔧', '⚡', '🚀', '🎯', '💡'].map((icon, i) => (
            <div
              key={i}
              className={`absolute text-4xl opacity-10 ${isVisible ? 'animate-orbit' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${6 + Math.random() * 2}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} ${isVisible ? 'animate-title-reveal' : 'opacity-0'}`}>
            My <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full ${isVisible ? 'animate-line-expand' : 'w-0'} transition-all duration-1000 delay-300`}></div>
        </div>

        {/* Enhanced Tab Navigation with Magnetic Hover Effect */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category], index) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`group relative flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-110 magnetic-hover ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-2xl shadow-cyan-500/25'
                    : theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-xl'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:shadow-xl'
                } ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Icon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline font-semibold">{category.title}</span>
                
                {/* Enhanced Ripple effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                
                {/* Magnetic glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
              </button>
            );
          })}
        </div>

        {/* Enhanced Skills Display with 3D Effects */}
        <div className={`p-10 rounded-3xl backdrop-blur-sm border glass-morphism ${theme === 'dark' ? 'bg-gray-900/50 border-gray-700' : 'bg-gray-50/70 border-gray-200'} shadow-2xl hover:shadow-3xl transition-all duration-500 group skill-container-3d`}>
          <h3 className={`text-3xl font-bold mb-10 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`}>
            {skillCategories[activeTab as keyof typeof skillCategories].title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3 group skill-item-hover">
                <div className="flex justify-between items-center">
                  <span className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${skill.color} group-hover:bg-clip-text transition-all duration-300`}>
                    {skill.name}
                  </span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-mono bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-bold`}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full h-4 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden relative group skill-bar-container`}>
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden skill-bar-fill`}
                    style={{
                      width: animatedBars ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Enhanced Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                    
                    {/* Pulse effect */}
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                  
                  {/* Enhanced Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-50 rounded-full blur-md transition-opacity duration-300`}></div>
                  
                  {/* Particle trail effect */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Animated border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-border"></div>
          
          {/* 3D depth effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Enhanced Additional Skills with 3D Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "CS Fundamentals",
              items: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks"],
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Development Tools",
              items: ["VS Code", "PyCharm", "Jupyter Notebook", "Git", "DevC++"],
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "Methodologies",
              items: ["OOP", "Agile", "Scrum", "Test-Driven Development", "CI/CD"],
              color: "from-green-500 to-emerald-500"
            }
          ].map((section, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl backdrop-blur-sm border info-card-3d ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-200'} hover:shadow-2xl transition-all duration-500 group skill-card-hover ${isVisible ? 'animate-card-reveal' : 'opacity-0'}`}
              style={{animationDelay: `${index * 0.2 + 1}s`}}
            >
              <h4 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${section.color} group-hover:bg-clip-text transition-all duration-300`}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-cyan-500 transition-colors duration-300 group`}>
                    <div className={`w-3 h-3 bg-gradient-to-r ${section.color} rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300`}></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Enhanced Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* 3D border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;