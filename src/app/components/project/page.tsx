"use client";
import { Github } from "lucide-react";
import { Radio } from "lucide-react";

interface itemProps {
  bgImage: React.ReactNode;
  name: string;
  details: string; // Keep this as an array
  stack: string[]; // Updated to an array to match the implementation
  code: React.ReactNode;
  preview: React.ReactNode;
}

const Projects: React.FC<itemProps> = ({
  bgImage,
  name,
  details,
  stack,
  code,
  preview
}) => {
  return (
    <div className="bg-green-400">
      <div>{bgImage}</div>
      <div>
        <h4>{name}</h4>
        <p>{details}</p>
      </div>
      <div>
        <ul>
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <span>{code}</span>
        <span>{preview}</span>
      </div>
    </div>
  );
};

export default Projects;