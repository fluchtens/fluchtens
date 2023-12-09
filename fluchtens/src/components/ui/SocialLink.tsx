interface SocialLinkProps {
  name: string;
  link: string;
  icon: any;
}

export const SocialLink = ({ name, link, icon }: SocialLinkProps) => (
  <a
    href={link}
    className="py-2 px-3 flex items-center gap-1.5 rounded-md bg-[#7364D0] hover:bg-[#867DD8]"
  >
    {icon}
    <span className="text-base font-medium text-white">{name}</span>
  </a>
);
