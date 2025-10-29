import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost() {
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
      <Link
        className={clsx("w-full", "h-full", "overflow-hidden", "rounded-xl")}
        href="#"
      >
        <Image
          className={clsx(
            "w-full",
            "h-full",
            "object-cover",
            "object-center",
            "group-hover:scale-105",
            "transition"
          )}
          src="/images/bryen_0.png"
          width={1200}
          height={720}
          alt="Título do post"
          priority //carregando a imagem com prioridade
        />
      </Link>
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-04-20"
        >
          20/04/2025 10:00
        </time>

        <h1 className={clsx("text-2xl/tight", "font-extrabold", "sm:text-4xl")}>
          <Link href="#">Lorem ipsum dolor sit amet, consectetur</Link>
        </h1>

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
