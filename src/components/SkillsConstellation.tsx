import React, { useMemo } from 'react';
import {
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Github,
  Layers,
  Terminal,
  Server,
  Settings,
  Box,
  Hexagon,
  GaugeCircle,
  Wrench,
  Zap,
  BookOpen,
} from 'lucide-react';

interface SkillsConstellationProps {
  theme: 'light' | 'dark';
}

// Icon registry mapping many skills to sensible icons
const iconRegistry = {
  Docker: Box,
  Kubernetes: Hexagon,
  Jenkins: Wrench,
  CI_CD: GaugeCircle,
  Linux: Terminal,
  Git: GitBranch,
  GitHub: Github,
  AWS: Cloud,
  Terraform: Layers,
  Ansible: Wrench,
  'Cloud Architecture': Server,
  Serverless: Server,
  Microservices: Layers,
  Python: BookOpen,
  C: BookOpen,
  'C++': BookOpen,
  'Shell Scripting': Terminal,
  'Google Gemini': Zap,
  'OpenAI GPT': Zap,
  LangChain: Layers,
  'AI Agents': Cpu,
  'Prompt Engineering': Zap,
  'RAG Systems': Database,
  TensorFlow: Cpu,
  PyTorch: Cpu,
  'Deep Learning': Cpu,
  NLP: Cpu,
  CNN: Cpu,
  Pandas: Database,
  NumPy: Database,
  'VS Code': Settings,
  Jupyter: Settings,
  Postman: Settings,
  Streamlit: Settings,
  Flask: Settings,
  React: Settings,
} as const;

type IconKey = keyof typeof iconRegistry;

type SkillItem = {
  name: IconKey | string;
  color: string; // e.g. 'from-cyan-400 to-purple-500'
  radius: number; // px
  startAngle: number; // deg
  speed: number; // seconds per orbit
};

// Source of truth: all skills from Skills.tsx categories
const ALL_SKILL_NAMES: (keyof typeof iconRegistry | string)[] = [
  // Programming Languages
  'Python', 'C', 'C++', 'Shell Scripting',
  // GenAI & Agentic AI
  'Google Gemini', 'OpenAI GPT', 'LangChain', 'AI Agents', 'Prompt Engineering', 'RAG Systems',
  // DevOps
  'Docker', 'Kubernetes', 'Jenkins', 'CI_CD', 'Linux', 'Git', 'GitHub',
  // Cloud
  'AWS', 'Terraform', 'Ansible', 'Cloud Architecture', 'Serverless', 'Microservices',
  // Machine Learning
  'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'CNN', 'Pandas', 'NumPy',
  // Tools & IDEs
  'VS Code', 'Jupyter', 'Postman', 'Streamlit', 'Flask', 'React',
];

const GRADIENTS = [
  'from-cyan-400 to-blue-500',
  'from-sky-400 to-cyan-500',
  'from-amber-400 to-orange-500',
  'from-emerald-400 to-teal-500',
  'from-rose-400 to-pink-500',
  'from-purple-400 to-fuchsia-500',
  'from-indigo-400 to-violet-500',
  'from-lime-400 to-green-500',
  'from-teal-400 to-emerald-500',
  'from-neutral-300 to-slate-400',
];

const ringConfig = [
  { radius: 120, count: 10, speed: 80 },
  { radius: 160, count: 12, speed: 110 },
  { radius: 200, count: 14, speed: 140 },
] as const;

function buildSkills(): SkillItem[] {
  const items: SkillItem[] = [];
  let index = 0;
  for (let ring = 0; ring < ringConfig.length; ring++) {
    const { radius, count, speed } = ringConfig[ring];
    for (let i = 0; i < count && index < ALL_SKILL_NAMES.length; i++, index++) {
      const name = ALL_SKILL_NAMES[index];
      items.push({
        name,
        color: GRADIENTS[index % GRADIENTS.length],
        radius,
        startAngle: (360 / count) * i + (ring * 8),
        speed: speed + (i % 2),
      });
    }
  }
  // If any remaining, place them on outer ring
  while (index < ALL_SKILL_NAMES.length) {
    const name = ALL_SKILL_NAMES[index];
    items.push({
      name,
      color: GRADIENTS[index % GRADIENTS.length],
      radius: ringConfig[ringConfig.length - 1].radius + 30,
      startAngle: (index * 22) % 360,
      speed: 150 + (index % 6) * 2,
    });
    index++;
  }
  return items as SkillItem[];
}

const SkillsConstellation: React.FC<SkillsConstellationProps> = ({ theme }) => {
  const skills = useMemo(() => buildSkills(), []);

  return (
    <div className="relative mx-auto w-full max-w-[640px] aspect-square select-none">
      {/* Center core */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full flex items-center justify-center shadow-2xl ring-1 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-purple-500/30 to-cyan-500/30 ring-cyan-400/30'
            : 'bg-gradient-to-br from-purple-300/40 to-cyan-300/40 ring-cyan-500/30'
        }`}
      >
        <div className="absolute inset-0 rounded-full blur-2xl opacity-60 bg-gradient-to-br from-cyan-400/50 to-purple-500/50 animate-pulse" />
        <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 ring-2 ring-white/10" />
      </div>

      {/* Subtle orbit guides */}
      {[120, 160, 200, 240].map((r, i) => (
        <div
          key={i}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
            theme === 'dark' ? 'border-white/5' : 'border-black/5'
          }`}
          style={{ width: r * 2, height: r * 2 }}
        />
      ))}

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, rgba(59,130,246,0.8), rgba(59,130,246,0))',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Orbiting skill badges */}
      {skills.map((s, idx) => {
        const Icon = iconRegistry[(s.name as IconKey) in iconRegistry ? (s.name as IconKey) : 'VS Code'];
        return (
          <button
            aria-label={String(s.name)}
            key={`${s.name}-${idx}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none group"
            style={{
              left: '50%',
              top: '50%',
              // @ts-ignore CSS variables for custom orbit
              ['--orbit-radius' as any]: `${s.radius}px`,
              ['--start-angle' as any]: `${s.startAngle}deg`,
              ['--orbit-duration' as any]: `${s.speed}s`,
            }}
          >
            <div className={`relative w-14 h-14 rounded-full flex items-center justify-center animate-orbit-individual z-10 group-hover:z-30`}>
              {/* Outer glow */}
              <div className={`absolute -inset-2 rounded-full bg-gradient-to-br ${s.color} opacity-30 blur-xl group-hover:opacity-60`} />
              {/* Badge */}
              <div
                className={`relative w-12 h-12 rounded-full flex items-center justify-center transform transition-transform duration-200 ease-out ${
                  theme === 'dark' ? 'bg-slate-900/80 text-white' : 'bg-white text-slate-800'
                } ring-1 ring-white/10 shadow-xl group-hover:scale-[2] group-hover:ring-2 group-hover:ring-cyan-400/40 group-hover:shadow-2xl`}
                style={{
                  boxShadow:
                    '0 0 18px rgba(59,130,246,0.25), 0 0 36px rgba(139,92,246,0.25)'
                }}
              >
                <div className={`absolute -inset-1 rounded-full bg-gradient-to-br ${s.color} opacity-40 blur-md`} />
                <Icon className="relative w-6 h-6 opacity-90" />
              </div>

              {/* Tooltip */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-16 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 pointer-events-none opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-110 group-focus:opacity-100 group-focus:translate-y-0 ${
                  theme === 'dark' ? 'bg-slate-800/90 text-slate-200' : 'bg-white/90 text-slate-800'
                } shadow-xl drop-shadow-lg backdrop-blur-sm ring-1 ring-black/10`}
              >
                {String(s.name)}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default SkillsConstellation;
