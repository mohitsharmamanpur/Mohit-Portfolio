import React, { useState, useEffect } from 'react';
import { Trophy, Award, Code, Target, Users, BookOpen, Cloud, Coffee, Link, Bot, Lock, ExternalLink } from 'lucide-react';

interface AchievementsProps {
  theme: 'light' | 'dark';
}

const Achievements: React.FC<AchievementsProps> = ({ theme }) => {
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

    const section = document.getElementById('achievements');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Users,
      title: "Founder & CEO — Neuroaura",
      description: "Emotional Fingerprint Generator - Start-up focused on AI-powered emotional intelligence",
      year: "2024",
      category: "Leadership",
      categoryColor: "bg-purple-500",
      verifyLink: "https://neuroauraindia.netlify.app/"
    },
    {
      icon: BookOpen,
      title: "Published Research Paper",
      description: "AI emotion detection risks in the International Journal of Recent Research and Review(IJRRR)",
      year: "2024",
      category: "Research",
      categoryColor: "bg-blue-500",
      verifyLink: "https://www.ijrrr.com/specialissues2-2025/ijrrr-Special-Issue-2-2025-paper46.pdf"
    },
    {
      icon: Trophy,
      title: "Winner – Hackverse Hackathon",
      description: "Gurugram - Developed innovative ML solution for IPC section suggestion system",
      year: "2024",
      category: "Competition",
      categoryColor: "bg-yellow-500",
      verifyLink: "#"
    },
    {
      icon: Target,
      title: "Participant – Hackcrux",
      description: "LNMIIT Jaipur - Competed in prestigious hackathon with innovative solutions",
      year: "2024",
      category: "Competition",
      categoryColor: "bg-green-500",
      verifyLink: "#"
    },
    {
      icon: Award,
      title: "NPTEL Certifications",
      description: "Data Structures & Algorithms (C++), Database Management Systems (DBMS)",
      year: "2023",
      category: "Certification",
      categoryColor: "bg-indigo-500",
      verifyLink: "#"
    },
    {
      icon: Cloud,
      title: "AWS Cloud with AI Workshop",
      description: "AWS, Computer Vision, Python, AI - Comprehensive cloud and AI training",
      year: "2023",
      category: "Workshop",
      categoryColor: "bg-orange-500",
      verifyLink: "#"
    },
    {
      icon: Users,
      title: "Coordinator – BGMI Event",
      description: "Annual Fest Pravah, SKIT Jaipur - Successfully organized gaming tournament",
      year: "2023",
      category: "Leadership",
      categoryColor: "bg-purple-500",
      verifyLink: "#"
    },
    {
      icon: Users,
      title: "Volunteer – ICI Fest",
      description: "SKIT Jaipur - Contributed to technical festival organization and management",
      year: "2023",
      category: "Volunteering",
      categoryColor: "bg-teal-500",
      verifyLink: "#"
    }
  ];

  return (
    <section id="achievements" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 ${isVisible ? 'animate-float' : ''}`}
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
            Certifications and Extra-Curricular
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            Professional certifications and achievements in technology and development
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50' 
                    : 'bg-white/80 border-gray-200 hover:border-purple-500/50 shadow-lg'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Category Tag */}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${achievement.categoryColor}`}>
                    {achievement.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-purple-400 transition-colors duration-300`}>
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {achievement.description}
                </p>

                {/* Year */}
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                  {achievement.year}
                </p>

                {/* Verify Button */}
                <div className="flex justify-end">
                  <button 
                    onClick={() => achievement.verifyLink && achievement.verifyLink !== "#" && window.open(achievement.verifyLink, '_blank')}
                    className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      theme === 'dark' 
                        ? 'text-gray-400 hover:text-purple-400' 
                        : 'text-gray-600 hover:text-purple-600'
                    } ${achievement.verifyLink && achievement.verifyLink !== "#" ? 'cursor-pointer' : 'cursor-default'}`}>
                    <span>{achievement.verifyLink && achievement.verifyLink !== "#" ? 'View' : 'Verify'}</span>
                    {achievement.verifyLink && achievement.verifyLink !== "#" ? <ExternalLink className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </button>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500/30 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "1", label: "Start-up Founded", icon: Users, color: "from-purple-400 to-purple-600" },
            { number: "1", label: "Research Paper", icon: BookOpen, color: "from-blue-400 to-blue-600" },
            { number: "1", label: "Hackathon Win", icon: Trophy, color: "from-yellow-400 to-yellow-600" },
            { number: "2", label: "NPTEL Certifications", icon: Award, color: "from-green-400 to-green-600" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className={`text-center p-6 rounded-xl border transition-all duration-300 hover:shadow-xl group ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-white/80 border-gray-200'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1 + 1}s`}}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {stat.number}
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;