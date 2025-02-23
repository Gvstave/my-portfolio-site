"use client";
import Icons from "@/app/components/icons/page";
import Button from "@/app/components/button/page";
import Content from "@/app/components/content/page";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-dvh flex flex-col justify-center items-center">
        <section className="flex flex-row items-center gap-6 max-w-[70%]">
          <div>
            <Content />
            <Icons />
          </div>
          <div className="hidden lg:block w-[400px]">
            <img
              src="images/hero.jpg"
              alt="my picture"
              className="w-full rounded"
            />
          </div>
        </section>
        <section className="absolute bottom-20">
          <Button />
        </section>
      </div>
    </motion.div>
  );
};

export default Introduction;
