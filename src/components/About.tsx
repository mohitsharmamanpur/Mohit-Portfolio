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

  const projects = [
    {
      icon: Award,
      label: "Web Scraping using Python",
      value: "Automated data extraction from websites using Python scripts.",
      color: "from-cyan-500 to-blue-500",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py"
    },
    {
      icon: Award,
      label: "Send an Email with Python",
      value: "Use Python to successfully send an email programmatically.",
      color: "from-purple-500 to-pink-500",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py"
    },
    {
      icon: Award,
      label: "Send an SMS with Python",
      value: "Send a text message using Python and an SMS gateway/API.",
      color: "from-green-400 to-blue-400",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py"
    },
    {
      icon: Award,
      label: "Make a Phone Call with Python",
      value: "Use Python to make a phone call using a text-to-voice API.",
      color: "from-yellow-400 to-orange-400",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py"
    },
    {
      icon: Award,
      label: "Post on Instagram with Python",
      value: "Post a message and images on Instagram using Python automation.",
      color: "from-pink-400 to-red-400",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py"
    },
    {
      icon: Award,
      label: "Menu-Driven Python Project",
      value: "A menu-driven Python program that combines all automation tasks into a single interface.",
      color: "from-gray-700 to-gray-900",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py"
    },
    {
      icon: Award,
      label: "Take Photo Using JavaScript",
      value: "Create a JavaScript function to access the webcam and capture a photo.",
      color: "from-cyan-500 to-blue-500",
      repoLink: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html"
    },
    {
      icon: Award,
      label: "Send Email Using JavaScript or API",
      value: "Use EmailJS or a backend API to send email through a JavaScript-based interface.",
      color: "from-purple-500 to-pink-500",
      repoLink: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html"
    },
    {
      icon: Award,
      label: "Send WhatsApp Message Using JavaScript",
      value: "Use WhatsApp web URL scheme or API to initiate a WhatsApp message from JS.",
      color: "from-green-400 to-blue-400",
      repoLink: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html"
    },
    {
      icon: Award,
      label: "Send WhatsApp Message Using Python",
      value: "Automate WhatsApp messaging using Python with web automation or API integration.",
      color: "from-green-500 to-teal-500",
      repoLink: "https://github.com/mohitsharmamanpur/Python-Menu-Tasks-/blob/main/Menu.py"
    },
    {
      icon: Award,
      label: "Track Most Viewed Product using Javascript",
      value: "Create a system to track and analyze the most viewed products on an e-commerce platform.",
      color: "from-indigo-500 to-purple-600",
      repoLink: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html"
    },
    {
      icon: Award,
      label: "Get Current IP and Location using Javascript",
      value: "Build a script to retrieve current IP address and geolocation information.",
      color: "from-blue-600 to-indigo-700",
      repoLink: "https://github.com/mohitsharmamanpur/JavaScript-Menu-Tasks-/blob/main/Menu.html"
    }
  ];

  return (
    <section id="about" className={`py-10 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} ${isVisible ? 'animate-title-slide-up' : 'opacity-0 translate-y-10'}`}>
            About <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                About Mohit Sharma
              </h3>
              <div className="space-y-2">
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm an enthusiastic and detail-oriented engineering student pursuing my B.Tech at <span className="font-semibold text-cyan-500">Swami Keshwanand Institute of Technology and Gramothan (SKIT)</span>.
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  I specialize in <span className="font-semibold text-purple-500">Python, Machine Learning, DevOps, and Full-Stack development</span>. I'm involved in projects, internships, and hackathons.
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm a fast learner and team player aiming to work in <span className="font-semibold text-pink-500">top product-based companies like FAANG</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-64 flex flex-col gap-4">
            {[
              { icon: GraduationCap, label: "Branch", value: "Information Technology", color: "from-blue-500 to-cyan-500" },
              { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan", color: "from-green-500 to-emerald-500" },
              { icon: Phone, label: "Phone", value: "9694591869", color: "from-orange-500 to-red-500" }
            ].map(({ icon: Icon, label, value, color }, index) => (
              <div key={label} className={`flex items-center gap-3 p-4 rounded-xl border ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-200'}`}>
                <div className={`p-2 bg-gradient-to-r ${color} rounded-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{label}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} break-all`}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map(({ icon: Icon, label, value, color, repoLink }, index) => (
            <div key={label} className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-md`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 bg-gradient-to-r ${color} rounded-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{label}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} break-all`}>{value}</p>
                  <button
                    onClick={() => window.open(repoLink, '_blank', 'noopener,noreferrer')}
                    className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-xs font-semibold shadow hover:scale-105 transition-transform"
                  >
                    View on GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
