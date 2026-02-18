"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacityDelta: number;
  colorIndex: number;
}

const COLORS = [
  [99, 102, 241],  // indigo (primary)
  [20, 184, 166],  // teal (accent)
  [148, 163, 184], // slate (muted)
];

const PARTICLE_COUNT = 90;

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function makeParticle(randomY = false): Particle {
      return {
        x: Math.random() * canvas!.width,
        y: randomY ? Math.random() * canvas!.height : -10,
        size: Math.random() * 2 + 0.5,
        speedY: Math.random() * 0.5 + 0.15,
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.35 + 0.05,
        opacityDelta: (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        colorIndex: Math.floor(Math.random() * COLORS.length),
      };
    }

    function init() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => makeParticle(true));
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.y += p.speedY;
        p.x += p.speedX;

        // Oscillate opacity subtly
        p.opacity += p.opacityDelta;
        if (p.opacity > 0.45 || p.opacity < 0.04) {
          p.opacityDelta *= -1;
        }

        // Draw circle
        const [r, g, b] = COLORS[p.colorIndex];
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity.toFixed(3)})`;
        ctx!.fill();

        // Recycle when off screen
        if (p.y > canvas!.height + 10) {
          particles[i] = makeParticle(false);
        }
      }

      animId = requestAnimationFrame(draw);
    }

    const handleResize = () => {
      resize();
      init();
    };

    resize();
    init();
    draw();

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
