"use client";

import { Language, LanguageElement } from "./LanguageElement";

interface ProjectModalProps {
  name: string;
  desc: string;
  languages: Language[];
  close: () => void;
}

export const ProjectModal = ({
  name,
  desc,
  languages,
  close,
}: ProjectModalProps) => (
  <div className="fixed top-0 left-0 w-full h-full md:p-4 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="relative max-w-screen-md h-full md:h-auto p-4 md:p-6 flex-col flex gap-3 bg-secondary rounded:none md:rounded-xl overflow-y-auto">
      <button
        className="absolute top-0 right-0 px-4 py-3 hover:text-zinc-400"
        onClick={close}
      >
        <p className="text-xl font-medium">X</p>
      </button>
      <h1 className="text-lg md:text-2xl font-semibold">{name}</h1>
      <img
        src={`/projects/${name}/${name}_1.png`}
        alt={`${name}_1.png`}
        className="w-auto rounded-lg pointer-events-none"
      />
      <p className="text-sm md:text-base font-normal text-zinc-400">{desc}</p>
      <ul className="flex-wrap flex items-center gap-2">
        {languages.map((language, index) => (
          <LanguageElement key={index} language={language} />
        ))}
      </ul>
    </div>
  </div>
);
