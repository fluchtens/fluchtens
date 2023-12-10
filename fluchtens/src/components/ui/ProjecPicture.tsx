"use client";

export const ProjetPicture = ({ name }: { name: string }) => (
  <img
    src={`/projects/${name}/${name}_1.png`}
    alt={`${name}_1.png`}
    className="md:max-w-[384px] md:max-h-[216px]"
  />
);
