import type { SkillSetProps } from "../../../types/skillProps"

export const SkillCard:React.FC<SkillSetProps> = ({icon, title, description, className}) => {
    return (
        <div className={`${className} `}>
            <div className="text-[#5221e6] mb-6">
                {icon}
            </div>
            <h2 className="text-white text-[24px] font-bold mb-4 leading-[120%]">{title}</h2>
            <p className="text-[#8491a0] text-[16px] leading-[150%]">{description}</p>
        </div>
    )
} 