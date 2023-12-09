const About = () => {
  const SocialLink = ({ name, link }: { name: string; link: string }) => (
    <a
      href={link}
      className="py-2 px-3 rounded-md bg-[#7364D0] hover:bg-[#867DD8]"
    >
      <span className="text-base font-medium">{name}</span>
    </a>
  );

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
      <div className="flex gap-2">
        <SocialLink name="Github" link="https://github.com/fluchtens" />
        <SocialLink
          name="Linkedin"
          link="https://www.linkedin.com/in/fluchtens"
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
