"use client";
import { Github } from "lucide-react";
import { Radio } from "lucide-react";
import Projects from "@/app/components/project/page";

const Works = () => {
  return (
    <div className="text-white py-20 px-5">
      <h1 className="text-center text-5xl md:text-5xl lg:text-5xl font-bold mb-4">
        Works
      </h1>
      <section>
        <h4 className="text-2xl md:text-3xl lg:text-3xl font-bold">
          Contributed
        </h4>
        <div>
          <Projects
            bgImage={<img src="images/spark.png"/>}
            name="SparkEd"
            details="SparkedNext is a collaborative library system designed to streamline the management and access of resources. As a contributor, I helped enhance its features, focusing on improving user experience and functionality. The system allows users to easily search, borrow, and manage library materials."
            stack={["Nextjs", "React", "Typescript", "Tailwind CSS", "MongoDB"]}
            pageUrl="https://sparkednext.app/"
            codeUrl="https://github.com/Gvstave/sparked-next"
          />
          <Projects
            bgImage={<img src="images/songs.png" />}
            name="SOS Songs"
            details="SoSongs is a hymnal song platform featuring songs from church choirs. Users can search and view a variety of hymnal songs hosted on the page. Built with modern web technologies, this app provides an interactive and easy way to access and explore religious music."
            stack={["React", "Typescript", "Javascript", "CSS", "HTML"]}
            pageUrl="https://sosongs.vercel.app/"
            codeUrl="https://github.com/Gvstave/sos"
          />
        </div>
      </section>
      <section>
        <h4 className="text-2xl md:text-3xl lg:text-3xl font-bold mt-5">Projects</h4>
        <div>
          <Projects
            bgImage={<img src="images/portfolio.png" alt="flags demo images" />}
            name="My Portfolio"
            details="My portfolio is built with TypeScript, Next.js, Framer Motion, and Tailwind CSS. It features a sleek, responsive design with smooth animations, showcasing my skills in modern web development and offering a seamless user experience."
            stack={["NextTs", "Typescript", "Tailwind CSS", "Framer-motion"]}
            pageUrl=""
            codeUrl=""
          />
          <Projects
            bgImage={<img src="images/flags.png" alt="flags demo images" />}
            name="Flags Of The World"
            details="Flags Of The World is a project created as part of a challenge hosted by Tech-Mentor. The page displays detailed information about countries, allowing users to filter countries by continent, search for specific countries, and click on flags to view more details. "
            stack={["HTML", "CSS", "JavaScript"]}
            pageUrl="https://gvstave.github.io/flagsOfTheWorld/"
            codeUrl="https://github.com/Gvstave/flagsOfTheWorld"
          />
          <Projects
            bgImage={<img src="images/currency.png" alt="flags demo images" />}
            name="Currency Converter"
            details="Currency Converter offers a real-time currency conversion tool with an intuitive interface, providing accurate exchange rates and a seamless user experience."
            stack={["HTML", "CSS", "JavaScript"]}
            pageUrl="https://gvstave.github.io/Currency-converter/"
            codeUrl="https://github.com/Gvstave/Currency-converter"
          />
          <Projects
            bgImage={<img src="images/covers.png" />}
            name="Seat Covers"
            details="Seat Covers Site showcases a product catalog with detailed descriptions and images, providing a smooth browsing experience"
            stack={["HTML", "CSS", "Javascript"]}
            pageUrl="https://gvstave.github.io/Seat-Covers-Site/"
            codeUrl="https://github.com/Gvstave/Seat-Covers-Site"
          />
          <Projects
            bgImage={<img src="images/editor.png" />}
            name="Minix Text Editor"
            details="Minix Text Editor is a text editor that allows users to write and edit content in HTML and CSS formats. Users can also save their work as a PDF, making it a versatile tool for creating and exporting styled content. "
            stack={["HTML", "CSS", "Javascript"]}
            pageUrl="https://github.com/Gvstave/minix_text_editor_renovated"
            codeUrl="https://github.com/Gvstave/minix_text_editor_renovated"
          />
        </div>
      </section>
    </div>
  );
};

export default Works;
