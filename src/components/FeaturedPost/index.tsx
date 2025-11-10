import clsx from "clsx";
import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";

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

      <PostSummary
        postLink={postLink}
        excerpt={
          "o Next.js já vem com várias decisões prontas, permitindo que você comece a desenvolver mais rapidamente."
        }
        title={"Next.js: O framework React para produção"}
        createdAt={"2025-01-07T22:54:10"}
        postHeading="h1"
      />
    </section>
  );
}
