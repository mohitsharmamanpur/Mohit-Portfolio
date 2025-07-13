import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, MessageSquare } from 'lucide-react';

interface ContactProps {
  theme: 'light' | 'dark';
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "msharmampr@gmail.com",
      href: "https://mail.google.com/mail/u/0/#inbox",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9694591869",
      href: "tel:9694591869",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jaipur, India",
      href: "https://maps.google.com/?q=Jaipur,India",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mohitsharmamanpur",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/feed/?trk=hb_signin",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/problemset/",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "919694591869";
    const message = "Hello Mohit! I found your portfolio and would like to connect.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Get In <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm border ${
                        theme === 'dark' 
                          ? 'bg-gray-900/30 border-gray-700 hover:bg-gray-900/50' 
                          : 'bg-white/50 border-gray-200 hover:bg-white/80'
                      } transition-all duration-300 group hover:shadow-lg`}
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {info.label}
                        </p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl backdrop-blur-sm border ${
                        theme === 'dark' 
                          ? 'bg-gray-900/30 border-gray-700 hover:bg-gray-900/50' 
                          : 'bg-white/50 border-gray-200 hover:bg-white/80'
                      } transition-all duration-300 group hover:shadow-lg hover:scale-105`}
                    >
                      <Icon className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} group-hover:text-cyan-500 transition-colors`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp Button */}
            <div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="w-6 h-6" />
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl backdrop-blur-sm border shadow-xl ${
            theme === 'dark' 
              ? 'bg-gray-900/50 border-gray-700' 
              : 'bg-white/70 border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Send Me a Message
            </h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-600 text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitting ? 'animate-pulse' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;