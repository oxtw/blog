import clsx from "clsx";
import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export default async function FeaturedPost() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

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
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
      />

      <PostSummary
        postLink={postLink}
        excerpt={post.excerpt}
        title={post.title}
        createdAt={post.createdAt}
        postHeading="h1"
      />
    </section>
  );
}
