import * as Icons from "lucide-react"
import { SkillCard } from "../component/ui/cards/skillcard"
import { skillsContent } from "../types/constants"
import type { LucideIcon } from "lucide-react";

export const Skillset = () => {
    return (
        <div className="font-sen py-32 px-20 bg-[#000] flex flex-row justify-between max-lg:flex-col max-lg:py-[80px] max-lg:px-[40px] max-md:py-16 max-md:px-5 gap-y-12 gap-x-6">
            <div className="pr-[48px] max-md:pr-0">
                <h2 className="text-white text-5xl font-bold mb-6">Skill set</h2>
                <p className="text-[#8491a0] text-[18px] leading-[150%]">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-12 gap-x-6">
                {
                skillsContent.map(({ title, description, icon }) => {
                    const IconComponent = (Icons[icon] || Icons.HelpCircle) as LucideIcon;
                    return (
                        <SkillCard
                            key={title}
                            icon={<IconComponent className="w-8 h-8 group-hover:scale-150 transition-transform duration-500 ease-in-out" />}
                            title={title}
                            description={description}
                            className="group"
                        />
                    );
                })
            }
            </div>
        </div>
    )
}