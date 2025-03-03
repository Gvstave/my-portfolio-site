import Card from "./Card";
import Image from "next/image";

const Contribute = () => {
  return (
    <>
      <div>
        <h4 className="text-2xl md:text-3xl lg:text-3xl font-bold">
          Contributed
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <Card
          bgImage={<Image alt="none" src="images/songs.png" />}
          name="SOS Songs"
          details="SoSongs is a hymnal song platform featuring songs from church choirs. Users can search and view a variety of hymnal songs hosted on the page. Built with modern web technologies, this app provides an interactive and easy way to access and explore religious music."
          stack={["React", "Typescript", "Javascript", "CSS", "HTML"]}
          pageUrl="https://sosongs.vercel.app/"
          codeUrl="https://github.com/Gvstave/sos"
        />
        <Card
          bgImage={<Image alt="none" src="images/spark.png" />}
          name="SparkEd"
          details="SparkedNext is a collaborative library system designed to streamline the management and access of resources. As a contributor, I helped enhance its features, focusing on improving user experience and functionality. The system allows users to easily search, borrow, and manage library materials."
          stack={["Nextjs", "React", "Typescript", "Tailwind CSS", "MongoDB"]}
          pageUrl="https://sparkednext.app/"
          codeUrl="https://github.com/Gvstave/sparked-next"
        />
      </div>
    </>
  );
};

export default Contribute;
