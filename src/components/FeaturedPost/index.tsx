import clsx from "clsx";
import PostHeading from "../PostHeading";
import PostCoverImage from "../PostCoverImage";

export default function FeaturedPost() {
  const slug = "okaskoakodasp";
  const postLink = `/post/${slug}`;

  return (
    <section
      className={clsx(
        "grid",
        "grid-cols-1",
        "gap-8",
        "mb-16",
        "sm:grid-cols-2",
        "group"
      )}
    >
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Alt da imagem",
          priority: true,
        }}
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-04-20"
        >
          20/04/2025 10:00
        </time>

        <PostHeading url="#" as="h1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui numquam
          pariatur dolores explicabo. Fuga minus temporibus aut obcaecati
          tempora pariatur ea quas, enim eius saepe quod repellendus ex veniam
          dolorem.
        </p>
      </div>
    </section>
  );
}
