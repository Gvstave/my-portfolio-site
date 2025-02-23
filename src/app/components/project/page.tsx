"use client";

interface itemProps {
  bgImage: React.ReactNode;
  name: string;
  details: string;
  stack: string[];
  code: React.ReactNode;
  preview: React.ReactNode;
}

const Projects: React.FC<itemProps> = ({
  bgImage,
  name,
  details,
  stack,
  code,
  preview,
}) => {
  return (
    <div className="mt-10 bg-white pb-1 border-2 border-black-900 border-solid">
      <div className="border-b-2">{bgImage}</div>
      <div className="text-left m-5">
        <h4 className="font-bold text-md mb-3">{name}</h4>
        <p>{details}</p>
      </div>
      <div className="m-5">
        <ul className="flex flex-row gap-4">
          {stack.map((item, index) => (
            <li
              key={index}
              className="px-2 bg-gray-200 border-red-400 rounded"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-4 items-center m-5">
        <a className="flex flex-row">{code}Code</a>
        <a className="flex flex-row">{preview}Live Preview</a>
      </div>
    </div>
  );
};

export default Projects;
