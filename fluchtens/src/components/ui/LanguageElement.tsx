import { ReactNode } from "react";
import {
  SiCoursera,
  SiCplusplus,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export enum Language {
  C,
  CPlusPlus,
  TypeScript,
  JavaScript,
  HTML,
  CSS,
  Tailwind,
  React,
  NextJS,
  NestJS,
  Prisma,
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
    case Language.JavaScript:
      name = "JavaScript";
      icon = <SiJavascript className="text-xs" />;
      break;
    case Language.TypeScript:
      name = "Typescript";
      icon = <SiTypescript className="text-xs" />;
      break;
    case Language.HTML:
      name = "HTML";
      icon = <SiHtml5 className="text-xs" />;
      break;
    case Language.CSS:
      name = "CSS";
      icon = <SiCss3 className="text-xs" />;
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

    case Language.NestJS:
      name = "NestJS";
      icon = <SiNestjs className="text-xs" />;
      break;
    case Language.Prisma:
      name = "Prisma";
      icon = <SiPrisma className="text-xs" />;
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
