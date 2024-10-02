"use server";

import { Separator } from "../ui/separator";

export const CategoryTitle = ({ title }: { title: string }) => (
  <div className="mr-auto w-full">
    <h1 className="text-xl font-semibold">{title}</h1>
    <Separator className="mt-2" />
  </div>
);
