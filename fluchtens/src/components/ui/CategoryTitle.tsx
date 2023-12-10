interface CategoryTitleProps {
  title: string;
}

export const CategoryTitle = ({ title }: CategoryTitleProps) => (
  <h1 className="text-4xl font-semibold border-b-4 border-[#7364D0]">
    {title}
  </h1>
);
