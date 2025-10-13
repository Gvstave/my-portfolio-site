import { ProjectCard } from "../component/ui/cards/projectCard";
import { projectsContent } from "../types/constants";

export const Project = () => {
    return (
        <div id="projects" className="bg-theme-primary py-24 max-md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-theme-secondary mb-4 text-[16px] font-bold leading-[150%] uppercase tracking-wider">My Projects</h2>
                    <h2 className="text-theme-primary text-[48px] max-md:text-[36px] leading-[110%] font-medium max-w-4xl mx-auto">What I've worked on in the past 3 years</h2>
                </div>
                <div className="w-full grid md:grid-cols-2 mx-auto sm:grid-cols-1 gap-10">
                    {
                        projectsContent.map((project, index) => (
                            <ProjectCard
                                key={index}
                                number={project.number}
                                title={project.title}
                                technologies={project.technologies}
                                description={project.description}
                                liveUrl={project.liveUrl}
                                githubUrl={project.githubUrl}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};
