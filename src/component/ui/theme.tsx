import type { ThemeProps } from "../../types/themeType"
import { MoonIcon, SunIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"

export const ThemeButton: React.FC<ThemeProps> = ({className}) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            className={`${className} relative overflow-hidden bg-white/10 backdrop-blur-sm`}
            onClick={toggleTheme}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#5221e6] to-[#7c3aed] rounded-full"
                initial={false}
                animate={{
                    scale: isDark ? 1 : 0,
                    opacity: isDark ? 1 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
            />
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-full"
                initial={false}
                animate={{
                    scale: !isDark ? 1 : 0,
                    opacity: !isDark ? 1 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
            />
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 1 : 0,
                        opacity: isDark ? 1 : 0,
                        rotate: isDark ? 0 : 180
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                    }}
                    className="absolute"
                >
                    <MoonIcon size={18} className="text-white" />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{
                        scale: !isDark ? 1 : 0,
                        opacity: !isDark ? 1 : 0,
                        rotate: !isDark ? 0 : -180
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                    }}
                    className="absolute"
                >
                    <SunIcon size={18} className="text-white" />
                </motion.div>
            </div>
        </button>
    )
}