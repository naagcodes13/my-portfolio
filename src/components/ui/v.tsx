"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "motion/react";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  baseHue?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const noise3D = createNoise3D();
  
  // Default props
  const backgroundColor = props.backgroundColor || "#000000";
  const particleCount = props.particleCount || 700;
  const baseHue = props.baseHue || 220;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 1.5 + 0.5,
      angle: Math.random() * Math.PI * 2,
      hue: baseHue + Math.random() * 50,
    }));

    let tick = 0;
    
    const draw = () => {
      tick++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        const noise = noise3D(p.x * 0.001, p.y * 0.001, tick * 0.0001);
        p.angle += noise * 0.2;
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        // Wrap particles around the screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, 0.8)`;
        ctx.fill();
        ctx.closePath();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particleCount, baseHue, backgroundColor]);

  return (
    <div className={cn("fixed inset-0 w-full h-full", props.containerClassName)}>
      {/* Vortex Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center"
      >
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </motion.div>

      {/* Foreground Content */}
      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};
