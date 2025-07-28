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
    "Machine Learning Learner",
    "Cloud Aspirant"
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg flex items-center gap-4 whitespace-nowrap">
            Hello, I'm <span className="relative inline-block ml-3">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold animate-blink shimmer-text" style={{animation: 'blink 1.2s infinite alternate'}}>
                Mohit Sharma
              </span>
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-cyan-200 font-medium mb-4">Aspiring Software Developer</h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl animate-float">
            DevOps & Cloud Enthusiast | Python Learner | Machine Learning
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <button 
              onClick={handleResumeDownload}
              className="flip-btn group relative inline-flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50"
              style={{ minWidth: '220px', minHeight: '56px' }}
            >
              <span className="flip-btn-inner w-full h-full flex items-center justify-center">
                <span className="flip-btn-front flex items-center gap-3 w-full h-full justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <Download className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                </span>
                <span className="flip-btn-back flex items-center gap-3 w-full h-full justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: 'rotateY(180deg)' }}>
                  <span className="relative z-10">Get PDF</span>
                  <Download className="w-5 h-5 relative z-10" />
                </span>
              </span>
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
        <div className="flex-1 flex justify-center items-start relative z-10 mt-[-60px]">
          <div className="relative flex flex-col items-center">
            {/* Main profile image - larger size, no rotating icons */}
            <div className="w-96 h-96 rounded-full bg-white p-1 relative z-10 shadow-2xl flex items-center justify-center mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/WhatsApp Image 2025-07-29 at 02.15.40_38a321fc.jpg" 
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

<style>
{`
@keyframes blink {
  0% { opacity: 1; filter: drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #a78bfa); }
  50% { opacity: 0.5; filter: drop-shadow(0 0 16px #f472b6) drop-shadow(0 0 32px #06b6d4); }
  100% { opacity: 1; filter: drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #a78bfa); }
}
.shimmer-text {
  background: linear-gradient(90deg, #06b6d4, #a78bfa, #f472b6, #06b6d4);
  background-size: 200% 200%;
  animation: shimmer 2.5s linear infinite, blink 1.2s infinite alternate;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@keyframes shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.flip-btn {
  perspective: 800px;
}
.flip-btn-inner {
  display: block;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.group:hover .flip-btn-inner {
  transform: rotateY(180deg);
}
.flip-btn-front, .flip-btn-back {
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
}
.flip-btn-back {
  transform: rotateY(180deg);
}
`}
</style>