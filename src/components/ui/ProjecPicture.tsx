"use client";

import { useState } from "react";
import { Language } from "./LanguageElement";
import { ProjectModal } from "./ProjectModal";

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

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        <img
          src={`/projects/${name}/${name}_1.png`}
          alt={`${name}_1.png`}
          className="w-auto rounded pointer-events-none"
        />
      </button>
      {isModalOpen && (
        <ProjectModal
          name={name}
          desc={desc}
          languages={languages}
          close={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
