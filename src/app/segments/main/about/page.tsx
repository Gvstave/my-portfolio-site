"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skills from "@/app/components/Skills";
import { AboutContent } from "@/app/components/Content";

const About = () => {
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

    const element = document.getElementById("scroll-about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <motion.div
      id="scroll-about"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-100 px-5 py-20">
        <AboutContent />
        <Skills />
      </div>
    </motion.div>
  );
};

export default About;
