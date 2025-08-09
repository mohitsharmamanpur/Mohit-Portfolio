import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Settings, Brain, Globe, GitBranch, Server, Cpu, Zap } from 'lucide-react';

interface SkillsProps {
  theme: 'light' | 'dark';
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages / Frameworks",
      skills: [
        { name: "Python", icon: "🐍", color: "bg-gradient-to-br from-yellow-400 to-blue-600" },
        { name: "C", icon: "⚙️", color: "bg-gradient-to-br from-blue-500 to-blue-700" },
        { name: "C++", icon: "⚡", color: "bg-gradient-to-br from-blue-600 to-purple-700" },
        { name: "Streamlit", icon: "📊", color: "bg-gradient-to-br from-red-400 to-red-600" },
        { name: "Gradio", icon: "🎨", color: "bg-gradient-to-br from-green-400 to-green-600" }
      ]
    },
    {
      title: "Cloud Technologies",
      skills: [
        { name: "AWS", icon: "☁️", color: "bg-gradient-to-br from-orange-400 to-orange-600" },
        { name: "Apache", icon: "🌐", color: "bg-gradient-to-br from-red-500 to-red-700" },
        { name: "Terraform", icon: "🏗️", color: "bg-gradient-to-br from-purple-500 to-purple-700" },
        { name: "Ansible", icon: "🤖", color: "bg-gradient-to-br from-red-600 to-red-800" }
      ]
    },
    {
      title: "DevOps & System Tools",
      skills: [
        { name: "Docker", icon: "🐳", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
        { name: "Kubernetes", icon: "⚓", color: "bg-gradient-to-br from-blue-500 to-blue-700" },
        { name: "Jenkins", icon: "🤖", color: "bg-gradient-to-br from-red-500 to-red-700" },
        { name: "Prometheus", icon: "📈", color: "bg-gradient-to-br from-orange-500 to-orange-700" },
        { name: "Git", icon: "📝", color: "bg-gradient-to-br from-orange-600 to-orange-800" },
        { name: "GitHub", icon: "🐙", color: "bg-gradient-to-br from-gray-700 to-gray-900" },
        { name: "CI/CD", icon: "🔄", color: "bg-gradient-to-br from-green-500 to-green-700" },
        { name: "Shell", icon: "💻", color: "bg-gradient-to-br from-green-600 to-green-800" },
        { name: "Linux", icon: "🐧", color: "bg-gradient-to-br from-yellow-500 to-yellow-700" },
        { name: "Monitoring", icon: "👁️", color: "bg-gradient-to-br from-purple-600 to-purple-800" }
      ]
    },
    {
      title: "Machine Learning / AI",
      skills: [
        { name: "Deep Learning", icon: "🧠", color: "bg-gradient-to-br from-purple-400 to-purple-600" },
        { name: "CNN", icon: "🖼️", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
        { name: "NLP", icon: "💬", color: "bg-gradient-to-br from-green-400 to-green-600" },
        { name: "GANs", icon: "🎭", color: "bg-gradient-to-br from-pink-400 to-pink-600" },
        { name: "Pandas", icon: "🐼", color: "bg-gradient-to-br from-blue-500 to-blue-700" },
        { name: "NumPy", icon: "🔢", color: "bg-gradient-to-br from-blue-600 to-blue-800" },
        { name: "TensorFlow", icon: "🔥", color: "bg-gradient-to-br from-orange-500 to-orange-700" },
        { name: "PyTorch", icon: "🔥", color: "bg-gradient-to-br from-red-500 to-red-700" },
        { name: "Keras", icon: "🧠", color: "bg-gradient-to-br from-red-600 to-red-800" }
      ]
    },
    {
      title: "Tools / IDEs",
      skills: [
        { name: "Scikit-Learn", icon: "🔬", color: "bg-gradient-to-br from-orange-400 to-orange-600" },
        { name: "VS Code", icon: "💻", color: "bg-gradient-to-br from-blue-500 to-blue-700" },
        { name: "Dev C++", icon: "⚙️", color: "bg-gradient-to-br from-blue-600 to-blue-800" },
        { name: "GitHub CLI", icon: "📟", color: "bg-gradient-to-br from-gray-600 to-gray-800" }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 ${isVisible ? 'animate-float' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Gradient background */}
        <div className={`absolute inset-0 opacity-5 ${theme === 'dark' ? 'bg-gradient-to-br from-purple-500 to-cyan-500' : 'bg-gradient-to-br from-purple-400 to-cyan-400'}`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Skills & Expertise
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            A playful bubble showcase of my technical and soft skills
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${categoryIndex * 0.1}s`}}>
              <h3 className={`text-2xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {category.title}
              </h3>
              
              {/* Skills Grid */}
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`group relative cursor-pointer transform hover:scale-110 transition-all duration-300 ${isVisible ? 'animate-bubble-in' : 'opacity-0 scale-0'}`}
                    style={{animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`}}
                  >
                    {/* Skill Bubble */}
                    <div className={`w-20 h-20 ${skill.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group-hover:rotate-12`}>
                      <span className="text-2xl">{skill.icon}</span>
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      
                      {/* Pulse effect */}
                      <div className="absolute inset-0 bg-white/10 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                    </div>
                    
                    {/* Skill name tooltip */}
                    <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 text-white border border-gray-700' 
                        : 'bg-white text-gray-900 border border-gray-200 shadow-lg'
                    }`}>
                      {skill.name}
                      <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
                        theme === 'dark' ? 'bg-gray-800 border-l border-t border-gray-700' : 'bg-white border-l border-t border-gray-200'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-20 text-center">
          <h3 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Data Structures", "Algorithms", "OOP", 
              "Problem Solving", "Team Leadership", "Communication"
            ].map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.05 + 1}s`}}
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

export default Skills;