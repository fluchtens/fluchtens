"use client";

import Link from "next/link";

export const NavLink = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // get the ref and remove everything before the hash
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex gap-3 text-base font-light">
      <Link href="#about" onClick={handleScroll}>
        About
      </Link>
      <Link href="#skills" onClick={handleScroll}>
        Skills
      </Link>
      <Link href="#projects" onClick={handleScroll}>
        Projects
      </Link>
    </div>
  );
};
