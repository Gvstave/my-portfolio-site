import { Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "../component/ui/ContactForm";

export const Contact = () => {
    return (
        <div id="contact" className="bg-theme-primary py-24 max-md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-theme-secondary mb-4 text-[16px] font-bold leading-[150%] uppercase tracking-wider">Get In Touch</h2>
                        <h2 className="text-theme-primary text-[48px] max-md:text-[36px] leading-[110%] font-medium mb-8 max-w-4xl mx-auto">Let's work together on something amazing.</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-theme-secondary text-[18px] leading-[150%] mb-8">
                                I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
                            </p>
                            <div className="space-y-4">
                                <a href="mailto:ilungagustave73@gmail.com" target="_blank" className="group flex items-center gap-4 transition-all duration-300">
                                    <div className="w-12 h-12 bg-[#5221e6] rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold group-hover:scale-105"><Mail /></span>
                                    </div>
                                    <div>
                                        <p className="text-theme-primary font-medium">Email</p>
                                        <p className="text-[var(--text-secondary)] group-hover:text-[var(--accent)]">ilungagustave73@gmail.com</p>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/gustave-a-ilunga-0666942a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="group flex items-center gap-4 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
                                        <span className="text-white font-bold group-hover:scale-105"><Linkedin /></span>
                                    </div>
                                    <div className="hover:text-[var(--accent)]">
                                        <p className="text-[var(--text-primary)] font-medium">LinkedIn</p>
                                        <p className="text-[var(--text-secondary)] group-hover:text-[var(--accent)]">Gustave.A Ilunga</p>
                                    </div>
                                </a>
                                <a href="https://github.com/Gvstave" target="_blank" className="group flex items-center gap-4 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
                                        <span className="text-white font-bold group-hover:scale-105"><Github /></span>
                                    </div>
                                    <div>
                                        <p className="text-theme-primary font-medium">GitHub</p>
                                        <p className="text-[var(--text-secondary)] group-hover:text-[var(--accent)]">Gvstave</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </div>
        </div>
    );
};