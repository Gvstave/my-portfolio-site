import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Button = () => {
  return (
    <div className="absolute bottom-20">
      <div className="flex justify-center -z-40">
        <Link href={""} className="animate-bounce inline-flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-full hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-xl">
          Learn More <ArrowDown className="animate-pulse" />
        </Link>
      </div>
    </div>
  );
};

export default Button;