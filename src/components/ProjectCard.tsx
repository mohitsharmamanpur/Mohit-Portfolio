import type { Project } from './Projects';
import { Github, Award, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  theme: 'light' | 'dark';
  onOpenModal: (project: Project) => void;
  index: number;
  isVisible: boolean;
}

export default function ProjectCard({ project, theme, onOpenModal, index, isVisible }: ProjectCardProps) {
  const isMinorProject = project.category === 'Minor Project';
  
  return (
    <div
      className={`group relative overflow-hidden rounded-xl shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
        theme === 'dark' ? 'bg-gray-800/90 border border-gray-700' : 'bg-white/90 border border-gray-200'
      } ${isVisible ? 'animate-card-reveal' : 'opacity-0'} backdrop-blur-sm flex flex-col h-full`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`relative overflow-hidden ${isMinorProject ? 'h-40' : 'h-48'} w-full group`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-xl"
        />
        <div 
          className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={() => onOpenModal(project)}
        >
          <div className="text-center p-4">
            <div className="text-white text-lg font-medium">View Details</div>
            <div className="w-12 h-1 bg-white mx-auto my-2"></div>
            <div className="flex gap-2 justify-center flex-wrap">
              {project.tech.slice(0, 3).map((tech: string, i: number) => (
                <span key={i} className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        {project.category !== 'Minor Project' && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.category === 'Industry Level' 
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
            }`}>
              {project.category}
            </span>
          </div>
        )}
        {project.award && (
          <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">
              <Award className="w-3 h-3" />
              {project.award}
            </span>
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-lg font-semibold line-clamp-1 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {project.title}
          </h3>
          {project.award && !isMinorProject && (
            <div className="flex items-center gap-1 text-amber-500">
              <Award className="w-4 h-4" />
              <span className="text-xs font-medium">{project.award}</span>
            </div>
          )}
        </div>
        <div className="flex-1 mt-2">
          <p className={`text-sm line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
            {project.description || 'No description available. Click View Details to learn more.'}
          </p>
        
        <div className="mt-3 mb-3 flex flex-wrap gap-1.5 items-center">
          {project.tech.slice(0, 3).map((tech: string, i: number) => (
            <span 
              key={i} 
              className={`px-2 py-0.5 text-[10px] rounded ${
                theme === 'dark' ? 'bg-gray-700/80 text-gray-100' : 'bg-gray-100 text-gray-700'
              } whitespace-nowrap`}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[9px] text-gray-500 self-center">+{project.tech.length - 3}</span>
          )}
        </div>
        
        <div className="mt-auto">
          <div className="flex gap-2 mt-2">
            {project.linkedin && (
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-lg transition-colors text-xs min-w-[100px] ${
                  theme === 'dark' 
                    ? 'bg-blue-600 text-white hover:bg-blue-500' 
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-3 h-3" />
                <span>View Post</span>
              </a>
            )}
            {project.github && project.category !== 'Minor Project' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-lg transition-colors text-xs min-w-[100px] ${
                  theme === 'dark' 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-3 h-3" />
                <span>View Code</span>
              </a>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
