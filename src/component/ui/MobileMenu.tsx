import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skillset" },
        // { name: "Certificates", id: "certificates" },
        { name: "Experience", id: "experience" },
        { name: "Contact", id: "contact" },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <div className="md:hidden">
            {/* Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-120 cursor-pointer"
            >
                <Menu size={20} className="text-theme-primary" />
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 backdrop-blur-sm z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "150%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full z-50"
                        >
                            <nav className="rounded-2xl" style={{ backgroundColor: 'var(--bg-primary)', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)', border: 'var(--border)' }}>
                                <button className="w-full backdrop-blur-sm flex flex-row items-center justify-end py-4 px-6" onClick={() => setIsOpen(false)}>
                                    <X size={20} className="text-theme-primary transition-all duration-300 hover:scale-120 cursor-pointer" />
                                </button>
                                {menuItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => scrollToSection(item.id)}
                                        className="block w-full text-left text-theme-primary py-3 px-4 rounded-lg transition-colors text-lg"
                                        style={{ color: 'var(--text-primary)' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--accent)';
                                            e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--text-primary)';
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};