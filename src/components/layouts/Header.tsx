import Link from "next/link";
import { NavLinks } from "../ui/NavLinks";

export const Header = () => (
  <header className="px-4 py-5 border-b border-slate-200 border-opacity-10">
    <div className="max-w-screen-lg m-auto flex justify-between">
      <Link href="/">
        <h1 className="text-lg font-medium">fluchtens</h1>
      </Link>
      <NavLinks />
    </div>
  </header>
);
