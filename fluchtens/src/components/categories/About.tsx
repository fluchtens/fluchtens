import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "../ui/SocialLink";

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
