"use client";

interface ProjecPictureProps {
  name: string;
  vertical?: boolean;
}

export const ProjetPicture = ({ name, vertical }: ProjecPictureProps) => (
  <img
    src={`/projects/${name}/${name}_1.png`}
    alt={`${name}_1.png`}
    className={`${
      vertical
        ? "md:max-w-full md:max-h-full"
        : "md:max-w-[426px] md:max-h-[260px]"
    }`}
  />
);
