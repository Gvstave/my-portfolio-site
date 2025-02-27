import { Github, Radio } from "lucide-react";

interface itemProps {
  bgImage: React.ReactNode;
  name: string;
  details: string;
  stack: string[];
  codeUrl: string; 
  pageUrl: string;
}

const Card: React.FC<itemProps> = ({
  bgImage,
  name,
  details,
  stack,
  codeUrl,
  pageUrl,
}) => {
  return (
    <div className="text-gray-200 mt-10 bg-[#000] border-2 border-gray-800 shadow-md hover:shadow-lg rounded-lg">
      <div>{bgImage}</div>
      <div className="flex flex-col gap-5 p-5">
        <div className="text-left">
          <h4 className="font-bold text-lg text-white">{name}</h4>
          <p>{details}</p>
        </div>
        <div>
          <ul className="">
            {stack.map((item, index) => (
              <li key={index} className="px-2 py-1 border-2 border-gray-800 rounded text-sm inline-flex mr-3 ml-0 mt-0 mb-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-8 items-center text-green-400">
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

export default Card;
