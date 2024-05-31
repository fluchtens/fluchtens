"use server";

import { Language, LanguageElement } from "./LanguageElement";
import { ProjectPreviewBtn, ProjectSoureCodeBtn } from "./ProjectButtons";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
interface ProjectElementProps {
  name: string;
  desc: string;
  fullDesc: string;
  link: string;
  source: string;
  languages: Language[];
}

export const ProjectElement = ({
  name,
  desc,
  fullDesc,
  link,
  source,
  languages,
}: ProjectElementProps) => (
  <Dialog>
    <DialogTrigger className="p-2 h-full flex flex-col rounded-xl bg-card hover:bg-card/80 text-left">
      <img
        src={`/projects/${name}/${name}_1.webp`}
        alt={`${name}_1.webp`}
        className="rounded-md pointer-events-none"
      />
      <div className="p-2 flex-col flex gap-1">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm font-normal text-zinc-400">{desc}</p>
        <ul className="mt-2 flex-wrap flex items-center gap-2">
          {languages.map((language, index) => (
            <LanguageElement key={index} language={language} />
          ))}
        </ul>
      </div>
    </DialogTrigger>
    <DialogContent className="max-w-screen-sm w-full p-3 sm:p-6">
      <DialogHeader className="flex-col flex gap-1">
        <DialogTitle>{name}</DialogTitle>
        <img
          src={`/projects/${name}/${name}_1.webp`}
          alt={`${name}_1.webp`}
          className="w-auto rounded-lg pointer-events-none"
        />
        <DialogDescription className="text-zinc-400">{fullDesc}</DialogDescription>
        <ul className="flex-wrap flex justify-center sm:justify-start items-center gap-2">
          {languages.map((language, index) => (
            <LanguageElement key={index} language={language} />
          ))}
        </ul>
      </DialogHeader>
      <DialogFooter className="mx-auto sm:mx-0 sm:ml-auto pt-4 sm:pt-6 flex-col sm:flex-row flex items-center gap-2">
        {link && <ProjectPreviewBtn link={link} />}
        <ProjectSoureCodeBtn link={source} />
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
