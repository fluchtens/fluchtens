"use client";

import { ReactNode } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiCoursera,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSass,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export enum Language {
  C = "C",
  CPlusPlus = "CPlusPlus",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Java = "Java",
  PHP = "PHP",

  HTML = "HTML",
  CSS = "CSS",
  Sass = "Sass",
  Tailwind = "Tailwind",
  React = "React",
  NextJS = "NextJS",
  Angular = "Angular",

  NodeJS = "NodeJS",
  ExpressJS = "ExpressJS",
  NestJS = "NestJS",
  SpringBoot = "SpringBoot",

  MySQL = "MySQL",
  PostgreSQL = "PostgreSQL",
  Prisma = "Prisma",
  Hibernate = "Hibernate",
}

export const LanguageElement = ({ language }: { language: Language }) => {
  let name: string | undefined;
  let icon: ReactNode | undefined;

  switch (language) {
    case Language.C:
      name = "C";
      icon = <SiCoursera className="text-xs" />;
      break;
    case Language.CPlusPlus:
      name = "C++";
      icon = <SiCplusplus className="text-xs" />;
      break;
    case Language.TypeScript:
      name = "Typescript";
      icon = <SiTypescript className="text-xs" />;
      break;
    case Language.JavaScript:
      name = "JavaScript";
      icon = <SiJavascript className="text-xs" />;
      break;
    case Language.Java:
      name = "Java";
      icon = <FaJava className="text-xs" />;
      break;
    case Language.PHP:
      name = "PHP";
      icon = <SiPhp className="text-xs" />;
      break;

    case Language.HTML:
      name = "HTML";
      icon = <SiHtml5 className="text-xs" />;
      break;
    case Language.CSS:
      name = "CSS";
      icon = <SiCss3 className="text-xs" />;
      break;
    case Language.Sass:
      name = "Sass";
      icon = <SiSass className="text-xs" />;
      break;
    case Language.Tailwind:
      name = "Tailwind";
      icon = <SiTailwindcss className="text-xs" />;
      break;
    case Language.React:
      name = "React";
      icon = <SiReact className="text-xs" />;
      break;
    case Language.NextJS:
      name = "Next.js";
      icon = <SiNextdotjs className="text-xs" />;
      break;
    case Language.Angular:
      name = "Angular";
      icon = <SiAngular className="text-xs" />;
      break;

    case Language.NodeJS:
      name = "Node.js";
      icon = <SiNodedotjs className="text-xs" />;
      break;
    case Language.ExpressJS:
      name = "Express.js";
      icon = <SiExpress className="text-xs" />;
      break;
    case Language.NestJS:
      name = "NestJS";
      icon = <SiNestjs className="text-xs" />;
      break;
    case Language.SpringBoot:
      name = "Spring Boot";
      icon = <SiSpringboot className="text-xs" />;
      break;

    case Language.MySQL:
      name = "MySQL";
      icon = <SiMysql className="text-xs" />;
      break;
    case Language.PostgreSQL:
      name = "PostgreSQL";
      icon = <SiPostgresql className="text-xs" />;
      break;
    case Language.Prisma:
      name = "Prisma";
      icon = <SiPrisma className="text-xs" />;
      break;
    case Language.Hibernate:
      name = "Hibernate";
      icon = <SiHibernate className="text-xs" />;
      break;
    default:
      name = undefined;
      break;
  }

  return (
    <li className="py-1 px-3 flex items-center gap-1.5 rounded-full bg-zinc-700">
      {icon}
      <span className="text-xs font-normal">{name}</span>
    </li>
  );
};
