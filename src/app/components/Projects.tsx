import Card from "./Card";
import Image from "next/image";
const Projects = () => {
  return (
    <>
      <div>
        <h4 className="text-2xl md:text-3xl lg:text-3xl font-bold mt-10">
          Projects
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          bgImage={<Image alt="project image here" src="images/portfolio.png" />}
          name="My Portfolio"
          details="My portfolio is built with TypeScript, Next.js, Framer Motion, and Tailwind CSS. It features a sleek, responsive design with smooth animations, showcasing my skills in modern web development and offering a seamless user experience."
          stack={["NextTs", "Typescript", "Tailwind CSS", "Framer-motion"]}
          pageUrl=""
          codeUrl=""
        />
        <Card
          bgImage={<Image alt="project image here" src="images/flags.png" />}
          name="Flags Of The World"
          details="Flags Of The World is a project created as part of a challenge hosted by Tech-Mentor. The page displays detailed information about countries, allowing users to filter countries by continent, search for specific countries, and click on flags to view more details. "
          stack={["HTML", "CSS", "JavaScript"]}
          pageUrl="https://gvstave.github.io/flagsOfTheWorld/"
          codeUrl="https://github.com/Gvstave/flagsOfTheWorld"
        />
        <Card
          bgImage={<Image alt="project image here" src="images/currency.png" />}
          name="Currency Converter"
          details="Currency Converter offers a real-time currency conversion tool with an intuitive interface, providing accurate exchange rates and a seamless user experience."
          stack={["HTML", "CSS", "JavaScript"]}
          pageUrl="https://gvstave.github.io/Currency-converter/"
          codeUrl="https://github.com/Gvstave/Currency-converter"
        />
        <Card
          bgImage={<Image alt="project image here" src="images/covers.png" />}
          name="Seat Covers"
          details="Seat Covers Site showcases a product catalog with detailed descriptions and images, providing a smooth browsing experience"
          stack={["HTML", "CSS", "Javascript"]}
          pageUrl="https://gvstave.github.io/Seat-Covers-Site/"
          codeUrl="https://github.com/Gvstave/Seat-Covers-Site"
        />
        <Card
          bgImage={<Image alt="project image here" src="images/editor.png" />}
          name="Minix Text Editor"
          details="Minix Text Editor is a text editor that allows users to write and edit content in HTML and CSS formats. Users can also save their work as a PDF, making it a versatile tool for creating and exporting styled content. "
          stack={["HTML", "CSS", "Javascript"]}
          pageUrl="https://github.com/Gvstave/minix_text_editor_renovated"
          codeUrl="https://github.com/Gvstave/minix_text_editor_renovated"
        />
      </div>
    </>
  );
};

export default Projects;
