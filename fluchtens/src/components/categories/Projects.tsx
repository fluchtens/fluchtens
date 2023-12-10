import { CategoryTitle } from "@/components/ui/CategoryTitle";
import { FaGithub } from "react-icons/fa";
import { Language, LanguageElement } from "../ui/LanguageElement";

interface ProjectElementProps {
  name: string;
  desc: string;
  source: string;
  reverse: boolean;
  languages: Language[];
}

const ProjectElement = ({
  name,
  desc,
  source,
  reverse,
  languages,
}: ProjectElementProps) => (
  <li className="p-6 rounded-lg bg-secondary">
    <div className="flex-col lg:flex-row flex justify-center items-start gap-6">
      <img
        src="/projects/cub3d/cub3d_1.png"
        alt="cub3d_1.png"
        className="max-w-[384px] w-[384px] h-[216px]"
      />
      <div className="flex-col flex gap-2">
        <div className="flex-col flex gap-1">
          <div className="flex justify-between items-center">
            <label className="text-3xl font-semibold">{name}</label>
            <SoureCodeBtn link={source} />
          </div>
          <p className="text-base font-normal text-zinc-400">{desc}</p>
        </div>
        <ul className="flex-wrap flex items-center gap-2">
          {languages.map((language) => (
            <LanguageElement key={language} language={language} />
          ))}
        </ul>
      </div>
    </div>
  </li>
);

const SoureCodeBtn = ({ link }: { link: string }) => (
  <a
    href={link}
    className="p-2 flex justify-center items-center rounded-md bg-zinc-700 hover:bg-zinc-600"
  >
    <FaGithub className="text-base text-white" />
  </a>
);

export const Projects = () => (
  <div className="flex-col flex gap-5">
    <CategoryTitle title="Projects" />
    <ul className="flex-col flex gap-4">
      <ProjectElement
        name="ft_transcendence"
        desc="Modern multiplayer pong game web application in React and NestJS made for 42."
        source="https://github.com/fluchtens/ft_transcendence"
        reverse={false}
        languages={[
          Language.TypeScript,
          Language.React,
          Language.NestJS,
          Language.Prisma,
        ]}
      />
      <ProjectElement
        name="cub3d"
        desc="A simple 3D raycasting rendering in C using the MiniLibX library.
          Produced during the common core of 42, this project was inspired by
          the world-famous Wolfenstein 3D game, which was the first FPS ever."
        source="https://github.com/fluchtens/cub3d"
        reverse={true}
        languages={[Language.C]}
      />
    </ul>
  </div>
);
