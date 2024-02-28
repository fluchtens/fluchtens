"use client";

import { useEffect, useRef } from "react";
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
}: ProjectModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full p-4 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative max-w-screen-md p-4 md:px-6 flex-col flex gap-2 bg-secondary rounded-xl">
        <button onClick={close} className="absolute top-0 right-0 px-4 py-3">
          <p className="text-xl font-medium">X</p>
        </button>
        <h1 className="text-2xl font-bold">{name}</h1>
        <img
          src={`/projects/${name}/${name}_1.png`}
          alt={`${name}_1.png`}
          className="w-auto rounded-lg pointer-events-none"
        />
        <p className="text-sm font-normal text-zinc-400">{desc}</p>
        <ul className="flex-wrap flex justify-center sm:justify-normal items-center gap-2">
          {languages.map((language, index) => (
            <LanguageElement key={index} language={language} />
          ))}
        </ul>
      </div>
    </div>
  );
};
