"use client";

import { useState } from "react";
import { Language, LanguageElement } from "./LanguageElement";

interface ProjecPictureProps {
  name: string;
  desc: string;
  languages: Language[];
}

export const ProjetPicture = ({
  name,
  desc,
  languages,
}: ProjecPictureProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button onClick={openProjectModal}>
        <img
          src={`/projects/${name}/${name}_1.png`}
          alt={`${name}_1.png`}
          className="w-auto rounded pointer-events-none"
        />
      </button>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full p-4 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="max-w-screen-md	p-6 flex-col flex gap-2 bg-secondary rounded-xl">
            <h1 className="text-2xl font-bold">{name}</h1>
            <img
              src={`/projects/${name}/${name}_1.png`}
              alt={`${name}_1.png`}
              className="w-auto rounded-lg pointer-events-none"
            />
            <p className="text-base font-normal text-zinc-400">{desc}</p>
            <ul className="flex-wrap flex justify-center sm:justify-normal items-center gap-2">
              {languages.map((language, index) => (
                <LanguageElement key={index} language={language} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
