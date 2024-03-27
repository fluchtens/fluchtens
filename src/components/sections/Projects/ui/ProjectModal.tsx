"use server";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Language, LanguageElement } from "./LanguageElement";

interface ProjectModalProps {
  name: string;
  desc: string;
  languages: Language[];
}

export const ProjectModal = ({ name, desc, languages }: ProjectModalProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <img
            src={`/projects/${name}/${name}_1.webp`}
            alt={`${name}_1.webp`}
            className="w-auto rounded pointer-events-none"
          />
        </DialogTrigger>
        <DialogContent className="max-w-screen-sm w-full">
          <DialogHeader className="flex-col flex gap-1">
            <DialogTitle>{name}</DialogTitle>
            <img
              src={`/projects/${name}/${name}_1.webp`}
              alt={`${name}_1.webp`}
              className="w-auto rounded-lg pointer-events-none"
            />
            <DialogDescription className="text-zinc-400">{desc}</DialogDescription>
            <ul className="flex-wrap flex justify-center sm:justify-start items-center gap-2">
              {languages.map((language, index) => (
                <LanguageElement key={index} language={language} />
              ))}
            </ul>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
