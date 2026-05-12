import { Button } from "@/components/Button";
import { findAllPostAdmin } from "@/lib/post/queries/admin";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Post Admin - New",
};

export default async function AdminPostNewPage() {
  const posts = await findAllPostAdmin();

  return (
    <div className="p-16">
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}

      <Button type="submit">Funciona como o Button do JSX</Button>
    </div>
  );
}
