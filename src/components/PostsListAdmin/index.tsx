import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";

import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "p-2",
              "bg",
              "flex gap-2 items-center justify-between",
              !post.published && "bg-slate-300",
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className={clsx("text-xs", "text-slate-600", "italic")}>
                (Não Publicado)
              </span>
            )}

            <button
              className={clsx(
                "text-red-500",
                "cursor-pointer",
                "[&_svg]:w-4 [&_svg]:h-4",
                "hover:scale-120",
                "transition",
                "hover:text-red-700",
              )}
              aria-label={`Apagar post: ${post.title}`}
              title={`Apagar post: ${post.title}`}
            >
              <Trash2Icon size={18} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
