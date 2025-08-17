import type { ReactNode } from "react"
import * as Icons from "lucide-react";

export type LucideIconName = keyof typeof Icons;
export type SkillSetProps = {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
}

export type Skill = {
  title: string;
  description: string;
  icon: LucideIconName;
};
