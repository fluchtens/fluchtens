"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Language } from "./LanguageElement";
import { ProjectModal } from "./ProjectModal";

interface ProjecPictureProps {
  name: string;
  desc: string;
  languages: Language[];
}

export const ProjetPicture = ({ name, desc, languages }: ProjecPictureProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        <Image
          src={`/projects/${name}/${name}_1.png`}
          alt={`${name}_1.png`}
          width={500}
          height={500}
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
