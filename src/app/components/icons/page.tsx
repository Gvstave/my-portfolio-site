import { Linkedin, Mail, Github } from "lucide-react";

const Icons = () => {
    return (
        <div className="space-x-4 flex justify-center mb-4" >
            <a href="https://www.linkedin.com/in/gustave-a-ilunga-0666942a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex items-center justify-center rounded-md transition-colors hover:bg-gray-900 p-3"><Linkedin className="h-4 w-4"/></a>
            <a href="https://github.com/Gvstave" className="flex items-center justify-center rounded-md transition-colors hover:bg-gray-900 p-3"><Github className="h-4 w-4"/></a>
            <a href="mailto:ilungagustave73@gmail.com" className="flex items-center justify-center rounded-md transition-colors hover:bg-gray-900 p-3"><Mail className="h-4 w-4"/></a>
        </div>
    )
}

export default Icons;