import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children?: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export default function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: clsx("text-2xl/tight", "font-extrabold", "sm:text-4xl"),
    h2: clsx("text-xl/tight", "font-bold", "sm:text-2xl"),
  };

  const commonClasses = "font-extrabold";

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
