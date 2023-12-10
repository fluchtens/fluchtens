import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialLinkProps {
  name: string;
  link: string;
  icon: ReactNode;
}

const SocialLink = ({ name, link, icon }: SocialLinkProps) => (
  <a
    href={link}
    className="py-2 px-3 flex items-center gap-1.5 rounded-md bg-[#7364D0] hover:bg-[#867DD8]"
  >
    {icon}
    <span className="text-base font-medium text-white">{name}</span>
  </a>
);

export const About = () => {
  return (
    <div className="flex-col flex items-center md:items-start gap-1 text-center md:text-left">
      <span className="text-xl md:text-2xl font-semibold">Hi there 👋</span>
      <h1 className="text-3xl md:text-6xl font-bold">Francois Luchtens</h1>
      <h2 className="text-xl md:text-3xl font-semibold text-zinc-400">
        Full Stack Developer
      </h2>
      <p className="text-sm md:text-lg font-normal text-zinc-400">
        Passionate about new technologie and computer programming, I am
        currently computer sciences student at 19 (@42 Network) in Brussels.
      </p>
      <div className="mt-2 flex items-center gap-2">
        <SocialLink
          name="Github"
          link="https://github.com/fluchtens"
          icon={<FaGithub className="text-xl text-white" />}
        />
        <SocialLink
          name="Linkedin"
          link="https://www.linkedin.com/in/fluchtens"
          icon={<FaLinkedin className="text-xl text-white" />}
        />
      </div>
    </div>
  );
};
