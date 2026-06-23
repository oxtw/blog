import { ManagePostForm } from "@/components/admin/ManagePostForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Post Admin - New",
};

export default async function AdminPostNewPage() {
  return (
    <>
      <h1>Criar post</h1>
      <ManagePostForm />;
    </>
  );
}
