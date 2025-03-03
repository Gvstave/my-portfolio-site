import Image from "next/image";

const Hero = () => {
    return (
        <div className="hidden lg:block w-[200px]">
          <Image src="images/hero.jpg" alt="my picture" width={200} height={200} className="w-full rounded" />
        </div>
    );
  };
  
  export default Hero;