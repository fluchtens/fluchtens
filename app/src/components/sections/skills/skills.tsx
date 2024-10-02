"use server";

import { CategoryTitle } from "@/components/utils/category-title";
import { ReactNode } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiCoursera,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGnubash,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSass,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const SkillCategory = ({ name, children }: { name: string; children: ReactNode }) => (
  <div>
    <label className="text-base font-semibold">{name}</label>
    <ul className="mt-1 flex flex-wrap gap-2 text-muted-foreground">{children}</ul>
  </div>
);

const SkillElement = ({ name, icon }: { name: string; icon: ReactNode }) => (
  <li className="py-1 px-3 flex justify-center items-center gap-2 rounded-full bg-card">
    {icon}
    <span className="text-xs md:text-sm font-medium">{name}</span>
  </li>
);

export const Skills = () => (
  <section id="skills" className="flex-col flex gap-2 md:gap-5">
    <CategoryTitle title="Skills" />
    <div className="flex flex-col items-start gap-3 md:gap-6">
      <SkillCategory name="Languages">
        <SkillElement name="C" icon={<SiCoursera />} />
        <SkillElement name="C++" icon={<SiCplusplus />} />
        <SkillElement name="Javascript" icon={<SiJavascript />} />
        <SkillElement name="Typescript" icon={<SiTypescript />} />
        <SkillElement name="Java" icon={<FaJava />} />
        <SkillElement name="PHP" icon={<SiPhp />} />
      </SkillCategory>
      <SkillCategory name="Frontend">
        <SkillElement name="HTML" icon={<SiHtml5 />} />
        <SkillElement name="CSS" icon={<SiCss3 />} />
        <SkillElement name="React" icon={<SiReact />} />
        <SkillElement name="Next.js" icon={<SiNextdotjs />} />
        <SkillElement name="Vue" icon={<SiVuedotjs />} />
        <SkillElement name="Sass" icon={<SiSass />} />
        <SkillElement name="Tailwind" icon={<SiTailwindcss />} />
      </SkillCategory>
      <SkillCategory name="Backend">
        <SkillElement name="Node.js" icon={<SiNodedotjs />} />
        <SkillElement name="Express.js" icon={<SiExpress />} />
        <SkillElement name="NestJS" icon={<SiNestjs />} />
        <SkillElement name="Spring Boot" icon={<SiSpringboot />} />
      </SkillCategory>
      <SkillCategory name="Database">
        <SkillElement name="MySQL" icon={<SiMysql />} />
        <SkillElement name="PostgreSQL" icon={<SiPostgresql />} />
        <SkillElement name="Prisma" icon={<SiPrisma />} />
        <SkillElement name="Hibernate" icon={<SiHibernate />} />
      </SkillCategory>
      <SkillCategory name="Tools">
        <SkillElement name="Git" icon={<SiGit />} />
        <SkillElement name="Github" icon={<SiGithub />} />
        <SkillElement name="Bash" icon={<SiGnubash />} />
        <SkillElement name="Docker" icon={<SiDocker />} />
        <SkillElement name="Postman" icon={<SiPostman />} />
      </SkillCategory>
    </div>
  </section>
);
