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
      {/* Animated Background with Floating Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 opacity-90">
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className={`w-${4 + Math.floor(Math.random() * 8)} h-${4 + Math.floor(Math.random() * 8)} bg-white rounded-full`}></div>
            </div>
          ))}
        </div>
        
        {/* Wave animation */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white" className="animate-pulse"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="white" className="animate-pulse" style={{animationDelay: '1s'}}></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white" className="animate-pulse" style={{animationDelay: '2s'}}></path>
          </svg>
        </div>
      </div>
      
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-bg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image with Rotating Tech Logos */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Rotating tech logos border */}
            <div className="absolute -inset-12 animate-spin-slow">
              {techLogos.map((tech, index) => {
                const angle = (index * 360) / techLogos.length;
                const radius = 100;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={tech.name}
                    className="absolute w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 hover:scale-125 transition-transform duration-300 shadow-lg"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      left: '50%',
                      top: '50%',
                      marginLeft: '-24px',
                      marginTop: '-24px'
                    }}
                    title={tech.name}
                  >
                    <span className="text-2xl filter drop-shadow-lg">{tech.icon}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Main profile image */}
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-300">
                <img 
                  src="/WhatsApp Image 2025-07-07 at 17.25.11_f266c35c.jpg" 
                  alt="Mohit Sharma" 
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Pulsing glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
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

        {/* Resume Download Button with enhanced effects */}
        <div className="mb-8">
          <button 
            onClick={handleResumeDownload}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 animate-bounce-gentle"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Download className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Download Resume</span>
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