import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../DeletePostButton";

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

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}

      <div
        className={clsx(
          "fixed",
          "z-50",
          "inset-0",
          "bg-black/50",
          "backdrop-blur-xs",
          "flex items-center justify-center",
        )}
      >
        <div
          className={clsx(
            "bg-slate-100",
            "p-6",
            "rounded-lg",
            "max-w-2xl",
            "mx-6",
            "flex flex-col gap-6",
            'shadow-lg shadow-black/30',

          )}
        >
          <h3 className="text-xl font-extrabold">Titulo do dialogo</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iure
            hic quae cum excepturi laboriosam sed deserunt dolor inventore eaque
            optio, perspiciatis ducimus commodi consequuntur earum, doloribus
            sapiente illo sunt!
          </p>
          <div className="flex items-center justify-around">
            <button
              className={clsx(
                "bg-slate-300",
                "hover:bg-slate-400",
                "transition",
                "text-slate-950",
                "flex items-center justify-center",
                "py-2 px-4 rounded-lg cursor-pointer",
              )}
              autoFocus
            >
              Cancelar
            </button>
            <button
              className={clsx(
                "bg-blue-500",
                "hover:bg-slate-600",
                "transition",
                "text-blue-50",
                "flex items-center justify-center",
                "py-2 px-4 rounded-lg cursor-pointer",
              )}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
