import { Language } from "@/components/ui/LanguageElement";

export interface Project {
  name: string;
  desc: string;
  link: string;
  source: string;
  languages: Language[];
}

export interface Config {
  projects: Project[];
}
