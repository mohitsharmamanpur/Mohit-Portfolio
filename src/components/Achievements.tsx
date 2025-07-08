import React, { useState, useEffect } from 'react';
import { Trophy, Award, Code, Target, Users, BookOpen } from 'lucide-react';

interface AchievementsProps {
  theme: 'light' | 'dark';
}

const Achievements: React.FC<AchievementsProps> = ({ theme }) => {
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

    const section = document.getElementById('achievements');
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: "Winner, Hackverse 2024-2025",
      description: "Gurugram, Delhi - IPC ML Project",
      date: "2024",
      color: "from-yellow-400 to-orange-500",
      details: "Developed an intelligent IPC section suggestion system using machine learning"
    },
    {
      icon: Users,
      title: "Participated in Hackcrux",
      description: "LNMIIT, Jaipur",
      date: "2024",
      color: "from-blue-400 to-cyan-500",
      details: "Competed in prestigious hackathon with innovative solutions"
    },
    {
      icon: Target,
      title: "Smart India Hackathon",
      description: "Participated in SIH",
      date: "2024",
      color: "from-green-400 to-emerald-500",
      details: "National level hackathon participation with creative problem-solving"
    }
    // Commented out for brevity
    // ,{
    //   icon: Code,
    //   title: "LeetCode Problem Solver",
    //   description: "Solved 350+ DSA problems",
    //   date: "Ongoing",
    //   color: "from-purple-400 to-pink-500",
    //   details: "Consistent problem-solving practice with advanced algorithms"
    // },
    // {
    //   icon: BookOpen,
    //   title: "NPTEL Certified",
    //   description: "DSA with C++",
    //   date: "2023",
    //   color: "from-indigo-400 to-purple-500",
    //   details: "Comprehensive understanding of data structures and algorithms"
    // },
    // {
    //   icon: BookOpen,
    //   title: "NPTEL Certified",
    //   description: "Database Management Systems",
    //   date: "2023",
    //   color: "from-cyan-400 to-blue-500",
    //   details: "Advanced database concepts and management techniques"
    // }
  ];

  return (
    <section id="achievements" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Ultra-Enhanced Background with Multiple Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cosmic Nebula Effect */}
        <div className="cosmic-nebula">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`cosmic-particle ${isVisible ? 'animate-cosmic-drift' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'
                }40, transparent)`
              }}
            />
          ))}
        </div>

        {/* Quantum Field Lines */}
        <div className="quantum-field">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`quantum-line ${isVisible ? 'animate-quantum-flow' : ''}`}
              style={{
                left: `${i * 7}%`,
                animationDelay: `${i * 0.3}s`,
                background: `linear-gradient(90deg, transparent, ${
                  theme === 'dark' ? '#06b6d4' : '#8b5cf6'
                }30, transparent)`
              }}
            />
          ))}
        </div>

        {/* Holographic Grid */}
        <div className="holographic-grid">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="grid-pattern">
            <defs>
              <pattern id="holo-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke={theme === 'dark' ? '#06b6d4' : '#8b5cf6'} strokeWidth="0.2" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#holo-grid)"/>
          </svg>
        </div>

        {/* Energy Orbs */}
        <div className="energy-orbs">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`energy-orb ${isVisible ? 'animate-energy-pulse' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                background: `radial-gradient(circle, ${
                  ['#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b'][i % 4]
                }60, transparent)`
              }}
            />
          ))}
        </div>

        {/* Parallax Layers with Enhanced Movement */}
        <div 
          className="parallax-layer-cosmic"
          style={{
            transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px) rotate(${scrollY * 0.01}deg)`,
          }}
        >
          <div className={`w-full h-full opacity-10 ${theme === 'dark' ? 'bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500' : 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500'}`} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} ${isVisible ? 'animate-title-reveal' : 'opacity-0'}`}>
            My <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full ${isVisible ? 'animate-line-expand' : 'w-0'} transition-all duration-1000`}></div>
        </div>

        {/* Ultra-Enhanced 3D Timeline */}
        <div className="relative perspective-1000">
          {/* Enhanced Timeline Line with Quantum Effects */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-2 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full timeline-quantum">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full animate-pulse opacity-50"></div>
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
          </div>

          {/* Achievement Cards with Ultra-Enhanced Effects */}
          <div className="space-y-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row achievement-card-ultra ${isVisible ? 'animate-card-quantum-reveal' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    transform: isVisible ? 'none' : 'translateY(100px) rotateX(30deg)'
                  }}
                >
                  {/* Ultra-Enhanced Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-white shadow-2xl flex items-center justify-center z-10 timeline-node-ultra">
                    <Icon className="w-6 h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-30"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  </div>

                  {/* Content with Ultra-Enhanced Effects */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'} ml-20 md:ml-0`}>
                    <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-sm border achievement-content-ultra ${
                      theme === 'dark' 
                        ? 'bg-gray-900/60 border-gray-700' 
                        : 'bg-white/80 border-gray-200'
                    } hover:shadow-3xl transition-all duration-700 group achievement-card-hover`}>
                      
                      {/* Achievement Header with Ultra-Enhanced Animations */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-full bg-gradient-to-r ${achievement.color} shadow-2xl group-hover:scale-125 transition-transform duration-500 icon-ultra-3d`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500`}>
                            {achievement.title}
                          </h3>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>
                            {achievement.date}
                          </p>
                        </div>
                      </div>

                      {/* Achievement Details with Enhanced Effects */}
                      <p className={`text-xl font-medium mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                        {achievement.description}
                      </p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {achievement.details}
                      </p>

                      {/* Ultra-Enhanced Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500 ultra-glow`}></div>
                      
                      {/* Quantum Particle Burst Effect */}
                      <div className="quantum-burst opacity-0 group-hover:opacity-100">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="quantum-particle"
                            style={{
                              '--angle': `${i * 30}deg`,
                              '--delay': `${i * 0.05}s`
                            } as React.CSSProperties}
                          />
                        ))}
                      </div>

                      {/* Holographic Border Effect */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-500 holographic-border"></div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ultra-Enhanced Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "350+", label: "Problems Solved", icon: Code, color: "from-green-400 to-emerald-500" },
            { number: "4", label: "Hackathons", icon: Users, color: "from-blue-400 to-cyan-500" },
            { number: "2", label: "Certifications", icon: Award, color: "from-purple-400 to-pink-500" },
            { number: "1", label: "Major Win", icon: Trophy, color: "from-yellow-400 to-orange-500" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className={`text-center p-8 rounded-2xl backdrop-blur-sm border stat-card-ultra ${
                  theme === 'dark' 
                    ? 'bg-gray-900/40 border-gray-700' 
                    : 'bg-white/60 border-gray-200'
                } hover:shadow-2xl transition-all duration-700 group ${isVisible ? 'animate-stat-reveal' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.2 + 2}s`}}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-full group-hover:scale-125 transition-transform duration-500 shadow-2xl icon-ultra-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`text-4xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} counter-animation-ultra`}>
                  {stat.number}
                </div>
                <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
                
                {/* Ultra-Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 ultra-holographic-effect"></div>
                
                {/* Energy Ring Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/30 group-hover:animate-pulse transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;