import React, { useState, useEffect } from 'react';
import { User, MapPin, Mail, Phone, GraduationCap } from 'lucide-react';

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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
    <section id="about" className={`py-10 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="floating-shapes">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`floating-shape ${isVisible ? 'animate-float-complex' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              <div className={`w-6 h-6 ${
                i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-none'
              } ${theme === 'dark' ? 'bg-cyan-400/10' : 'bg-purple-400/10'} backdrop-blur-sm`} />
            </div>
          ))}
        </div>

        {/* Parallax background layers */}
        <div 
          className="parallax-layer-1"
          style={{
            transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px)`,
          }}
        >
          <div className={`w-full h-full opacity-5 ${theme === 'dark' ? 'bg-gradient-to-br from-cyan-500 to-purple-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} ${isVisible ? 'animate-title-slide-up' : 'opacity-0 translate-y-10'}`}>
            About <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full ${isVisible ? 'animate-line-expand' : 'w-0'} transition-all duration-1000 delay-300`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Side - Enhanced Image with 3D effects */}
          <div className={`relative flex justify-center ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative z-10 group w-72 h-80">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl transform-gpu perspective-1000 hover:rotate-y-12 transition-transform duration-700">
                <img 
                  src="/WhatsApp Image 2025-07-07 at 16.59.32_55fe4a13.jpg" 
                  alt="Mohit Sharma" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            {/* Enhanced glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 rounded-2xl blur-xl opacity-20 animate-pulse-slow"></div>
            
            {/* Floating particles around image */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 ${isVisible ? 'animate-orbit' : ''}`}
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '4s'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Enhanced Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
            <div className={`p-6 rounded-2xl backdrop-blur-sm border glass-morphism ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} shadow-xl hover:shadow-2xl transition-all duration-500 group`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`}>
                About Mohit Sharma
              </h3>
              <div className="space-y-4">
                <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-cyan-600 transition-colors duration-300`}>
                  I'm an enthusiastic and detail-oriented engineering student pursuing my B.Tech at 
                  <span className="font-semibold text-cyan-500 hover:text-cyan-400 transition-colors"> Swami Keshwanand Institute of Technology and Gramothan (SKIT)</span>.
                </p>
                <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-purple-600 transition-colors duration-300`}>
                  With a strong foundation in computer science, I specialize in 
                  <span className="font-semibold text-purple-500 hover:text-purple-400 transition-colors"> Python, Machine Learning, DevOps, and Full-Stack development</span>. 
                  I have hands-on experience building real-world projects, participating in hackathons, and interning at a leading tech firm.
                </p>
                <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-pink-600 transition-colors duration-300`}>
                  I'm a quick learner, a great team player, and a problem-solver aiming to work in 
                  <span className="font-semibold text-pink-500 hover:text-pink-400 transition-colors"> top product-based companies like FAANG</span>.
                </p>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-border"></div>
            </div>

            {/* Enhanced Info Cards */}
            <div className="grid grid-cols-1 gap-2">
              {[
                { icon: GraduationCap, label: "Branch", value: "Information Technology", color: "from-blue-500 to-cyan-500" },
                { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan", color: "from-green-500 to-emerald-500" },
                { icon: Mail, label: "Email", value: "msharmampr@gmail.com", color: "from-purple-500 to-pink-500" },
                { icon: Phone, label: "Phone", value: "9694591869", color: "from-orange-500 to-red-500" }
              ].map(({ icon: Icon, label, value, color }, index) => (
                <div 
                  key={label} 
                  className={`p-4 rounded-xl backdrop-blur-sm border info-card-3d ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-200'} hover:shadow-lg transition-all duration-500 group ${isVisible ? 'animate-card-reveal' : 'opacity-0'}`}
                  style={{animationDelay: `${index * 0.1 + 0.5}s`}}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 bg-gradient-to-r ${color} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${color} group-hover:bg-clip-text transition-all duration-300`}>{label}</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} group-hover:text-gray-500 transition-colors duration-300`}>{value}</p>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
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