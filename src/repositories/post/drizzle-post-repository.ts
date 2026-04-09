import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { and } from "drizzle-orm";
import { logColor } from "@/utils/log-color";
import { SIMULATE_WAIT_IN_MS } from "@/lib/constants";
import { asyncDelay } from "@/utils/async-delay";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor(`\n`, `findAllPublic`, `\n`, Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor(`\n`, `findBySlugPublic`, `\n`, Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });
    if (!post) throw new Error(`Post not found for slug`);

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor(`\n`, `findAll`, `\n`, Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor(`\n`, `findById`, `\n`, Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });
    if (!post) throw new Error(`Post not found for id`);

    return post;
  }
}

// (async () => {

// this-will-create-the-dillinger-image-and-pull-in-the-necessary-dependencies.-atbvp6 true
// como-a-tecnologia-impacta-nosso-bem-estar false

// 6b204dab-2312-4525-820a-a0463560835f
// 76396dd3-9581-43b5-856d-fe1a78714e8c

//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findAll();

//   posts.forEach((post) => console.log(post.id, post.published));
// })();
