import Header from "./segments/header/page";
import Introduction from "./segments/main/introduction/page";
import About from "./segments/main/about/page";
import Works from "./segments/main/works/page";

export default function Home() {

  return (
      <>
      <header className="z-40 bg-black w-full h-[auto] fixed top-0 left-0 right-0">
        <Header />
      </header>
      <main className="">
        <Introduction />
        <About />
        <Works />
      </main>
      </>
  );
}
