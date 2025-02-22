import { Server, Database, Code, Smartphone, GitBranch, Globe, PanelsTopLeft } from "lucide-react";
import React from "react";

interface ItemProps {
    image: React.ReactNode;
    title: string;
    techStack: string;
    note: string;
}

const Item: React.FC<ItemProps> = ({ image, title, techStack, note }) => {
    return (
        <div className='bg-white mt-10 p-5 rounded flex flex-col gap-4'>
            <div className="flex items-center justify-left gap-4">
                <div className="block p-2 rounded-full bg-white shadow-md">
                    <span className="dark:bg-gray-800 shadow-lg">{image}</span>
                </div>
                <div>
                    <h2 className="font-bold">{title}</h2>
                    <p className="text-xs text-gray-700">{techStack}</p>
                </div>
            </div>
            <div>
                <p className="text-gray-700">{note}</p>
            </div>
        </div>
    );
};

const Stack = () => {
    return (
        <div>
            <Item
                image={<Code className="text-blue-500 w-6 h-6"/>}
                title="Languages"
                techStack="HTML, Javascript, Typescript, C, Java"
                note="Building proficient, maintainable, and flexible systems through a diverse set of languages. Emphasizing on type-safety, and ensuring systems are secure and scalable through well-structured code."
            />
            <Item
                image={<PanelsTopLeft className="text-yellow-500 w-6 h-6"/>}
                title="Frontend"
                techStack="React, NextJS/TS"
                note="Building responsive and interactive user interfaces with modern React features and Next.js for optimal performance."
            />
            <Item
                image={<Server  className="text-green-500 w-6 h-6" />}
                title="Backend"
                techStack="Node.js, Express"
                note="Creating robust server-side applications with focus on scalability and clean architecture."
            />
            <Item
                image={<Database  className="text-purple-500 w-6 h-6" />}
                title="Database"
                techStack="MongoDB"
                note="Designing and implementing efficient database schemas and queries for optimal data management."
            />
            <Item
                image={<Smartphone  className="text-pink-500 w-6 h-6" />}
                title="UX/UI & Responsive Design"
                techStack="CSS, Tailwind CSS"
                note="Crafting beautiful and intuitive user interfaces with modern design principles and frameworks."
            />
            <Item
                image={<GitBranch  className="text-orange-500 w-6 h-6" />}
                title="Version Control"
                techStack="Git, Github"
                note="Managing code versions efficiently with Git and collaborating effectively through GitHub."
            />
            <Item
                image={<Globe  className="text-red-500 w-6 h-6" />}
                title="Web Performance"
                techStack="SEO, Optimization"
                note="Optimizing web applications for speed, accessibility, and search engine visibility."
            />
        </div>
    );
};

export default Stack;
