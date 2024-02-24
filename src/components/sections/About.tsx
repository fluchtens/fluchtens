import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SocialLink } from "../ui/SocialLink";

export const About = () => (
  <section
    id="about"
    className="flex-col-reverse	md:flex-row flex justify-between items-center gap-3 md:gap-10"
  >
    <div className="flex-col flex items-center md:items-start gap-1 text-center md:text-left">
      <span className="text-xl md:text-2xl font-semibold">Hi there 👋</span>
      <h1 className="text-3xl md:text-6xl font-bold">Francois Luchtens</h1>
      <h2 className="text-xl md:text-3xl font-semibold text-zinc-400">
        Full Stack Developer
      </h2>
      <p className="text-sm md:text-lg font-normal text-zinc-400">
        Passionate about new technologies and computer programming, I am
        currently computer sciences student at 19 (@42 Network) in Brussels.
      </p>
      <div className="mt-2 flex-col md:flex-row flex items-center gap-2">
        <SocialLink
          name="Github"
          mail={false}
          link="https://github.com/fluchtens"
          icon={<FaGithub className="text-xl text-white" />}
        />
        <SocialLink
          name="Linkedin"
          mail={false}
          link="https://www.linkedin.com/in/fluchtens"
          icon={<FaLinkedin className="text-xl text-white" />}
        />
        <SocialLink
          name="fluchtens.pro@gmail.com"
          mail={true}
          link="https://www.linkedin.com/in/fluchtens"
          icon={<IoMdMail className="text-xl text-white" />}
        />
      </div>
    </div>
    <img
      src="/noavatar.png"
      alt="avatar"
      className="max-w-40 md:max-w-48	max-h-40 md:max-h-48 w-auto rounded-full"
    />
  </section>
);
