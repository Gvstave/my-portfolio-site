import { Hero } from "../component/hero"
import Header from "../component/header"

export const Home = () => {
    return (
        <div id="home" className="min-h-screen w-full flex flex-col bg-theme-primary" style={{
            background: 'linear-gradient(to right, var(--bg-primary) 25%, var(--bg-secondary) 25%)'
        }}>
            <Header />
            <div className="flex-1 flex items-center justify-center py-8 lg:py-0">
                <Hero />
            </div>
        </div>
    ) 
} 