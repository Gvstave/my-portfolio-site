import { Server, Database, Code, Smartphone, GitBranch, Globe, PanelsTopLeft } from "lucide-react";
import Item from "./Item";

const Skills = () => {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default Skills;
