import { motion } from "framer-motion";
import { Card } from "../component/ui/cards/experienceCard"
import { experienceContent } from "../types/constants"

export const Experience = () => {
    return (
        <div id="experience" className="py-24 max-md:py-16 bg-theme-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-theme-secondary mb-4 text-[16px] font-bold leading-[150%] uppercase tracking-wider">Work Experience</h2>
                    <h2 className="text-theme-primary text-[48px] max-md:text-[36px] leading-[110%] font-medium max-w-4xl mx-auto">Companies I have worked for in the past.</h2>
                </motion.div>
                <div className="flex max-lg:flex-col gap-10">
                    {
                        experienceContent.map((item, index) => (
                            <motion.div
                                key={item.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <Card number={item.number} company={item.company} role={item.role} description={item.description} />
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
} 