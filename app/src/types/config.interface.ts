import { Language } from "@/components/sections/Projects/LanguageElement";

export interface Project {
  name: string;
  desc: string;
  full_desc: string;
  link: string;
  source: string;
  languages: Language[];
}

interface Links {
  github: string;
  linkedin: string;
  mail: string;
  source_code: string;
  repositories: string;
}

export interface Config {
  name: string;
  job: string;
  desc: string;
  links: Links;
  projects: Project[];
}
