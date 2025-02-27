"use client";
import Icons from "@/app/components/icons/page";
import Button from "@/app/components/button/page";
import { IntroductionContent } from "@/app/components/content/page";
import Hero from "@/app/components/hero/page";
import { motion } from "framer-motion";

const Container = () => {
  return (
    <div className="flex flex-row gap-6 align-center">
      <div>
        <IntroductionContent />
        <Icons />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
};

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-dvh flex flex-col justify-center items-center bg-black">
        <div className="flex flex-col items-center gap-6 max-w-[70%]">
          <Container />
          <Button />
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
