import { motion } from "framer-motion";
import { ThemeButton } from "./ui/theme";
import { MobileMenu } from "./ui/MobileMenu";

const Navbar = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav 
            className="flex flex-row items-center justify-between h-12.5 backdrop-blur-md mx-auto rounded-full border-theme w-full sm:w-auto"
            style={{
                backgroundColor: 'var(--card-bg)',
                backdropFilter: 'blur(12px)',
                borderColor: 'var(--border)'
            }}
        >
            <ThemeButton className="w-12 h-8 ml-3 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" />
            
            {/* Desktop Menu */}
            <div className="flex items-center gap-6 w-auto h-full text-theme-primary text-sm font-medium px-6 max-sm:hidden">
                <button 
                    onClick={() => scrollToSection('home')} 
                    className="transition-colors hover:opacity-75"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >Home</button>
                <button 
                    onClick={() => scrollToSection('about')} 
                    className="transition-colors hover:opacity-75"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >About</button>
                <button 
                    onClick={() => scrollToSection('projects')} 
                    className="transition-colors hover:opacity-75"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >Projects</button>
                <button 
                    onClick={() => scrollToSection('skillset')} 
                    className="transition-colors hover:opacity-75"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >Skills</button>
                {/* <button 
                    onClick={() => scrollToSection('certificates')} 
                    className="transition-colors hover:opacity-75"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >Certificates</button> */}
                <button 
                    onClick={() => scrollToSection('experience')} 
                    className="transition-colors hover:opacity-75"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >Experience</button>
                <button 
                    onClick={() => scrollToSection('contact')} 
                    className="transition-colors hover:opacity-75"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >Contact</button>
            </div>

            {/* Mobile Menu */}
            <div className="mr-2 sm:hidden block">
                <MobileMenu />
            </div>
        </motion.nav>
    )
}

export default Navbar;