"use client";

interface ProjecPictureProps {
  name: string;
}

export const ProjetPicture = ({ name }: ProjecPictureProps) => (
  <img
    src={`/projects/${name}/${name}_1.png`}
    alt={`${name}_1.png`}
    className="w-auto rounded pointer-events-none"
  />
);
