import { Language } from "@/components/sections/Projects/ui/LanguageElement";

export interface Project {
  name: string;
  desc: string;
  full_desc: string;
  link: string;
  source: string;
  languages: Language[];
}

export interface Config {
  projects: Project[];
}
