import type { SkillSetProps } from "../../../types/skillProps"

export const SkillCard:React.FC<SkillSetProps> = ({icon, title, description, className}) => {
    return (
        <div className={`${className}`}>
            <div className="mb-6" style={{ color: 'var(--accent)' }}>
                {icon}
            </div>
            <h2 className="inline text-theme-primary text-[24px] font-bold mb-4 leading-[120%]">{title}</h2>
            <p className="text-theme-secondary text-[16px] leading-[150%]">{description}</p>
        </div>
    )
} 