"use server";

import { CategoryTitle } from "@/components/utils/category-title";
import { Config } from "@/types/config.interface";
import Link from "next/link";

const config: Config = require("@/config.json");

interface SchoolProps {
  name: string;
  desc: string;
  image: string;
  link: string;
  date: string;
}

const School = ({ name, desc, image, link, date }: SchoolProps) => (
  <li className="flex items-center gap-3 sm:gap-4">
    <div className="px-1.5 w-14 h-14 sm:w-16 sm:h-16 flex justify-center items-center rounded-xl bg-white">
      <img src={image} alt="School Logo" />
    </div>
    <div className="w-full flex flex-col sm:flex-row sm:justify-between">
      <div className="flex flex-col">
        <Link href={link} target="_blank" className="text-sm sm:text-base font-semibold">
          {name}
        </Link>
        <span className="text-xs sm:text-sm text-muted-foreground">{desc}</span>
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground">{date}</span>
    </div>
  </li>
);

export const Education = () => (
  <section id="education" className="flex-col flex gap-2 md:gap-5">
    <CategoryTitle title="Education" />
    <ul className="flex flex-col gap-3 sm:gap-6">
      {config.education.map((school, index) => (
        <School key={index} name={school.name} desc={school.desc} image={school.image} link={school.link} date={school.date} />
      ))}
    </ul>
  </section>
);
