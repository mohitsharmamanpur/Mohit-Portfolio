import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Code, MapPin, Mail, Phone } from 'lucide-react';

interface HeroProps {
  theme: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const textArray = [
    "Aspiring Software Developer",
    "DevOps Enthusiast", 
    "Full-Stack Learner",
    "FAANG Aspirant"
  ];

  // Tech logos for rotating border (updated to requested tools)
  const techLogos = [
    { name: 'Linux', icon: '🐧' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Jenkins', icon: '🤖' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'Cloud', icon: '☁️' },
    { name: 'Flutter', icon: '💙' },
    { name: 'VS Code', icon: '📝' },
    { name: 'Jupyter', icon: '📒' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Node.js', icon: '🟢' },
    // Add more popular tools as needed
    { name: 'Git', icon: '📦' },
    { name: 'Python', icon: '🐍' },
    { name: 'React', icon: '⚛️' }
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const fullText = textArray[currentTextIndex];
    
    if (!isDeleting && typedText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
    }
    
    const timeout = setTimeout(() => {
      setTypedText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : fullText.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentTextIndex, textArray]);

  const handleResumeDownload = () => {
    // Create a mock resume download
    const link = document.createElement('a');
    link.href = "Resume-Mohit.pdf";
    link.download = 'Mohit_Sharma_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background with Floating Shapes (About-style) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="floating-shapes">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`floating-shape animate-float-complex`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              <div className={`w-6 h-6 ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-none'} ${theme === 'dark' ? 'bg-cyan-400/10' : 'bg-purple-400/10'} backdrop-blur-sm`} />
            </div>
          ))}
        </div>
        {/* Parallax background layer */}
        <div 
          className="parallax-layer-hero"
          style={{
            transform: `translateY(${scrollY * 0.1 || 0}px) translateX(${scrollY * 0.05 || 0}px)`
          }}
        >
          <div className={`w-full h-full opacity-10 ${theme === 'dark' ? 'bg-gradient-to-br from-cyan-500 to-purple-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`} />
        </div>
        {/* Extra floating particles for depth */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-orbit"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center md:items-start text-left z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-text-glow">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse glitch-text">
              Mohit Sharma
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-cyan-200 font-medium mb-4">Aspiring Software Developer</h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl animate-float">
            DevOps Enthusiast | Full-Stack Learner | FAANG Aspirant
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <button 
              onClick={handleResumeDownload}
              className="group relative inline-flex items-center gap-6 px-40 py-6 text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 flip-btn"
            >
              <div className="flip-btn-inner">
                <div className="flip-btn-front flex items-center gap-3">
                  <Download className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                </div>
                <div className="flip-btn-back flex items-center gap-3 justify-center">
                  <span className="relative z-10">Get PDF</span>
                  <Download className="w-5 h-5 relative z-10" />
                </div>
              </div>
            </button>
            {/* Contact Me Button */}
            <button
              onClick={() => {
                const section = document.getElementById('contact');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative inline-flex items-center gap-4 px-12 py-6 text-xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50 mt-6"
            >
              <span className="relative z-10">Contact Me</span>
            </button>
          </div>
        </div>
        {/* Right: Profile Image with revolving tech icons */}
        <div className="flex-1 flex justify-center items-start relative z-10 mt-[-60px]"> {/* Shift upwards */}
          <div className="relative flex flex-col items-center">
            {/* Rotating tech logos border - exactly on the border of the profile photo */}
            <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
              {techLogos.map((tech, index) => {
                const angle = (index * 360) / techLogos.length;
                const profileRadius = 144; // 288px/2 for w-72/h-72 profile image
                const iconRadius = 20; // w-10/h-10 icon
                const borderPadding = 4; // p-1 (4px)
                const orbitRadius = profileRadius + iconRadius + borderPadding; // icon should touch the border
                const x = Math.cos((angle * Math.PI) / 180) * orbitRadius;
                const y = Math.sin((angle * Math.PI) / 180) * orbitRadius;
                return (
                  <div
                    key={tech.name}
                    className="absolute w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-lg animate-orbit-tech"
                    style={{
                      left: `calc(50% + ${x}px)` ,
                      top: `calc(50% + ${y}px)` ,
                      marginLeft: '-20px',
                      marginTop: '-20px',
                      animationDelay: `${index * 0.2}s`,
                      animationDuration: '10s',
                      zIndex: 0
                    }}
                    title={tech.name}
                  >
                    <span className="text-xl font-bold text-yellow-500 drop-shadow-[0_0_6px_rgba(255,255,0,0.7)]">{tech.icon}</span>
                  </div>
                );
              })}
            </div>
            {/* Main profile image */}
            <div className="w-72 h-72 rounded-full bg-white p-1 relative z-10 shadow-2xl flex items-center justify-center mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/WhatsApp Image 2025-07-09 at 13.38.49_979ae582.jpg" 
                  alt="Mohit Sharma" 
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500 brightness-110 contrast-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
          <span className="text-sm animate-pulse">Scroll Down</span>
        </div>
      </div>

      {/* Particle system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;