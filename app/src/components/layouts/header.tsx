"use server";

import { SocialButton } from "@/components/ui/social-button";
import { Config } from "@/types/config.interface";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const config: Config = require("@/config.json");

export const Header = () => (
  <header className="px-4 sm:px-6 py-3 border-b">
    <div className="max-w-screen-lg m-auto flex justify-between items-center">
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
