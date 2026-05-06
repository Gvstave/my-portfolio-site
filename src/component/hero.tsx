import { motion } from "framer-motion";

export const Hero = () => {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-10">
                {/* Desktop: Image on left, Tablet: Image visible, Mobile: Image hidden */}
                <motion.div 
                    className="hidden md:block w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:w-sm lg:shrink-0 order-1 lg:order-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src="./hero.jpg" className="rounded-lg shadow-2xl w-full h-auto lg:w-auto lg:h-auto"/>
                </motion.div>
                <div className="text-theme-primary flex-1 lg:max-w-2xl order-2 lg:order-2 text-center lg:text-left">
                <motion.h1 
                    className="flex flex-col leading-[110%] text-[36px] sm:text-[48px] md:text-[55px] lg:text-[76px] font-medium mb-6 lg:mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="text-theme-primary"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I'm Gustave Ilunga.
                    </motion.span>
                    <motion.span
                        className="text-theme-primary"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        A Software Engineer
                    </motion.span>
                    <motion.span 
                        className="text-theme-muted"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Based in Zambia.
                    </motion.span>
                </motion.h1>
                <motion.p 
                    className="text-theme-secondary text-[16px] lg:text-[18px] leading-[150%] mb-6 lg:mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    I'm probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I'm your guy.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="flex justify-center lg:justify-start"
                >
                    <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-white font-medium py-3 px-6 lg:py-3 lg:px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm lg:text-base"
                        style={{
                            backgroundColor: 'var(--accent)',
                            boxShadow: '0 10px 25px -5px rgba(82, 33, 230, 0.25)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--accent)';
                        }}
                    >
                        Get In Touch
                    </button>
                </motion.div>
                </div>
            </div>
        </div>
    )
};
