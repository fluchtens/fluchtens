"use server";

interface CategoryTitleProps {
  title: string;
}

export const CategoryTitle = ({ title }: CategoryTitleProps) => (
  <h1 className="text-3xl md:text-4xl font-semibold text-center">{title}</h1>
);
