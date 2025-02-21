import { Code } from "lucide-react";
import { Server } from "lucide-react";
import { Database } from "lucide-react";
import { Zap } from "lucide-react";
import React from "react";

interface ItemProps {
    image: React.ReactNode;
    title: string;
    techStack: string;
}

const Item: React.FC<ItemProps> = ({ image, title, techStack }) => {
    return (
        <div>
            <div>{image}</div>
            <div>{title}</div>
            <div>{techStack}</div>
        </div>
    );
};

const Stack = () => {
    return (
        <div>
            <Item 
                image={<Code />} 
                title="Backend Development" 
                techStack="Node.js, Express, MongoDB"
            />
        </div>
    );
};

export default Stack;
