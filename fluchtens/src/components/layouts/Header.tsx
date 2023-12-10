import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-4 py-5 border-b border-slate-200 border-opacity-10">
      <div className="max-w-screen-lg m-auto flex justify-between">
        <Link href="/">
          <h1 className="text-lg font-medium">fluchtens</h1>
        </Link>
        <div className="flex gap-3 text-base font-light">
          <Link href="#about">Home</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
        </div>
      </div>
    </header>
  );
};
