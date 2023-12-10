import Link from "next/link";
import { NavLink } from "../ui/NavLink";

export const Header = () => {
  return (
    <header className="px-4 py-5 border-b border-slate-200 border-opacity-10">
      <div className="max-w-screen-lg m-auto flex justify-between">
        <Link href="/">
          <h1 className="text-lg font-medium">fluchtens</h1>
        </Link>
        <NavLink />
      </div>
    </header>
  );
};
