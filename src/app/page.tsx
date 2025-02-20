import Header from "./segments/header/page";
import Introduction from "./segments/main/introduction/page";

export default function Home() {
  return (
    <div>
      <header  className="w-full h-[auto] fixed top-0 left-0 right-0 font-[family-name:var(--font-geist-sans)]">
        <Header />
      </header>
      <main className="w-full h-dvh flex items-center">
        <Introduction />
      </main>
    </div>
  );
}
