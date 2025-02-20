import Link from "next/link";

const Header = () => {
  return (
    <nav className="text-gray-500 md:text-xl dark:text-gray-400 w-[full] flex items-center justify-between p-5 font-[family-name:var(--font-geist-sans)]">
      <Link href={""}>Home</Link>
      <Link href={""}>About Me</Link>
      <Link href={""}>Experience</Link>
      <Link href={""}>Skills</Link>
      <Link href={""}>My Services</Link>
      <Link href={""}>Education</Link>
      <Link href={""}>Contact</Link>
    </nav>
  );
};

export default Header;
