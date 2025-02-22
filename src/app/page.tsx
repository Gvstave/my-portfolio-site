"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./segments/header/page";
import Introduction from "./segments/main/introduction/page";
import About from "./segments/main/about/page";

export default function Home() {
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
      { threshold: 0.5 }
    );

    const element = document.getElementById("scroll-element");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div>
      <header className="z-40 bg-black-100 backdrop-blur-md w-full h-[auto] fixed top-0 left-0 right-0 font-[family-name:var(--font-geist-sans)]">
        <Header />
      </header>
      <main className="">
        <Introduction />
        {/* <motion.div
          id="scroll-element"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div> */}
        <About />
      </main>
    </div>
  );
}
