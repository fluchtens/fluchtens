"use server";

import { CategoryTitle } from "@/components/ui/CategoryTitle";
import { ReactNode } from "react";
import {
  SiCoursera,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface SkillCategoryProps {
  name: string;
  children: ReactNode;
}

const SkillCategory = ({ name, children }: SkillCategoryProps) => (
  <div className="flex-col flex justify-center items-center gap-1 text-center">
    <label className="text-xl md:text-2xl font-semibold">{name}</label>
    <ul className="flex-col flex text-base md:text-lg font-medium text-zinc-400">{children}</ul>
  </div>
);

interface SkillElementProps {
  name: string;
  icon: ReactNode;
}

const SkillElement = ({ name, icon }: SkillElementProps) => (
  <li className="flex justify-center items-center gap-1.5">
    {icon}
    <span className="">{name}</span>
  </li>
);

export const Skills = () => (
  <section id="skills" className="flex-col flex gap-2 md:gap-5">
    <CategoryTitle title="Skills" />
    <div className="flex-col md:flex-row flex justify-between items-center md:items-start gap-3">
      <SkillCategory name="Languages">
        <SkillElement name="C" icon={<SiCoursera />} />
        <SkillElement name="C++" icon={<SiCplusplus />} />
        <SkillElement name="Javascript" icon={<SiJavascript />} />
        <SkillElement name="Typescript" icon={<SiTypescript />} />
        <SkillElement name="PHP" icon={<SiPhp />} />
      </SkillCategory>
      <SkillCategory name="Frontend">
        <SkillElement name="HTML" icon={<SiHtml5 />} />
        <SkillElement name="CSS" icon={<SiCss3 />} />
        <SkillElement name="Sass" icon={<SiSass />} />
        <SkillElement name="Tailwind" icon={<SiTailwindcss />} />
        <SkillElement name="React" icon={<SiReact />} />
        <SkillElement name="Next.js" icon={<SiNextdotjs />} />
      </SkillCategory>
      <SkillCategory name="Backend">
        <SkillElement name="Express.js" icon={<SiExpress />} />
        <SkillElement name="NestJS" icon={<SiNestjs />} />
        <SkillElement name="Prisma" icon={<SiPrisma />} />
        <SkillElement name="MySQL" icon={<SiMysql />} />
        <SkillElement name="PostgreSQL" icon={<SiPostgresql />} />
      </SkillCategory>
      <SkillCategory name="Tools">
        <SkillElement name="Git/Github" icon={<SiGithub />} />
        <SkillElement name="Docker" icon={<SiDocker />} />
        <SkillElement name="Postman" icon={<SiPostman />} />
      </SkillCategory>
    </div>
  </section>
);
