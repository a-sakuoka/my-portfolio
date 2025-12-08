'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  index: number;
  imageUrl: string;
  bgColor: string;
}

function ProjectCard({ title, category, index, imageUrl, bgColor }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-12 md:mb-16 last:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <motion.div
        className="relative overflow-hidden rounded-sm mb-4 md:mb-6"
        style={{ aspectRatio: '16/9', backgroundColor: bgColor }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{
            filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </motion.div>
      </motion.div>

      {/* Title and Category */}
      <div>
        <h3 className="text-xl md:text-2xl font-light mb-2 text-[#1a1a1a]">
          {title}
        </h3>
        <p className="text-sm md:text-base text-[#1a1a1a]/60 uppercase tracking-wider">
          {category}
        </p>
      </div>
    </motion.div>
  );
}

export default function Works() {
  const projects = [
    {
      title: 'Project Name 01',
      category: 'Web Design / Development',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      bgColor: '#e8e8e8', // 薄いグレー
    },
    {
      title: 'Project Name 02',
      category: 'UI/UX Design',
      imageUrl: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?auto=format&fit=crop&w=800&q=80',
      bgColor: '#e0e4e8', // 薄い青グレー
    },
    {
      title: 'Project Name 03',
      category: 'Frontend Development',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      bgColor: '#e8e4e0', // ベージュグレー
    },
  ];

  return (
    <section id="works" className="min-h-screen py-32 md:py-48 lg:py-64 px-8 md:px-16 lg:px-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Left Column - Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <p className="text-sm md:text-base text-[#1a1a1a]/60 uppercase tracking-wider">
              02 / WORKS
            </p>
          </motion.div>

          {/* Right Column - Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-9"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                index={index}
                imageUrl={project.imageUrl}
                bgColor={project.bgColor}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

