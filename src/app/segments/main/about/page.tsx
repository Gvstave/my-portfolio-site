"use client";

import Stack from '@/app/components/stack/page';

const About = () => {
    return (
            <div className='bg-gray-100 px-5 py-20 h-full'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-center text-5xl md:text-5xl lg:text-5xl font-bold mb-4'>About Me</h1>
                    <p>
                        As an aspiring full-stack web developer, I am passionate about creating dynamic and scalable web applications. With a solid foundation in MongoDB, Express.js, React, and Node.js, I am eager to build full-stack solutions that provide seamless user experiences and robust functionality. I am constantly learning and growing in my journey to deliver exceptional web applications.
                    </p>
                    <p>
                        I’m expanding my skills with modern frameworks like Next.js and state management tools such as Redux. I focus on writing clean, efficient code while keeping up with the latest industry trends, ensuring I can deliver innovative and high-quality solutions for every project.
                    </p>
                </div>
                <div>
                    <Stack />
                </div>
            </div>
    );
};

export default About;
