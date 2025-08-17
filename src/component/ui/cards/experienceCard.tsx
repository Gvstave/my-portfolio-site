import type { CardProps } from "../../../types/experienceType"

export const Card:React.FC<CardProps> = ({number, company, role, description}) => {
    return (
        <div className="text-white">
            <div className="mb-2 text-[#8491a0] text-[117px] font-[400]" >{number}</div>
            <h2 className="mb-4 text-2xl leading-[120%] font-bold "><span className="text-green-600">{company}, <span className="text-white">{role}</span></span></h2>
            <p className="text-[16px] leading-[150%]">{description}</p>
        </div>
    )
}