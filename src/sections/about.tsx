import { motion } from "framer-motion";
import { SkillsShowcase } from "../component/ui/SkillsShowcase";

export const About = () => {
    return (
        <div id="about" className="bg-theme-primary py-24 max-md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-theme-secondary mb-4 text-[16px] font-bold leading-[150%] uppercase tracking-wider">About Me</h2>
                        <h2 className="text-theme-primary text-[48px] max-md:text-[36px] leading-[110%] font-medium mb-8 max-w-4xl mx-auto">Passionate about creating digital experiences that matter.</h2>
                    </motion.div>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-theme-secondary text-[18px] leading-[150%] mb-6">
                            I am software engineer with a keen interest in full-stack web development and a deep passion for operating system (OS) research, design, and development.
                        </p>
                        <p className="text-theme-secondary text-[18px] leading-[150%]">
                            Throughout my academic journey, I have worked closely with colleagues on various projects, which has honed my experience in various fields of computer science.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-theme-secondary text-[18px] leading-[150%] mb-6">
                            I am constantly learning new technologies and eager to work with a larger team to learn new things and share my knowledge with others.
                        </p>
                        <p className="text-theme-secondary text-[18px] leading-[150%]">
                            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or diving deep into system architecture and design patterns.
                        </p>
                    </motion.div>
                </div>
                
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <SkillsShowcase />
                </motion.div>
                </div>
            </div>
        </div>
    )
}