"use server";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CategoryTitle } from "@/components/ui/CategoryTitle";
import { Config } from "@/types/config.interface";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { ProjectElement } from "./ProjectElement";

const config: Config = require("@/config.json");

export const Projects = () => (
  <section id="projects" className="flex-col flex items-center gap-4 md:gap-5 w-full m-auto">
    <CategoryTitle title="Projects" />
    <Carousel opts={{ duration: 0, watchDrag: false }} className="px-12 w-full">
      <CarouselContent>
        {config.projects.map((project, index) => (
          <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
            <ProjectElement
              key={index}
              name={project.name}
              desc={project.desc}
              fullDesc={project.full_desc}
              link={project.link}
              source={project.source}
              languages={project.languages}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
    <Button asChild variant="default" className="px-3 py-2">
      <Link href={config.repositories} target="_blank" className="flex items-center gap-1.5">
        <FiExternalLink className="text-base text-primary-foreground" />
        See more
      </Link>
    </Button>
  </section>
);
