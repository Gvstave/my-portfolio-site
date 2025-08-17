import { motion } from "framer-motion";
import {ThemeButton} from "./ui/theme";

const Navbar = () => {
    return (
        <motion.nav className="flex flex-row items-center justify-between h-[40px] w-[80%] min-md:max-w-3xl bg-blue-500 mx-auto my-0">
            <ThemeButton className="w-16 h-full p-3 bg-black flex flex-row items-center justify-between rounded-[40px]" />
            <div className="flex items-center gap-2 w-auto h-full bg-red-500 text-sm font-semibold px-3 rounded-[40px]">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Skillset</a>
                <a href="#">Experience</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </motion.nav>
    )
}

export default Navbar;