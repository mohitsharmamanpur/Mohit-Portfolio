import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bot, User, Search, Code, Award, Briefcase, Mail, Home, User as UserIcon } from 'lucide-react';

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

  const generateBotResponse = (userInput: string) => {
    const relevantInfo = findRelevantInfo(userInput);
    
    if (relevantInfo) {
      const Icon = relevantInfo.icon;
      return {
        text: relevantInfo.description,
        section: relevantInfo.section,
        icon: Icon
      };
    } else {
      return {
        text: "I'm not sure about that. You can ask me about:\n• Home/Introduction\n• About/Background\n• Skills/Technologies\n• Mini Projects\n• Major Projects\n• Achievements\n• Experience\n• Contact Information",
        section: null,
        icon: null
      };
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateBotResponse(userMessage);
      addBotMessage(response.text);
      setIsTyping(false);
    }, 1000);
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
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 left-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
        } ${isOpen ? 'animate-bounce' : 'animate-pulse'}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-start p-4 pointer-events-none">
          <div className={`relative w-96 h-[500px] rounded-2xl shadow-2xl border ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } pointer-events-auto animate-slide-in-up`}>
            
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
            <div className="flex-1 p-4 overflow-y-auto h-[380px]">
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