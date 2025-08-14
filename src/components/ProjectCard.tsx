import type { Project } from './Projects';
import { Github, Award } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  theme: 'light' | 'dark';
  onOpenModal: (project: Project) => void;
  index: number;
  isVisible: boolean;
}

export default function ProjectCard({ project, theme, onOpenModal, index, isVisible }: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
        theme === 'dark' ? 'bg-gray-800/90 border border-gray-700' : 'bg-white/90 border border-gray-200'
      } ${isVisible ? 'animate-card-reveal' : 'opacity-0'} backdrop-blur-sm flex flex-col h-full`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden h-48 flex-shrink-0 group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.category === 'Minor Project' ? (
          <div 
            className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="text-center p-4 space-y-4">
              <div className="text-white text-lg font-medium">Quick actions</div>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => onOpenModal(project)}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-white/90 text-gray-900 hover:bg-white transition-colors"
                >
                  View Details
                </button>
                {project.linkedin && (
                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                  >
                    View Post
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div 
            className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={() => onOpenModal(project)}
          >
            <div className="text-center p-4">
              <div className="text-white text-lg font-medium mb-2">Click to view details</div>
              <div className="w-12 h-1 bg-white mx-auto mb-4"></div>
              <div className="flex gap-2 justify-center">
                {project.tech.slice(0, 3).map((tech: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            project.category === 'Industry Level' 
              ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
              : project.category === 'Major Project'
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
              : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
          }`}>
            {project.category}
          </span>
        </div>
        {project.award && (
          <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">
              <Award className="w-3 h-3" />
              {project.award}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.award && (
            <div className="flex items-center gap-1 text-amber-500">
              <Award className="w-4 h-4" />
              <span className="text-xs font-medium">{project.award}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech: string, i: number) => (
            <span 
              key={i} 
              className={`px-2 py-1 text-xs rounded-full ${
                theme === 'dark' 
                  ? 'bg-gray-700/50 text-gray-300' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>
        
        <div className="mt-auto">
          {project.category === 'Minor Project' ? (
            project.linkedin && (
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'bg-blue-600 text-white hover:bg-blue-500' 
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                <span>View Post</span>
              </a>
            )
          ) : (
            project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}
