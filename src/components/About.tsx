import React, { useState, useEffect } from 'react';
import { User, MapPin, Mail, Phone, GraduationCap, Award, Github, Linkedin } from 'lucide-react';

interface AboutProps {
  theme: 'light' | 'dark';
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className={`pt-32 pb-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating icons */}
        <div className="floating-about-icons">
          {['👨‍💻', '🎓', '🚀', '💡', '🌟', '🔥', '⚡', '🎯'].map((icon, i) => (
            <div
              key={i}
              className={`absolute text-4xl opacity-10 ${isVisible ? 'animate-float-complex' : ''} hover:opacity-30 hover:scale-125 transition-all duration-300`}
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
            transform: `translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.0001})`,
          }}
        >
          <div className={`w-full h-full opacity-5 ${theme === 'dark' ? 'bg-gradient-to-bl from-purple-500 to-pink-500' : 'bg-gradient-to-bl from-pink-500 to-purple-500'}`} />
        </div>

        {/* Enhanced pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="about-pattern">
            <defs>
              <pattern id="about-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1" fill={theme === 'dark' ? '#8b5cf6' : '#ec4899'} opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-pattern)"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} ${isVisible ? 'animate-title-reveal' : 'opacity-0'}`}>
            About <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full ${isVisible ? 'animate-line-expand' : 'w-0'} transition-all duration-1000 delay-300`}></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main About Content */}
            <div className="lg:col-span-2">
              <div className={`p-8 rounded-2xl border shadow-2xl ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Mohit Sharma
                  </h3>
                </div>
                
                <div className="space-y-4 text-lg">
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    I'm an enthusiastic and detail-oriented engineering student pursuing my B.Tech at{' '}
                    <span className="font-semibold text-purple-500 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Swami Keshwanand Institute of Technology and Gramothan (SKIT)
                    </span>.
                  </p>
                  
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    I specialize in{' '}
                    <span className="font-semibold text-pink-500 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      Python, Machine Learning, DevOps, and Full-Stack development
                    </span>. 
                    I'm actively involved in projects, internships, and hackathons to enhance my skills.
                  </p>
                  
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    I'm a fast learner and team player with a strong passion for technology, aiming to work in{' '}
                    <span className="font-semibold text-purple-500 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      top product-based companies like FAANG
                    </span>.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-8">
                  <a
                    href="https://github.com/mohitsharmamanpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="mailto:msharmampr@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>

            {/* Personal Info Cards */}
            <div className="space-y-6">
              {[
                { icon: GraduationCap, label: "Branch", value: "Information Technology", color: "from-blue-500 to-cyan-500" },
                { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan", color: "from-green-500 to-emerald-500" },
                { icon: Phone, label: "Phone", value: "9694591869", color: "from-orange-500 to-red-500" },
                { icon: Award, label: "Focus", value: "Full-Stack & ML", color: "from-purple-500 to-pink-500" }
              ].map(({ icon: Icon, label, value, color }, index) => (
                <div 
                  key={label} 
                  className={`p-6 rounded-2xl border shadow-xl transition-all duration-500 hover:scale-105 ${
                    theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-200'
                  } ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-r ${color} rounded-xl shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{label}</p>
                      <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
