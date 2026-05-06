import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-theme-primary border-t border-theme py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-theme-primary text-2xl font-bold mb-4">Gustave Ilunga</h3>
                        <p className="text-theme-secondary text-[16px] leading-[150%]">
                            Software Engineer passionate about creating digital solutions that make a difference.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-theme-primary text-lg font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {['About', 'Experience', 'Skillset', 'Projects', 'Contact'].map((link) => (
                                <button
                                    key={link}
                                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                                    className="block text-(--text-secondary) transition-colors text-[16px] cursor-pointer hover:text-(--accent)"
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="text-theme-primary text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Gvstave"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-theme-secondary hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300"
                                style={{
                                    backgroundColor: 'var(--bg-secondary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                                }}
                            >
                                <Github size={20} className="text-theme-primary" style={{ color: 'var(--text-primary)' }} />
                            </a>
                            <a
                                href="https://linkedin.com/in/gustave-ilunga"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-theme-secondary hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300"
                                style={{
                                    backgroundColor: 'var(--bg-secondary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                                }}
                            >
                                <Linkedin size={20} className="text-theme-primary" style={{ color: 'var(--text-primary)' }} />
                            </a>
                            <a
                                href="mailto:ilungagustave73@gmail.com"
                                className="w-12 h-12 bg-theme-secondary hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300"
                                style={{
                                    backgroundColor: 'var(--bg-secondary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                                }}
                            >
                                <Mail size={20} className="text-theme-primary" style={{ color: 'var(--text-primary)' }} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    className="pt-8 border-t border-theme text-center"
                    style={{ borderColor: 'var(--border)' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-theme-secondary text-[14px] flex max-sm:flex-col items-center justify-center gap-2">
                        <span>© {currentYear} Gustave Ilunga.</span>
                        <span className="flex flex-row items-center gap-1">Made with <Heart size={16} className="text-red-500" /> and lots of coffee.</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};