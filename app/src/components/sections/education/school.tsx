import Link from "next/link";

interface SchoolProps {
  name: string;
  desc: string;
  image: string;
  link: string;
  date: string;
}

export const School = ({ name, desc, image, link, date }: SchoolProps) => (
  <li className="flex items-center gap-4">
    <div className="px-1.5 w-16 h-16 flex justify-center items-center rounded-xl bg-white">
      <img src={image} alt="School Logo" />
    </div>
    <div className="w-full flex justify-between">
      <div className="flex flex-col">
        <Link href={link} target="_blank" className="text-base font-semibold">
          {name}
        </Link>
        <span className="text-sm text-muted-foreground">{desc}</span>
      </div>
      <span className="text-sm text-muted-foreground">{date}</span>
    </div>
  </li>
);
