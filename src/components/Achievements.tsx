import React, { useState, useEffect } from 'react';
import { Trophy, Award, Target, Users, BookOpen, Cloud, ExternalLink, Star } from 'lucide-react';

interface BaseAchievementItem {
  icon: any;
  description: string;
  year: string;
  category: string;
  verifyLink: string;
  isBigAchievement?: boolean;
  isOracle?: boolean;
  links?: Array<{ label: string; url: string }>;
}

interface ProjectAchievement extends BaseAchievementItem {
  title: string;
  role?: never;
  organization?: never;
  duration?: never;
  link?: never;
}

interface ExtracurricularAchievement extends BaseAchievementItem {
  role: string;
  organization: string;
  duration: string;
  link: string;
  title?: never;
  isBigAchievement?: never;
  isOracle?: never;
}

type AchievementItem = ProjectAchievement | ExtracurricularAchievement;

interface AchievementsProps {
  theme: 'light' | 'dark';
}

const Achievements: React.FC<AchievementsProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('achievements');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Data
  const certifications: AchievementItem[] = [
    // Oracle certifications first
    {
      icon: Award,
      title: "Oracle Cloud Infrastructure 2025 Multicloud Architect Professional",
      description: "Advanced cloud architecture, multicloud strategies, OCI services, hybrid cloud solutions, and enterprise-grade cloud infrastructure design.",
      year: "2025",
      category: "Certification",
      verifyLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9033F19471A9BCBD1F11D8E4B4F99F18DC8B78AD0002F111CCE677E1DCA1EEF7",
      isOracle: true
    },
    {
      icon: Award,
      title: "Oracle Cloud Infrastructure 2025 DevOps Professional",
      description: "CI/CD pipelines, microservices, containerization (OKE, OCIR), DevSecOps, IaC (Terraform), observability, cloud-native deployments on OCI.",
      year: "Aug 2024",
      category: "Certification",
      verifyLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BEC4F0F8CE8A5B257645EF1AAB3413481E87ACE15663131AB698E752D1A51178",
      isOracle: true
    },
    {
      icon: Award,
      title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
      description: "Large Language Models (LLMs), prompt engineering, fine-tuning (T-Few), RAG-based chatbot development, LangChain, vector databases, semantic search, AI app deployment on OCI.",
      year: "Aug 2024",
      category: "Certification",
      verifyLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=467974165D603F1850172AB735DF6A3B43D00A0B3D480471EEED08CEC58D14AB",
      isOracle: true
    },
    // Other certifications
    {
      icon: Award,
      title: "NPTEL Certifications",
      description: "Data Structures & Algorithms (C++), Database Management Systems (DBMS)",
      year: "2023",
      category: "Certification",
      verifyLink: "#"
    },
    {
      icon: Cloud,
      title: "AWS Cloud with AI Workshop",
      description: "AWS, Computer Vision, Python, AI - Comprehensive cloud and AI training",
      year: "2023",
      category: "Workshop",
      verifyLink: "#"
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "Founder & CEO — Neuroaura",
      description: "Emotional Fingerprint Generator - Start-up focused on AI-powered emotional intelligence",
      year: "2024",
      category: "Leadership",
      verifyLink: "https://neuroauraindia.netlify.app/",
      links: [
        { label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/mohit-sharma-236829318_72hoursoflegacy-linuxworldinternship-startuppitch-activity-7356279909591187457-wAo4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A' },
        { label: 'Pitch Video', url: 'https://www.linkedin.com/posts/mohit-sharma-236829318_jazbaa2025-startuppitch-entrepreneurship-activity-7357669477863297024-dejt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCRgAoBhv9dRdNT1FnsRUckazhI7I0NH4A' }
      ],
      isBigAchievement: true
    },
    {
      icon: BookOpen,
      title: "Published Research Paper",
      description: "AI emotion detection risks in the International Journal of Recent Research and Review(IJRRR)",
      year: "2024",
      category: "Research",
      verifyLink: "https://www.ijrrr.com/specialissues2-2025/ijrrr-Special-Issue-2-2025-paper46.pdf",
      isBigAchievement: true
    },
    {
      icon: Trophy,
      title: "Winner – Hackverse Hackathon",
      description: "Gurugram - Developed innovative ML solution for IPC section suggestion system",
      year: "2024",
      category: "Competition",
      verifyLink: "#"
    }
  ];

  const extracurricular: ExtracurricularAchievement[] = [
    {
      icon: Target,
      role: "Participant",
      organization: "Hackcrux, LNMIIT Jaipur",
      description: "Competed in prestigious hackathon with innovative solutions",
      year: "2024",
      category: "Competition",
      verifyLink: "#",
      duration: "2024",
      link: "#"
    },
    {
      icon: Users,
      role: "Event Coordinator",
      organization: "BGMI Tournament, Pravah Fest",
      description: "Successfully organized and managed a large-scale gaming tournament",
      year: "2023",
      category: "Leadership",
      verifyLink: "#",
      duration: "2023",
      link: "#"
    },
    {
      icon: Users,
      role: "Volunteer",
      organization: "ICI Fest, SKIT Jaipur",
      description: "Contributed to the organization and management of a major technical festival",
      year: "2023",
      category: "Volunteering",
      verifyLink: "#",
      duration: "2023",
      link: "#"
    }
  ];

  return (
    <section id="achievements" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Achievements & Certifications
          </h2>
          <div className={`w-24 h-1 mx-auto ${theme === 'dark' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`}></div>
        </div>

        <div className="space-y-12">
          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Certifications
              </h3>
            </div>
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
              <div className="flex gap-6">
                {certifications.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex-shrink-0 w-80 rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl relative ${
                      theme === 'dark' 
                        ? 'bg-gray-800/60 border-gray-700 hover:border-gray-600' 
                        : 'bg-white/80 border-gray-200 hover:border-gray-300'
                    } ${item.isOracle ? 'ring-2 ring-orange-500/50 shadow-lg shadow-orange-500/20' : ''}`}
                  >
                    {item.isBigAchievement && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${
                        item.isOracle 
                          ? 'bg-gradient-to-br from-orange-500 to-red-500' 
                          : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                      } shadow-md`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.isOracle 
                          ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' 
                          : theme === 'dark' 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                    <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                      {item.isOracle && (
                        <span className="ml-2 text-orange-500">★</span>
                      )}
                    </h4>
                    <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.year}
                      </span>
                      <a 
                        href={item.verifyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                      >
                        Verify <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3 mt-4">
                      {(() => {
                        const hasPrimaryLink = item.verifyLink && item.verifyLink !== '#';
                        return (
                          <button
                            onClick={() => hasPrimaryLink && window.open(item.verifyLink, '_blank')}
                            className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                              theme === 'dark'
                                ? 'text-purple-300 hover:text-purple-200'
                                : 'text-purple-600 hover:text-purple-700'
                            } ${hasPrimaryLink ? '' : 'opacity-60 cursor-not-allowed'}`}
                          >
                            <span>{item.category === 'Certification' ? 'View Credential' : item.category === 'Research' ? 'Read Paper' : 'View'}</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        );
                      })()}
                      {Array.isArray(item.links) && item.links.length > 0 && (
                        <div className="flex items-center gap-2">
                          {item.links.map((lnk, li) => (
                            <button
                              key={li}
                              onClick={() => lnk.url && lnk.url !== '#' && window.open(lnk.url, '_blank')}
                              className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
                                theme === 'dark'
                                  ? 'border-purple-500/40 text-purple-300 hover:bg-purple-500/10'
                                  : 'border-purple-300 text-purple-700 hover:bg-purple-50'
                              } ${lnk.url && lnk.url !== '#' ? '' : 'opacity-60 cursor-not-allowed'}`}
                            >
                              {lnk.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Key Achievements
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl relative ${
                    theme === 'dark' 
                      ? 'bg-gray-800/60 border-gray-700 hover:border-gray-600' 
                      : 'bg-white/80 border-gray-200 hover:border-gray-300'
                  } ${item.isBigAchievement ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20' : ''}`}
                >
                  {item.isBigAchievement && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {item.year}
                    </span>
                    <a 
                      href={item.verifyLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  
                  {Array.isArray(item.links) && item.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.links.map((lnk, li) => (
                        <a
                          key={li}
                          href={lnk.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
                            theme === 'dark'
                              ? 'border-purple-500/40 text-purple-300 hover:bg-purple-500/10'
                              : 'border-purple-300 text-purple-700 hover:bg-purple-50'
                          }`}
                        >
                          {lnk.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Extracurricular Activities
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extracurricular.map((item, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl ${
                    theme === 'dark' 
                      ? 'bg-gray-800/60 border-gray-700 hover:border-gray-600' 
                      : 'bg-white/80 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-md">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {item.role}
                    </span>
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.organization}
                  </h4>
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {item.duration}
                    </span>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                      >
                        Learn More <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
