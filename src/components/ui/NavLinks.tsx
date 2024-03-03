"use client";

import Link from "next/link";

export const NavLinks = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex gap-3 text-base font-light">
      <Link
        href="#about"
        onClick={handleScroll}
        className="hover:text-zinc-400"
      >
        About
      </Link>
      <Link
        href="#skills"
        onClick={handleScroll}
        className="hover:text-zinc-400"
      >
        Skills
      </Link>
      <Link
        href="#projects"
        onClick={handleScroll}
        className="hover:text-zinc-400"
      >
        Projects
      </Link>
    </div>
  );
};
