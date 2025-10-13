import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { ProjectProps } from "../../../types/projectType";

export const ProjectCard: React.FC<ProjectProps> = ({
    number,
    title,
    technologies,
    description,
    liveUrl,
    githubUrl,
}) => {
    return (
        <motion.div
            className="text-theme-primary group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
        >
            <motion.div
                className="text-theme-secondary text-[117px] font-[400] transition-colors"
                style={{ color: "var(--text-secondary)" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                }}
            >
                {number}
            </motion.div>
            <h2
                className="inline mb-2 text-2xl leading-[120%] font-bold transition-colors"
                style={{ color: "var(--text-primary)" }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                }}
            >
                {title}
            </h2>
            <p
                className="text-[16px] font-medium mb-4"
                style={{ color: "var(--accent)" }}
            >
                {technologies}
            </p>
            <p className="text-theme-secondary text-[16px] leading-[150%] mb-6 transition-colors">
                {description}
            </p>
            <div className="flex gap-4">
                <motion.a
                    href={liveUrl}
                    className="flex items-center gap-2 transition-colors"
                    style={{ color: "var(--accent)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--accent)";
                    }}
                >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                </motion.a>
                <motion.a
                    href={githubUrl}
                    className="flex items-center gap-2 transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                >
                    <Github size={18} />
                    <span>Source Code</span>
                </motion.a>
            </div>
        </motion.div>
    );
};
