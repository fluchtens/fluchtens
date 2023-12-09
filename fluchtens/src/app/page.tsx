import { SocialLink } from "@/components/ui/SocialLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-10 flex flex-col gap-1">
      <span className="text-2xl font-semibold">Hi there 👋</span>
      <h1 className="text-7xl font-bold">Francois Luchtens</h1>
      <h2 className="text-4xl font-semibold text-zinc-400">
        Full Stack Developer
      </h2>
      <p className="text-lg font-normal text-zinc-400">
        Passionate about new technologie and computer programming, I'm currently
        computer sciences student at 19 (@42 Network) in Brussels.
      </p>
      <div className="mt-1 flex items-center gap-2">
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

export default function Home() {
  return (
    <main className="max-w-screen-lg m-auto flex-col flex justify-center items-center gap-20">
      <About />
    </main>
  );
}
