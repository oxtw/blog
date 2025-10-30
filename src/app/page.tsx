import { Container } from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeaturedPost from "@/components/FeaturedPost";
import { PostsList } from "@/components/PostsList";
import SpinLoader from "@/components/SpindLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <FeaturedPost />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <Footer />
    </Container>
  );
}
