"use server";

import { Button } from "@/components/ui/button";
import { Config } from "@/types/config.interface";
import Link from "next/link";
import { ReactNode } from "react";
const config: Config = require("@/config.json");

export const SocialButton = ({ href, icon }: { href: string; icon: ReactNode }) => {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href={href} target="_blank">
        {icon}
      </Link>
    </Button>
  );
};
