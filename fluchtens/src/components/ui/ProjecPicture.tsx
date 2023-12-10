"use client";

import Image from "next/image";

export const ProjetPicture = ({ name }: { name: string }) => (
  <Image
    src={`/projects/${name}/${name}_1.png`}
    alt={`${name}_1.png`}
    className="md:max-w-[384px] md:max-h-[216px]"
  />
);
