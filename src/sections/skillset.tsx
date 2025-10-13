import { motion } from "framer-motion";
import * as Icons from "lucide-react"
import { SkillCard } from "../component/ui/cards/skillcard"
import { skillsContent } from "../types/constants"
import type { LucideIcon } from "lucide-react";

export const Skillset = () => {
    return (
        <div id="skillset" className="font-sen py-24 max-md:py-16 bg-theme-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="flex-1 max-lg:text-center"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-theme-primary text-[48px] max-md:text-[36px] font-bold mb-6 leading-[110%]">Skill Set</h2>
                    <p className="text-theme-secondary text-[18px] leading-[150%]">With skills in over 5 different areas of development, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
                </motion.div>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-lg:mx-auto mt-16">
                    {
                        skillsContent.map(({ title, description, icon }, index) => {
                            const IconComponent = (Icons[icon] || Icons.HelpCircle) as LucideIcon;
                            return (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <SkillCard
                                        icon={<IconComponent className="w-8 h-8 group-hover:scale-150 transition-transform duration-500 ease-in-out" />}
                                        title={title}
                                        description={description}
                                        className="group"
                                    />
                                </motion.div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}