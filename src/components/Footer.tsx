import React from 'react';
import { Heart, Github, Linkedin, Code, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mohitsharma",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mohitsharma",
      label: "LinkedIn"
    },
    {
      icon: Code,
      href: "https://leetcode.com/mohitsharma",
      label: "LeetCode"
    }
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Mohit Sharma
              </span>
            </h3>
            <p className={`text-base mb-6 max-w-md ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Aspiring Software Developer passionate about Full-Stack Development, DevOps, and Machine Learning. 
              Always eager to learn new technologies and solve complex problems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`text-sm transition-colors hover:text-cyan-500 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className={`flex items-center gap-3 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <Mail className="w-4 h-4 text-cyan-500" />
                <a href="mailto:msharmampr@gmail.com" className="hover:text-cyan-500 transition-colors">
                  msharmampr@gmail.com
                </a>
              </div>
              <div className={`flex items-center gap-3 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <Phone className="w-4 h-4 text-cyan-500" />
                <a href="tel:9694591869" className="hover:text-cyan-500 transition-colors">
                  9694591869
                </a>
              </div>
              <div className={`flex items-center gap-3 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>Jaipur, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`my-8 h-px ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} Mohit Sharma. All rights reserved.
          </p>
          <p className={`text-sm flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Made with <Heart className="w-4 h-4 text-red-500" /> and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;