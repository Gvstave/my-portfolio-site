import { motion } from "framer-motion";

export const LoadingScreen = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-theme-primary"
            style={{ backgroundColor: 'var(--bg-primary)' }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center">
                <motion.div
                    className="text-6xl font-bold text-theme-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                >
                    GI
                </motion.div>
                
                <motion.div
                    className="w-24 h-1 mx-auto mb-4"
                    style={{ backgroundColor: 'var(--accent)' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Animated Dots */}
                <div className="flex gap-1 justify-center mt-4">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: 'var(--accent)' }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};