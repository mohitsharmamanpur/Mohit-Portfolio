import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import type { Project } from './Projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  theme: 'light' | 'dark';
}

export default function ProjectModal({ project, onClose, theme }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="mt-2">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                      project.category === 'Industry Level' 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        : project.category === 'Major Project'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {project.description}
                  </p>
                </div>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features & Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-500 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.category === 'Minor Project' ? (
                    project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Post
                      </a>
                    )
                  ) : (
                    <>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
