"use server";

import { Button } from "@/components/ui/button";
import { Config } from "@/types/config.interface";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactNode } from "react";
const config: Config = require("@/config.json");

const SocialButton = ({ href, icon }: { href: string; icon: ReactNode }) => {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href={href} target="_blank">
        {icon}
      </Link>
    </Button>
  );
};

export const Header = () => (
  <header className="px-4 sm:px-6 py-3 border-b">
    <div className="max-w-screen-xl m-auto flex justify-between items-center">
      <Link href="/">
        <h1 className="py-2 text-lg font-medium">fluchtens.com</h1>
      </Link>
      <div className="flex items-center">
        <SocialButton href={config.links.github} icon={<GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />} />
        <SocialButton href={config.links.linkedin} icon={<LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem]" />} />
      </div>
    </div>
  </header>
);
