"use server";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Config } from "@/types/config.interface";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SocialLink } from "./social-link";
const config: Config = require("@/config.json");

export const About = () => (
  <section id="about" className="flex-col-reverse	md:flex-row flex justify-between items-center gap-3 md:gap-10">
    <div className="flex-col flex items-center md:items-start gap-1 text-center md:text-left">
      <span className="text-xl md:text-2xl font-semibold">Hi there 👋</span>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">{config.name}</h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">{config.job}</h2>
      <p className="max-w-screen-md text-sm md:text-base lg:text-lg font-light text-muted-foreground">{config.desc}</p>
      <div className="mt-2 flex-col md:flex-row flex items-center gap-2">
        <SocialLink name="Github" mail={false} link={config.links.github} icon={<FaGithub className="text-xl text-white" />} />
        <SocialLink name="Linkedin" mail={false} link={config.links.linkedin} icon={<FaLinkedin className="text-xl text-white" />} />
        <SocialLink name={config.links.mail} mail={true} link={config.links.mail} icon={<IoMdMail className="text-xl text-white" />} />
      </div>
    </div>
    <Avatar className="w-40 md:w-52 h-40 md:h-52">
      <AvatarImage src="/fluchten.webp" alt="picture" />
      <AvatarFallback>FL</AvatarFallback>
    </Avatar>
  </section>
);
