"use server";

import { ReactNode } from "react";

interface SocialLinkProps {
  name: string;
  mail: boolean;
  link: string;
  icon: ReactNode;
}

export const SocialLink = ({ name, mail, link, icon }: SocialLinkProps) => {
  const href = mail ? `mailto:${link}` : link;

  return (
    <a
      href={href}
      target="_blank"
      className="py-1.5 md:py-2 px-2.5 md:px-3 flex items-center gap-1.5 rounded-md bg-[#7364D0] hover:bg-[#867DD8]"
    >
      {icon}
      <span className="text-sm md:text-base font-normal md:font-medium text-white">{name}</span>
    </a>
  );
};
