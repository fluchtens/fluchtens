import { ReactNode } from "react";
import { CategoryTitle } from "@/components/ui/CategoryTitle";
import {
  SiCoursera,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface SkillCategoryProps {
  name: string;
  children: ReactNode;
}

const SkillCategory = ({ name, children }: SkillCategoryProps) => (
  <div className="flex-col flex justify-center items-center gap-1 text-center">
    <label className="text-2xl font-semibold">{name}</label>
    <ul className="flex-col flex text-lg font-medium">{children}</ul>
  </div>
);

interface SkillElementProps {
  name: string;
  icon: ReactNode;
}

const SkillElement = ({ name, icon }: SkillElementProps) => (
  <li className="flex justify-center items-center gap-1.5">
    {icon}
    <span className="text-zinc-400">{name}</span>
  </li>
);

export const Skills = () => (
  <div className="flex-col flex gap-5">
    <CategoryTitle title="Skills" />
    <div className="flex justify-between items-start">
      <SkillCategory name="Languages">
        <SkillElement
          name="C"
          icon={<SiCoursera className="text-xl text-zinc-400" />}
        />
        <SkillElement
          name="C++"
          icon={<SiCplusplus className="text-xl text-zinc-400" />}
        />
        <SkillElement
          name="Javascript"
          icon={<SiJavascript className="text-xl text-zinc-400" />}
        />
        <SkillElement
          name="Typescript"
          icon={<SiTypescript className="text-xl text-zinc-400" />}
        />
      </SkillCategory>
      <SkillCategory name="Frontend">
        <SkillElement
          name="HTML"
          icon={<SiHtml5 className="text-xl text-zinc-400" />}
        />
        <SkillElement
          name="CSS"
          icon={<SiCss3 className="text-xl text-zinc-400" />}
        />
        <SkillElement
          name="Tailwind"
          icon={<SiTailwindcss className="text-xl text-zinc-400" />}
        />
        <SkillElement
          name="React"
          icon={<SiReact className="text-xl text-zinc-400" />}
        />
        <SkillElement
          name="Next.js"
          icon={<SiNextdotjs className="text-xl text-zinc-400" />}
        />
      </SkillCategory>
      <SkillCategory name="Backend">
        <SkillElement
          name="NestJS"
          icon={<SiNestjs className="text-xl text-zinc-400" />}
        />
        <SkillElement
          name="Prisma"
          icon={<SiPrisma className="text-xl text-zinc-400" />}
        />
      </SkillCategory>
      <SkillCategory name="Tools">
        <SkillElement
          name="Git/Github"
          icon={<SiGithub className="text-xl text-zinc-400" />}
        />
        <SkillElement
          name="Docker"
          icon={<SiDocker className="text-xl text-zinc-400" />}
        />
      </SkillCategory>
    </div>
  </div>
);
