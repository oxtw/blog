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
      <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
        <Image
          className="group-hover:scale-105 transition"
          src="/images/bryen_0.png"
          width={1200}
          height={720}
          alt="Título do post"
        />
      </Link>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui numquam
        pariatur dolores explicabo. Fuga minus temporibus aut obcaecati tempora
        pariatur ea quas, enim eius saepe quod repellendus ex veniam dolorem.
      </div>
    </section>
  );
}
