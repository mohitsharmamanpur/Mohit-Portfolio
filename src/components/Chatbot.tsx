import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bot, User, Code, Award, Briefcase, Mail, Home, User as UserIcon } from 'lucide-react';

interface ChatbotProps {
  theme: 'light' | 'dark';
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface PortfolioInfo {
  section: string;
  keywords: string[];
  description: string;
  icon: any;
}

export default function Chatbot({ theme }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const portfolioInfo: PortfolioInfo[] = [
    {
      section: 'Home',
      keywords: ['home', 'hero', 'welcome', 'introduction', 'start'],
      description: 'Welcome to my portfolio! I\'m Mohit Sharma, a passionate engineering student specializing in Python, Machine Learning, DevOps, and Full-Stack development.',
      icon: Home
    },
    {
      section: 'About',
      keywords: ['about', 'who', 'background', 'education', 'student', 'skit'],
      description: 'I\'m pursuing B.Tech in Information Technology at SKIT, Jaipur. I\'m a fast learner and team player aiming to work in top product-based companies like FAANG.',
      icon: UserIcon
    },
    {
      section: 'Skills',
      keywords: ['skills', 'technologies', 'programming', 'languages', 'tools', 'expertise'],
      description: 'My skills include Python, JavaScript, React, Node.js, Machine Learning, DevOps, Docker, Kubernetes, and various other technologies. I\'m constantly learning and improving.',
      icon: Code
    },
    {
      section: 'Mini Projects',
      keywords: ['mini projects', 'automation', 'python tasks', 'javascript tasks', 'small projects'],
      description: 'I have 12 mini projects including web scraping, email automation, SMS sending, Instagram posting, WhatsApp messaging, and more using Python and JavaScript.',
      icon: Code
    },
    {
      section: 'Major Projects',
      keywords: ['major projects', 'big projects', 'portfolio projects', 'web development', 'ml projects'],
      description: 'My major projects include BGMI Info Site, Alumni Association Platform, IPC Section ML System, CI/CD Pipeline, Personal Portfolio, and Weather Dashboard.',
      icon: Code
    },
    {
      section: 'Achievements',
      keywords: ['achievements', 'awards', 'certificates', 'hackathons', 'competitions'],
      description: 'I\'ve participated in various hackathons, won competitions, and earned certificates in different technologies and domains.',
      icon: Award
    },
    {
      section: 'Experience',
      keywords: ['experience', 'internships', 'work', 'jobs', 'professional'],
      description: 'I have experience in internships and projects, working with various technologies and contributing to real-world applications.',
      icon: Briefcase
    },
    {
      section: 'Contact',
      keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'social'],
      description: 'You can reach me at msharmampr@gmail.com or call me at 9694591869. I\'m also active on GitHub and other social platforms.',
      icon: Mail
    }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setTimeout(() => {
        addBotMessage("Hi! I'm your portfolio assistant. I can help you find information about Mohit's portfolio. What would you like to know?");
      }, 500);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const findRelevantInfo = (userInput: string): PortfolioInfo | null => {
    const input = userInput.toLowerCase();
    
    for (const info of portfolioInfo) {
      if (info.keywords.some(keyword => input.includes(keyword))) {
        return info;
      }
    }
    
    return null;
  };

  const generateBotResponse = async (userInput: string) => {
    try {
      setIsTyping(true);
      
      // Call the backend API
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from API');
      }

      const data = await response.json();
      
      setIsTyping(false);
      return data.response;
      
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setIsTyping(false);
      
      // Fallback to original logic if API fails
      const relevantInfo = findRelevantInfo(userInput);
      
      if (relevantInfo) {
        return `${relevantInfo.description}\n\nWould you like me to take you to the ${relevantInfo.section} section?`;
      }
      
      return "I'm sorry, I'm having trouble connecting to my AI brain right now. But I can still help you navigate Mohit's portfolio! Try asking about his skills, projects, or achievements.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');

    // Get response from Gemini API
    try {
      const response = await generateBotResponse(userMessage);
      addBotMessage(response);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      addBotMessage("I'm sorry, I encountered an error. Please try again.");
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Chatbot Toggle Button - Enhanced Visibility */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 left-8 z-50 p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-125 transform ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white hover:from-purple-400 hover:via-pink-400 hover:to-purple-500'
            : 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white hover:from-purple-400 hover:via-pink-400 hover:to-purple-500'
        } ${isOpen ? 'animate-spin' : 'animate-pulse'} 
        ring-4 ring-purple-300/50 hover:ring-purple-400/70 
        shadow-purple-500/50 hover:shadow-purple-600/70 hover:shadow-2xl
        backdrop-blur-sm border-2 border-white/20`}
        style={{
          boxShadow: '0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)',
          filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.8))'
        }}
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
        
        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 animate-ping"></div>
        
        {/* Notification dot when closed */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-bounce border-2 border-white">
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
          </div>
        )}
      </button>

      {/* Chatbot Modal - Centered */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className={`relative w-[480px] h-[600px] max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl border ${
            theme === 'dark' ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'
          } backdrop-blur-md animate-scale-in ring-1 ring-purple-500/20`}
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(168, 85, 247, 0.1)',
            animation: 'modalSlideIn 0.3s ease-out'
          }}>
            
            {/* Header */}
            <div className={`flex items-center justify-between p-4 border-b ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Portfolio Assistant
                  </h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Ask me anything about the portfolio
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-full transition-colors ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto h-[480px]">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}>
                      <div className={`p-2 rounded-full ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                          : 'bg-gray-600'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className={`p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : theme === 'dark'
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-purple-100' : 'text-gray-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2">
                      <div className="p-2 rounded-full bg-gray-600">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className={`p-3 rounded-2xl ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                      }`}>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={`p-4 border-t ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about the portfolio..."
                  className={`flex-1 px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    inputValue.trim()
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-3 flex flex-wrap gap-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      const sectionId = section.toLowerCase().replace(' ', '-');
                      scrollToSection(sectionId);
                    }}
                    className={`px-2 py-1 text-xs rounded-full transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      

    </>
  );
}