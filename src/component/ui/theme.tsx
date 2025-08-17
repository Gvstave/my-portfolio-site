"use client"
import type { ThemeProps } from "../../types/themeType"
import { MoonIcon, SunIcon } from "lucide-react"
import * as motion from "motion/react-client"
import { useState } from "react"

export const ThemeButton: React.FC<ThemeProps> = ({className}) => {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)

    return (
        <button
            className={className}
            style={{
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className="toggle-handle"
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
            {
                isOn ? <MoonIcon className="text-yellow-100" /> : <SunIcon className="text-yellow-500"/>
            }
            <motion.div/>
        </button>
    )
}