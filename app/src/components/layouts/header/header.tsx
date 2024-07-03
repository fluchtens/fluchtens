"use server";

import Link from "next/link";
import { GithubButton } from "./github-button";

export const Header = () => (
  <header className="px-4 sm:px-6 py-3 border-b">
    <div className="max-w-screen-xl m-auto flex justify-between items-center">
      <Link href="/">
        <h1 className="py-2 text-lg font-medium">fluchtens.com</h1>
      </Link>
      <div className="flex items-center">
        <GithubButton />
      </div>
    </div>
  </header>
);
