"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Contribute from '@/app/components/contribute/page';
import Projects from '@/app/components/project/page';
import { WorkContent } from '@/app/components/content/page';

const Works = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("scroll-works");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  return (
    <motion.div
      id="scroll-works"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
      transition={{ duration: 0.5 }}
    >
    <div className="text-white px-5 py-20">
      <WorkContent />
      <Contribute />
      <Projects />
    </div>
    </motion.div>
  );
};

export default Works;
