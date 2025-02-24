import { Github, Radio } from "lucide-react";

interface itemProps {
  bgImage: React.ReactNode;
  name: string;
  details: string;
  stack: string[];
  codeUrl: string; 
  pageUrl: string;
}

const Projects: React.FC<itemProps> = ({
  bgImage,
  name,
  details,
  stack,
  codeUrl,
  pageUrl,
}) => {
  return (
    <div className="text-gray-200 mt-10 bg-[#000] border-2 border-gray-800 shadow-lg shadow-[#111] rounded-lg">
      <div>{bgImage}</div>
      <div className="flex flex-col gap-5 p-5">
        <div className="text-left">
          <h4 className="font-bold text-lg text-white">{name}</h4>
          <p>{details}</p>
        </div>
        <div>
          <ul className="flex flex-row gap-4">
            {stack.map((item, index) => (
              <li key={index} className="px-2 border-2 border-gray-800 rounded">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-8 items-center text-green-500">
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1 hover:text-green-600"
          >
            <Github /> Code
          </a>
          <a
            href={pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1 hover:text-green-600"
          >
            <Radio /> Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
