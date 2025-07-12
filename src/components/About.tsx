import React, { useState, useEffect } from 'react';
import { User, MapPin, Mail, Phone, GraduationCap, Award } from 'lucide-react';

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

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left: About Card */}
          <div className="flex-1">
            <div className={`p-6 rounded-2xl backdrop-blur-sm border glass-morphism ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} shadow-xl hover:shadow-2xl transition-all duration-500 group mb-6`}>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`}>
                About Mohit Sharma
              </h3>
              <div className="space-y-2">
                <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-cyan-600 transition-colors duration-300`}>
                  I'm an enthusiastic and detail-oriented engineering student pursuing my B.Tech at <span className="font-semibold text-cyan-500 hover:text-cyan-400 transition-colors">Swami Keshwanand Institute of Technology and Gramothan (SKIT)</span>.
                </p>
                <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-purple-600 transition-colors duration-300`}>
                  With a strong foundation in computer science, I specialize in <span className="font-semibold text-purple-500 hover:text-purple-400 transition-colors">Python, Machine Learning, DevOps, and Full-Stack development</span>. I have hands-on experience building real-world projects, participating in hackathons, and interning at a leading tech firm.
                </p>
                <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-pink-600 transition-colors duration-300`}>
                  I'm a quick learner, a great team player, and a problem-solver aiming to work in <span className="font-semibold text-pink-500 hover:text-pink-400 transition-colors">top product-based companies like FAANG</span>.
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-border"></div>
            </div>
          </div>
          {/* Right: Branch, Location, Phone vertical stack */}
          <div className="w-full md:w-64 flex flex-col gap-4 justify-start items-stretch">
            {[
              { icon: GraduationCap, label: "Branch", value: "Information Technology", color: "from-blue-500 to-cyan-500" },
              { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan", color: "from-green-500 to-emerald-500" },
              { icon: Phone, label: "Phone", value: "9694591869", color: "from-orange-500 to-red-500" }
            ].map(({ icon: Icon, label, value, color }, index) => (
              <div key={label} className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm border info-card-3d ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-md group ${isVisible ? 'animate-card-reveal' : 'opacity-0'}`} style={{animationDelay: `${index * 0.08 + 0.5}s`}}>
                <div className={`p-2 bg-gradient-to-r ${color} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${color} group-hover:bg-clip-text transition-all duration-300`}>{label}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} group-hover:text-gray-500 transition-colors duration-300 break-all`}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Project Cards Grid Below */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: Award, label: "Web Scraping using Python", value: "Automated data extraction from websites using Python scripts.", github: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py", color: "from-cyan-500 to-blue-500" },
            { icon: Award, label: "Send an Email with Python", value: "Use Python to successfully send an email programmatically.", github: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py", color: "from-purple-500 to-pink-500" },
            { icon: Award, label: "Send an SMS with Python", value: "Send a text message using Python and an SMS gateway/API.", github: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py", color: "from-green-400 to-blue-400" },
            { icon: Award, label: "Make a Phone Call with Python", value: "Use Python to make a phone call using a text-to-voice API.", github: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py", color: "from-yellow-400 to-orange-400" },
            { icon: Award, label: "Post on Instagram with Python", value: "Post a message and images on Instagram using Python automation.", github: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py", color: "from-pink-400 to-red-400" },
            { icon: Award, label: "Menu-Driven Python Project", value: "A menu-driven Python program that combines all automation tasks into a single interface.", github: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py", color: "from-gray-700 to-gray-900" },
            { icon: Award, label: "Take Photo Using JavaScript", value: "Create a JavaScript function to access the webcam and capture a photo.", github: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html", color: "from-cyan-500 to-blue-500" },
            { icon: Award, label: "Send Email Using JavaScript or API", value: "Use EmailJS or a backend API to send email through a JavaScript-based interface.", github: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html", color: "from-purple-500 to-pink-500" },
            { icon: Award, label: "Send WhatsApp Message Using JavaScript", value: "Use WhatsApp web URL scheme or API to initiate a WhatsApp message from JS.", github: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html", color: "from-green-400 to-blue-400" },
            { icon: Award, label: "Send WhatsApp Message Using Python", value: "Automate WhatsApp messaging using Python with web automation or API integration.", github: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py", color: "from-green-500 to-teal-500" },
            { icon: Award, label: "Track Most Viewed Product using Javascript", value: "Create a system to track and analyze the most viewed products on an e-commerce platform.", github: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html", color: "from-indigo-500 to-purple-600" },
            { icon: Award, label: "Get Current IP and Location using Javascript", value: "Build a Python script to retrieve current IP address and geolocation information.", github: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html", color: "from-blue-600 to-indigo-700" }
          ].map(({ icon: Icon, label, value, github, color }, index) => (
            <div 
              key={label} 
              className={`p-4 rounded-xl backdrop-blur-sm border info-card-3d ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-200'} hover:shadow-lg transition-all duration-500 group ${isVisible ? 'animate-card-reveal' : 'opacity-0'}`}
              style={{animationDelay: `${index * 0.05 + 0.5}s`}}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 bg-gradient-to-r ${color} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${color} group-hover:bg-clip-text transition-all duration-300`}>{label}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} group-hover:text-gray-500 transition-colors duration-300 break-all`}>{value}</p>
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-xs font-semibold shadow hover:scale-105 transition-transform">View on GitHub</a>
                  )}
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;