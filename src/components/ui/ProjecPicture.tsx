"use client";

interface ProjecPictureProps {
  name: string;
}

export const ProjetPicture = ({ name }: ProjecPictureProps) => (
  <img
    src={`/projects/${name}/${name}_1.png`}
    alt={`${name}_1.png`}
    className="md:max-w-[426px] md:max-h-[260px]"
  />
);
