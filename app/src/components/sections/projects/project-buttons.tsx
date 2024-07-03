"use server";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const ProjectPreviewBtn = ({ link }: { link: string }) => (
  <Button asChild variant="default" className="px-3 py-2">
    <Link href={link} target="_blank" className="flex items-center gap-1.5">
      <FiExternalLink className="text-base text-primary-foreground" />
      Preview
    </Link>
  </Button>
);

export const ProjectSoureCodeBtn = ({ link }: { link: string }) => (
  <Button asChild variant="secondary" className="px-3 py-2">
    <Link href={link} target="_blank" className="flex items-center gap-1.5">
      <FaGithub className="text-base text-secondary-foreground" />
      Source code
    </Link>
  </Button>
);
