import React, { useMemo, useEffect, useRef, useState } from 'react';
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
  Sparkles,
  Code,
  CpuIcon,
  CloudLightning,
  GitBranchIcon,
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
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const skills = useMemo(() => buildSkills(), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const lastTimeRef = useRef(0);
  const timeRef = useRef(0);
  const centerXRef = useRef(0);
  const centerYRef = useRef(0);

  // Handle mouse move for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    centerXRef.current = width / 2;
    centerYRef.current = height / 2;

    // Enhanced particle system
    const particles = Array.from({ length: 120 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * Math.min(width, height) * 0.4;
      return {
        x: width / 2 + Math.cos(angle) * distance,
        y: height / 2 + Math.sin(angle) * distance,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        baseX: 0,
        baseY: 0,
        angle: Math.random() * Math.PI * 2,
        radius: 50 + Math.random() * Math.min(width, height) * 0.3,
        speed: 0.0005 + Math.random() * 0.001,
        color: `hsla(${Math.random() * 60 + 180}, 70%, 70%, ${Math.random() * 0.2 + 0.1})`
      };
    });

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      timeRef.current += deltaTime * 0.001;
      
      ctx.clearRect(0, 0, width, height);
      
      // Update particle positions with orbital motion and parallax effect
      const parallaxFactor = 0.1;
      const mouseX = mousePosition.x - centerXRef.current;
      const mouseY = mousePosition.y - centerYRef.current;
      
      // Draw connecting lines with gradient and improved performance
      const connections: {x1: number, y1: number, x2: number, y2: number, distance: number}[] = [];
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Orbital motion with noise
        p.angle += p.speed;
        p.baseX = centerXRef.current + Math.cos(p.angle) * p.radius * (1 + Math.sin(timeRef.current * 0.5) * 0.1);
        p.baseY = centerYRef.current + Math.sin(p.angle) * p.radius * (1 + Math.cos(timeRef.current * 0.3) * 0.1);
        
        // Apply parallax effect based on mouse position
        p.x = p.baseX + mouseX * parallaxFactor * (p.size / 3);
        p.y = p.baseY + mouseY * parallaxFactor * (p.size / 3);
        
        // Store connections for drawing later
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            connections.push({
              x1: p.x, y1: p.y,
              x2: other.x, y2: other.y,
              distance
            });
          }
        }
      }
      
      // Sort connections by distance (farthest first for proper layering)
      connections.sort((a, b) => b.distance - a.distance);
      
      // Draw connections with gradient
      connections.forEach(conn => {
        const gradient = ctx.createLinearGradient(conn.x1, conn.y1, conn.x2, conn.y2);
        const opacity = 1 - conn.distance / 120;
        gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, ${opacity * 0.4})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(conn.x1, conn.y1);
        ctx.lineTo(conn.x2, conn.y2);
        ctx.stroke();
      });

      // Draw particles with glow effect
      particles.forEach(particle => {
        // Glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `hsla(240, 100%, 70%, 0.3)`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Particle core
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[640px] aspect-square select-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />
      {/* Center core */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full flex items-center justify-center shadow-2xl ring-1 transition-all duration-1000 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-purple-500/30 to-cyan-500/30 ring-cyan-400/30 hover:ring-cyan-400/50 hover:shadow-[0_0_30px_5px_rgba(34,211,238,0.3)]'
            : 'bg-gradient-to-br from-purple-300/40 to-cyan-300/40 ring-cyan-500/30 hover:ring-cyan-500/50 hover:shadow-[0_0_30px_5px_rgba(14,165,233,0.3)]'
        }`}
      >
        <div className="absolute inset-0 rounded-full blur-2xl opacity-60 bg-gradient-to-br from-cyan-400/50 to-purple-500/50 animate-pulse" />
        <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 ring-2 ring-white/10 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-white/5 animate-ping" style={{ animationDuration: '3s' }} />
          <span className="text-white font-bold text-sm text-center leading-tight">Skills<br/>Constellation</span>
        </div>
      </div>

      {/* Animated orbit guides */}
      {[120, 160, 200, 240].map((r, i) => (
        <div
          key={i}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            theme === 'dark' 
              ? 'border border-dashed border-white/5 animate-spin-slow' 
              : 'border border-dashed border-black/5 animate-spin-slow'
          }`}
          style={{ 
            width: r * 2, 
            height: r * 2,
            animationDuration: `${30 + i * 10}s`,
            animationDirection: i % 2 === 0 ? 'reverse' : 'normal'
          }}
        />
      ))}


      {/* Orbiting skill badges */}
      {skills.map((s, index) => {
        const Icon = typeof s.name === 'string' && iconRegistry[s.name as IconKey] || Layers;
        return (
          <div 
            key={index}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
            style={{
              transform: `translate(-50%, -50%) rotate(${s.startAngle}deg) translate(${s.radius}px) rotate(-${s.startAngle}deg)`,
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform'
            }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className={`absolute -z-10 w-16 h-16 rounded-full bg-${s.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
              <div
                className={`relative w-12 h-12 rounded-full flex items-center justify-center transform transition-transform duration-200 ease-out ${
                  theme === 'dark' ? 'bg-slate-900/80 text-white' : 'bg-white text-slate-800'
                } ring-1 ring-white/10 shadow-xl group-hover:scale-[2] group-hover:ring-2 group-hover:ring-cyan-400/40 group-hover:shadow-2xl`}
                style={{
                  boxShadow: '0 0 18px rgba(59,130,246,0.25), 0 0 36px rgba(139,92,246,0.25)'
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
          </div>
        );
      })}
    </div>
  );
};

export default SkillsConstellation;
