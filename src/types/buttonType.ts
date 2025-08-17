import React, { type ReactNode } from "react"

export type ButtonProps = {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type: 'button' | 'submit';
    name: string | ReactNode;
}

