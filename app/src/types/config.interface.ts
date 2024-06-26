import { Language } from "@/components/sections/Projects/LanguageElement";

export interface Project {
  name: string;
  desc: string;
  full_desc: string;
  link: string;
  source: string;
  languages: Language[];
}

export interface Config {
  repositories: string;
  projects: Project[];
}
