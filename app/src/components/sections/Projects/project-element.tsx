"use server";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Language, LanguageElement } from "./language-element";
import { ProjectPreviewBtn, ProjectSoureCodeBtn } from "./project-buttons";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ProjectDialogProps {
  name: string;
  fullDesc: string;
  link: string;
  source: string;
  languages: Language[];
  images: string[];
}

const ProjectDialog = ({ name, fullDesc, link, source, languages, images }: ProjectDialogProps) => (
  <DialogContent className="max-w-screen-md w-full p-3 sm:p-6">
    <DialogHeader className="flex-col flex gap-1">
      <DialogTitle className="px-12">{name}</DialogTitle>
      <Carousel opts={{ duration: 0, watchDrag: false }} className="px-12 w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="">
              <img src={image} alt={image} className="w-auto rounded-lg pointer-events-none" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
      <DialogDescription className="px-12 text-muted-foreground">{fullDesc}</DialogDescription>
      <ul className="px-12 flex-wrap flex justify-center sm:justify-start items-center gap-2">
        {languages.map((language, index) => (
          <LanguageElement key={index} language={language} />
        ))}
      </ul>
    </DialogHeader>
    <DialogFooter className="mx-auto sm:mx-0 sm:ml-auto pt-4 sm:pt-6 pr-0 sm:pr-12 flex-col sm:flex-row flex items-center gap-2">
      {link && <ProjectPreviewBtn link={link} />}
      <ProjectSoureCodeBtn link={source} />
    </DialogFooter>
  </DialogContent>
);

interface ProjectElementProps {
  name: string;
  desc: string;
  fullDesc: string;
  link: string;
  source: string;
  languages: Language[];
  images: string[];
}

export const ProjectElement = ({ name, desc, fullDesc, link, source, languages, images }: ProjectElementProps) => (
  <Dialog>
    <DialogTrigger className="p-2 h-full flex flex-col rounded-xl bg-card hover:bg-card/80 text-left">
      <img src={images[0]} alt={images[0]} className="rounded-md pointer-events-none" />
      <div className="p-2 flex-col flex gap-1">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm font-normal text-muted-foreground">{desc}</p>
        <ul className="mt-2 flex-wrap flex items-center gap-2">
          {languages.map((language, index) => (
            <LanguageElement key={index} language={language} />
          ))}
        </ul>
      </div>
    </DialogTrigger>
    <ProjectDialog name={name} fullDesc={fullDesc} link={link} source={source} languages={languages} images={images} />
  </Dialog>
);
