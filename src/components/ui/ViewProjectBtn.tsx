import { FiExternalLink } from "react-icons/fi";

export const ViewProjectBtn = ({ link }: { link: string }) => (
  <a
    href={link}
    target="_blank"
    className="p-2 flex justify-center items-center rounded-md bg-zinc-700 hover:bg-zinc-600"
  >
    <FiExternalLink className="text-base text-white" />
  </a>
);
