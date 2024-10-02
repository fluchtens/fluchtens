"use server";

import { CategoryTitle } from "@/components/utils/category-title";
import { Config } from "@/types/config.interface";
import { School } from "./school";

const config: Config = require("@/config.json");

export const Education = () => (
  <section id="education" className="flex-col flex gap-2 md:gap-5">
    <CategoryTitle title="Education" />
    <ul className="flex flex-col gap-6">
      {config.education.map((school, index) => (
        <School key={index} name={school.name} desc={school.desc} image={school.image} link={school.link} date={school.date} />
      ))}
    </ul>
  </section>
);
