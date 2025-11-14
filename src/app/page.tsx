import FeaturedPost from "@/components/FeaturedPost";
import  PostsList  from "@/components/PostsList";
import SpinLoader from "@/components/SpindLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <FeaturedPost />
        <PostsList />
      </Suspense>
    </>
  );
}
