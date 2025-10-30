import { PostsList } from "@/components/PostsList";
import SpinLoader from "@/components/SpindLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a header</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Footer</h1>
      </footer>
    </div>
  );
}
