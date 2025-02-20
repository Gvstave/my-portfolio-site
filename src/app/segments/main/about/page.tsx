"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
            { threshold: 0.5 }
        );

        const element = document.getElementById('scroll-element');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <motion.div
            id="scroll-element"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            <div className='bg-white'>
                <div>
                    <h1 className='text-center text-5xl md:text-5xl lg:text-5xl font-bold mb-4'>About Me</h1>
                </div>
                <div>
                    <p>
                        As an aspiring full-stack web developer, I am passionate about creating dynamic and scalable web applications. With a solid foundation in MongoDB, Express.js, React, and Node.js, I am eager to build full-stack solutions that provide seamless user experiences and robust functionality. I am constantly learning and growing in my journey to deliver exceptional web applications.
                    </p>
                    <p>
                        I’m expanding my skills with modern frameworks like Next.js and state management tools such as Redux. I focus on writing clean, efficient code while keeping up with the latest industry trends, ensuring I can deliver innovative and high-quality solutions for every project.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
