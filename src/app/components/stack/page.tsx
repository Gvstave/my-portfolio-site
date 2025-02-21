import { Server, Database, Code, Frame, GitBranch, Globe, PanelsTopLeft } from "lucide-react";
import React from "react";

interface ItemProps {
    image: React.ReactNode;
    title: string;
    techStack: string;
    note: string;
}

const Item: React.FC<ItemProps> = ({ image, title, techStack, note }) => {
    return (
        <div className='bg-white mt-10 p-5 rounded-full'>
            <div className="flex items-center justify-left gap-4">
                <div>
                    <span className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg">{image}</span>
                </div>
                <div>
                    <h4 className="font-bold">{title}</h4>
                    <p className="text-xs">{techStack}</p>
                </div>
            </div>
            <div>
                <p>{note}</p>
            </div>
        </div>
    );
};

const Stack = () => {
    return (
        <div>
            <Item
                image={<Code className="text-green-900 w-6 h-6"/>}
                title="Languages"
                techStack="HTML, Javascript, Typescript, C, Java"
                note=""
            />
            <Item
                image={<Frame />}
                title="Frontend"
                techStack="React, NextJS/TS"
                note="Building responsive and interactive user interfaces with modern React features and Next.js for optimal performance."
            />
            <Item
                image={<Server />}
                title="Backend"
                techStack="Node.js, Express"
                note="Building responsive and interactive user interfaces with modern React features and Next.js for optimal performance."
            />
            <Item
                image={<Database />}
                title="Database"
                techStack="MongoDB"
                note="Designing and implementing efficient database schemas and queries for optimal data management."
            />
            <Item
                image={<PanelsTopLeft />}
                title="UX/UI Design"
                techStack="CSS, Tailwind CSS"
                note="Crafting beautiful and intuitive user interfaces with modern design principles and frameworks."
            />
            <Item
                image={<GitBranch />}
                title="Version Control"
                techStack="Git, Github"
                note="Managing code versions efficiently with Git and collaborating effectively through GitHub."
            />
            <Item
                image={<Globe />}
                title="Web Performance"
                techStack="Git, Github"
                note="Optimizing web applications for speed, accessibility, and search engine visibility."
            />
        </div>
    );
};

export default Stack;
