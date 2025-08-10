import React, { useState, useEffect } from 'react';
import { Trophy, Award, Target, Users, BookOpen, Cloud, Lock, ExternalLink, Star, Sparkles } from 'lucide-react';

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

  // Data
  const certifications = [
    {
      icon: Award,
      title: "NPTEL Certifications",
      description: "Data Structures & Algorithms (C++), Database Management Systems (DBMS)",
      year: "2023",
      category: "Certification",
      verifyLink: "#"
    },
    {
      icon: Cloud,
      title: "AWS Cloud with AI Workshop",
      description: "AWS, Computer Vision, Python, AI - Comprehensive cloud and AI training",
      year: "2023",
      category: "Workshop",
      verifyLink: "#"
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "Founder & CEO — Neuroaura",
      description: "Emotional Fingerprint Generator - Start-up focused on AI-powered emotional intelligence",
      year: "2024",
      category: "Leadership",
      verifyLink: "https://neuroauraindia.netlify.app/",
      isBigAchievement: true
    },
    {
      icon: BookOpen,
      title: "Published Research Paper",
      description: "AI emotion detection risks in the International Journal of Recent Research and Review(IJRRR)",
      year: "2024",
      category: "Research",
      verifyLink: "https://www.ijrrr.com/specialissues2-2025/ijrrr-Special-Issue-2-2025-paper46.pdf",
      isBigAchievement: true
    },
    {
      icon: Trophy,
      title: "Winner – Hackverse Hackathon",
      description: "Gurugram - Developed innovative ML solution for IPC section suggestion system",
      year: "2024",
      category: "Competition",
      verifyLink: "#"
    }
  ];

  const extracurricular = [
    {
      icon: Target,
      title: "Participant – Hackcrux",
      description: "LNMIIT Jaipur - Competed in prestigious hackathon with innovative solutions",
      year: "2024",
      category: "Competition",
      verifyLink: "#"
    },
    {
      icon: Users,
      title: "Coordinator – BGMI Event",
      description: "Annual Fest Pravah, SKIT Jaipur - Successfully organized gaming tournament",
      year: "2023",
      category: "Leadership",
      verifyLink: "#"
    },
    {
      icon: Users,
      title: "Volunteer – ICI Fest",
      description: "SKIT Jaipur - Contributed to technical festival organization and management",
      year: "2023",
      category: "Volunteering",
      verifyLink: "#"
    }
  ];

  const renderCard = (title: string, items: any[], icon: React.ComponentType<any>, gradientColors: string, index: number) => {
    return (
      <div 
        className={`relative p-8 rounded-2xl border-2 transition-all duration-500 hover:shadow-2xl group ${
          theme === 'dark' 
            ? 'bg-gray-800/60 border-gray-700 hover:border-gray-600' 
            : 'bg-white/80 border-gray-200 hover:border-gray-300'
        } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} backdrop-blur-sm`}
        style={{animationDelay: `${index * 0.2}s`}}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className={`p-4 rounded-xl bg-gradient-to-r ${gradientColors} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {React.createElement(icon, { className: "w-8 h-8 text-white" })}
          </div>
          <div>
            <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h2>
            <div className={`w-16 h-1 bg-gradient-to-r ${gradientColors} rounded-full mt-2`}></div>
          </div>
        </div>

        <div className="space-y-6">
          {items.map((item, itemIndex) => {
            const ItemIcon = item.icon;
            const isBigAchievement = item.isBigAchievement;
            
            return (
              <div 
                key={itemIndex}
                className={`relative p-6 rounded-xl border transition-all duration-300 hover:shadow-lg group/item ${
                  isBigAchievement
                    ? `ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20 animate-pulse-slow ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-purple-500/50' 
                          : 'bg-gradient-to-br from-purple-50/80 to-pink-50/60 border-purple-300/60'
                      }`
                    : `${
                        theme === 'dark' 
                          ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-700/50' 
                          : 'bg-gray-50/50 border-gray-200 hover:bg-gray-50'
                      }`
                }`}
              >
                {isBigAchievement && (
                  <>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                    <div className="absolute top-2 left-2">
                      <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                    </div>
                  </>
                )}

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${gradientColors} shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                    <ItemIcon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover/item:text-purple-400 transition-colors duration-300`}>
                        {item.title}
                        {isBigAchievement && (
                          <span className="ml-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full animate-pulse">
                            ✨ Featured
                          </span>
                        )}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                    
                    <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.year}
                      </span>
                      
                      <button 
                        onClick={() => item.verifyLink && item.verifyLink !== "#" && window.open(item.verifyLink, '_blank')}
                        className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          theme === 'dark' 
                            ? 'text-gray-400 hover:text-purple-400' 
                            : 'text-gray-600 hover:text-purple-600'
                        } ${item.verifyLink && item.verifyLink !== "#" ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        <span>{item.verifyLink && item.verifyLink !== "#" ? 'View' : 'Verify'}</span>
                        {item.verifyLink && item.verifyLink !== "#" ? <ExternalLink className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {isBigAchievement && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-50 group-hover/item:opacity-70 transition-opacity duration-300"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className={`mt-8 pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-center">
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {items.length} {title.toLowerCase()}
            </span>
          </div>
        </div>

        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradientColors} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      </div>
    );
  };

  return (
    <section id="achievements" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => {
            const randomLeft = (i * 7 + 10) % 100;
            const randomTop = (i * 11 + 15) % 100;
            const randomDelay = (i * 0.2) % 3;
            const randomDuration = 4 + (i % 3);
            
            return (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 ${isVisible ? 'animate-float' : ''}`}
                style={{
                  left: `${randomLeft}%`,
                  top: `${randomTop}%`,
                  animationDelay: `${randomDelay}s`,
                  animationDuration: `${randomDuration}s`
                }}
              />
            );
          })}
        </div>
        <div className={`absolute inset-0 opacity-5 ${theme === 'dark' ? 'bg-gradient-to-br from-purple-500 to-cyan-500' : 'bg-gradient-to-br from-purple-400 to-cyan-400'}`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Certifications & <span className="text-purple-500">Achievements</span>
          </h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Explore my professional journey through certifications, notable achievements, and leadership experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {renderCard("Certifications", certifications, Award, "from-indigo-500 to-purple-600", 0)}
          {renderCard("Achievements", achievements, Trophy, "from-purple-500 to-pink-600", 1)}
          {renderCard("Extra-Curricular", extracurricular, Target, "from-green-500 to-teal-600", 2)}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "2", label: "Certifications", icon: Award, color: "from-indigo-400 to-purple-600" },
            { number: "3", label: "Major Achievements", icon: Trophy, color: "from-purple-400 to-pink-600" },
            { number: "3", label: "Leadership Roles", icon: Users, color: "from-green-400 to-teal-600" },
            { number: "1", label: "Research Publication", icon: BookOpen, color: "from-blue-400 to-cyan-600" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className={`relative text-center p-6 rounded-xl border transition-all duration-300 hover:shadow-xl group ${
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
