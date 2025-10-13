import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SkillBarProps {
    name: string;
    level: number;
    delay?: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(`skill-${name}`);
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [name]);

    return (
        <motion.div
            id={`skill-${name}`}
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-theme-primary font-medium">{name}</span>
                <span className="text-theme-secondary text-sm">{level}%</span>
            </div>
            <div className="w-full rounded-full h-2 overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: 'linear-gradient(to right, var(--gradient-from), var(--gradient-to))'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${level}%` : 0 }}
                    transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
};

export const SkillsShowcase = () => {
    const skills = [
        { name: "React/Next.js", level: 80 },
        { name: "TypeScript", level: 58 },
        { name: "Tailwind CSS & Vanilla CSS", level: 90 },
        { name: "Node.js", level: 29 }, 
        { name: "Database Design", level: 32 },
        { name: "UI/UX Design", level: 75 },
    ];

    return (
        <motion.div
            className="p-8 rounded-lg border border-theme"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <h3 className="text-theme-primary text-2xl font-bold mb-8">Technical Proficiency</h3>
            {skills.map((skill, index) => (
                <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.1}
                />
            ))}
        </motion.div>
    );
};