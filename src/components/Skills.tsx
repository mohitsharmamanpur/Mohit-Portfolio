import React, { useState, useEffect } from 'react';
import { Code, Cloud, Settings, Brain, Cpu, Zap } from 'lucide-react';

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
      title: "Programming Languages",
      icon: Code,
      iconColor: "text-blue-500",
      skills: ["Python", "C", "C++"]
    },
    {
      title: "GenAI & Agentic AI",
      icon: Brain,
      iconColor: "text-purple-500",
      skills: ["Google Gemini", "OpenAI GPT", "LangChain", "AI Agents", "Prompt Engineering", "RAG Systems"]
    },
    {
      title: "DevOps",
      icon: Settings,
      iconColor: "text-orange-500",
      skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Linux", "Git", "GitHub"]
    },
    {
      title: "Cloud",
      icon: Cloud,
      iconColor: "text-cyan-500",
      skills: ["AWS", "Google Cloud", "Azure", "Cloud Architecture", "Serverless", "Microservices"]
    },
    {
      title: "Machine Learning",
      icon: Cpu,
      iconColor: "text-pink-500",
      skills: ["TensorFlow", "PyTorch", "Deep Learning", "NLP", "CNN", "Pandas", "NumPy"]
    },
    {
      title: "Tools & IDEs",
      icon: Zap,
      iconColor: "text-green-500",
      skills: ["VS Code", "Jupyter", "Postman", "Streamlit", "Flask", "React"]
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

        {/* Skills Categories - Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={categoryIndex} 
                className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70' 
                    : 'bg-white/80 border-gray-200 hover:bg-white shadow-lg'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${categoryIndex * 0.1}s`}}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                        theme === 'dark' 
                          ? 'bg-gray-700/30 hover:bg-gray-700/50 text-gray-300' 
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${category.iconColor.replace('text-', 'bg-')}`}></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/30 transition-colors duration-300"></div>
              </div>
            );
          })}
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