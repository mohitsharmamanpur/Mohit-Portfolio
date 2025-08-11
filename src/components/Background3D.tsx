import React, { useEffect, useRef } from 'react';

interface Background3DProps {
  theme: 'light' | 'dark';
}

export default function Background3D({ theme }: Background3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Array<{
    x: number;
    y: number;
    z: number;
    speed: number;
    size: number;
    opacity: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      starsRef.current = [];
      const starCount = 150;
      
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          speed: Math.random() * 2 + 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: theme === 'dark' 
            ? `hsl(${Math.random() * 60 + 180}, 70%, 70%)` // Blue-cyan range for dark theme
            : `hsl(${Math.random() * 60 + 200}, 50%, 60%)` // Lighter blue range for light theme
        });
      }
    };

    initStars();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      starsRef.current.forEach((star, index) => {
        // Move star
        star.z -= star.speed;
        
        // Reset star when it goes too far
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        // Calculate 3D position
        const x = (star.x - canvas.width / 2) * (1000 / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (1000 / star.z) + canvas.height / 2;
        
        // Calculate size based on distance
        const size = star.size * (1000 / star.z);
        
        // Calculate opacity based on distance and base opacity
        const opacity = star.opacity * (1000 / star.z) * 0.001;

        // Only draw if star is visible
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height && size > 0.1) {
          ctx.save();
          
          // Create gradient for star
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
          gradient.addColorStop(0, star.color.replace(')', `, ${opacity})`).replace('hsl', 'hsla'));
          gradient.addColorStop(1, star.color.replace(')', `, 0)`).replace('hsl', 'hsla'));
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          
          // Add twinkling effect
          if (Math.random() < 0.02) {
            ctx.shadowBlur = size * 4;
            ctx.shadowColor = star.color;
            ctx.beginPath();
            ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.restore();
        }
      });

      // Add floating particles
      const time = Date.now() * 0.001;
      for (let i = 0; i < 20; i++) {
        const x = Math.sin(time * 0.5 + i) * 100 + canvas.width * 0.1 + (i * canvas.width * 0.04);
        const y = Math.cos(time * 0.3 + i) * 50 + canvas.height * 0.5 + Math.sin(time * 0.2 + i) * 200;
        const size = Math.sin(time * 2 + i) * 2 + 3;
        const opacity = Math.sin(time * 1.5 + i) * 0.3 + 0.4;
        
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.save();
          ctx.globalAlpha = opacity;
          
          const particleColor = theme === 'dark' 
            ? `hsl(${180 + Math.sin(time + i) * 30}, 70%, 60%)`
            : `hsl(${200 + Math.sin(time + i) * 30}, 50%, 70%)`;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
          gradient.addColorStop(0, particleColor);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: theme === 'dark' 
          ? 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)'
          : 'radial-gradient(ellipse at center, rgba(248, 250, 252, 0.8) 0%, rgba(248, 250, 252, 0.95) 100%)'
      }}
    />
  );
}
