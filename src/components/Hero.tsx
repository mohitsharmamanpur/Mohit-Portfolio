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

  // Tech logos for rotating border
  const techLogos = [
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '📦' },
    { name: 'Java', icon: '☕' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'Linux', icon: '🐧' }
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
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKE1vaGl0IFNoYXJtYSBSZXN1bWUpCi9Qcm9kdWNlciAoUERGIEdlbmVyYXRvcikKL0NyZWF0aW9uRGF0ZSAoRDoyMDI0MDEwMTAwMDAwMFopCj4+CmVuZG9iagoxIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovQ291bnQgMQovS2lkcyBbIDIgMCBSIF0KPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAxIDAgUgovTWVkaWFCb3ggWyAwIDAgNjEyIDc5MiBdCi9SZXNvdXJjZXMgPDwKL0ZvbnQgPDwKL0YxIDMgMCBSCj4+Cj4+Ci9Db250ZW50cyA0IDAgUgo+PgplbmRvYmoKMyAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTEKL0Jhc2VGb250IC9IZWx2ZXRpY2EKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKL0YxIDEyIFRmCjEwMCA3MDAgVGQKKE1vaGl0IFNoYXJtYSBSZXN1bWUpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDUKMDAwMDAwMDAwMCA2NTUzNSBmCjAwMDAwMDAwMTUgMDAwMDAgbgowMDAwMDAwMDk5IDAwMDAwIG4KMDAwMDAwMDIzMyAwMDAwMCBuCjAwMDAwMDAzMDcgMDAwMDAgbgp0cmFpbGVyCjw8Ci9TaXplIDUKL1Jvb3QgPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDEgMCBSCj4+Cj4+CnN0YXJ0eHJlZgo0MDEKJSVFT0Y=';
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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image with Rotating Tech Logos */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Rotating tech logos border - brighter */}
            <div className="absolute -inset-12 animate-spin-slow">
              {techLogos.map((tech, index) => {
                const angle = (index * 360) / techLogos.length;
                const radius = 100;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <div
                    key={tech.name}
                    className="absolute w-10 h-10 flex items-center justify-center border-2 border-white/90 rounded-full hover:scale-125 transition-transform duration-300 shadow-xl"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      left: '50%',
                      top: '50%',
                      marginLeft: '-20px',
                      marginTop: '-20px',
                      filter: 'brightness(3) drop-shadow(0 0 12px #06b6d4) drop-shadow(0 0 12px #fff)'
                    }}
                    title={tech.name}
                  >
                    <span className="text-2xl filter drop-shadow-lg" style={{filter: 'brightness(3) drop-shadow(0 0 12px #06b6d4) drop-shadow(0 0 12px #fff)'}}>{tech.icon}</span>
                  </div>
                );
              })}
            </div>
            {/* Main profile image - no blinking */}
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-300">
                <img 
                  src="/WhatsApp Image 2025-07-07 at 17.25.11_f266c35c.jpg" 
                  alt="Mohit Sharma" 
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            {/* Glow effect - no blinking */}
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30"></div>
          </div>
        </div>

        {/* Name with glitch effect */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-text-glow">
          Hello, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse glitch-text">
            Mohit Sharma
          </span>
        </h1>

        {/* Typing Animation with enhanced effects */}
        <div className="h-16 flex items-center justify-center mb-8">
          <h2 className="text-xl md:text-2xl text-cyan-200 font-medium typing-container">
            🚀 <span className="typing-text">{typedText}</span>
            <span className="animate-pulse text-cyan-400">|</span>
          </h2>
        </div>

        {/* Goal with floating animation */}
        <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto animate-float">
          🎯 Goal: To work at top-tier tech companies like FAANG
        </p>

        {/* Location & College with stagger animation */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-white/80">
          <div className="flex items-center gap-2 animate-slide-in-left">
            <MapPin className="w-5 h-5" />
            <span>B.Tech Student, SKIT</span>
          </div>
          <div className="flex items-center gap-2 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            <Mail className="w-5 h-5" />
            <span>msharmampr@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 animate-slide-in-right" style={{animationDelay: '0.4s'}}>
            <Phone className="w-5 h-5" />
            <span>9694591869</span>
          </div>
        </div>

        {/* Resume Download Button with enhanced effects and flip */}
        <div className="mb-8">
          <button 
            onClick={handleResumeDownload}
            className="group relative inline-flex items-center gap-6 px-40 py-8 text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 flip-btn"
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
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-full group-hover:animate-pulse"></div>
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
          </button>
        </div>

        {/* Social Links with enhanced hover effects */}
        <div className="flex justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com/mohitsharma", label: "GitHub", color: "hover:bg-gray-600" },
            { icon: Linkedin, href: "https://linkedin.com/in/mohitsharma", label: "LinkedIn", color: "hover:bg-blue-600" },
            { icon: Code, href: "https://leetcode.com/mohitsharma", label: "LeetCode", color: "hover:bg-yellow-600" }
          ].map(({ icon: Icon, href, label, color }, index) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 animate-slide-in-up`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <Icon className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label}
              </div>
              
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
            </a>
          ))}
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