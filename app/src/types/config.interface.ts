import { Language } from "@/components/sections/projects/language-element";

interface Links {
  github: string;
  linkedin: string;
  mail: string;
  source_code: string;
  repositories: string;
}

interface Education {
  name: string;
  desc: string;
  image: string;
  link: string;
  date: string;
}

export interface Project {
  name: string;
  desc: string;
  full_desc: string;
  link: string;
  source: string;
  languages: Language[];
  images: string[];
}

export interface Config {
  name: string;
  job: string;
  desc: string;
  links: Links;
  education: Education[];
  projects: Project[];
}
