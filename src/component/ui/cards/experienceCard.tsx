import type { CardProps } from "../../../types/experienceType"

export const Card:React.FC<CardProps> = ({number, company, role, description}) => {
    return (
        <div className="text-theme-primary">
            <div className="mb-2 text-theme-secondary text-[117px] font-[400]" >{number}</div>
            <h2 className="mb-4 inline text-2xl leading-[120%] font-bold">
                <span style={{ color: 'var(--accent)' }}>{company},{" "}
                    <span className="text-theme-primary">{role}</span>
                </span>
            </h2>
            <p className="text-theme-secondary text-[16px] leading-[150%]">{description}</p>
        </div>
    )
}