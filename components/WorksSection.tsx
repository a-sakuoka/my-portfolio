'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  index: number;
}

function ProjectCard({ title, category, index }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-[#e0e0e0] aspect-[4/3] rounded-sm">
        {/* Placeholder Image */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            x: isHovered ? (mousePosition.x - 200) * 0.05 : 0,
            y: isHovered ? (mousePosition.y - 150) * 0.05 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="text-[#1a1a1a]/30 text-4xl font-light">Image</div>
        </motion.div>
      </div>
      <div className="mt-4 md:mt-6">
        <h3 className="text-xl md:text-2xl font-light mb-2">{title}</h3>
        <p className="text-sm md:text-base text-[#1a1a1a]/60 uppercase tracking-wider">
          {category}
        </p>
      </div>
    </motion.div>
  );
}

export default function WorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const projects = [
    { title: 'Project One', category: 'Web Development' },
    { title: 'Project Two', category: 'UI/UX Design' },
    { title: 'Project Three', category: 'Frontend' },
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 lg:py-64 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ opacity }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light">
            Selected Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

