import SpinLoader from "@/components/SpindLoader";

export default async function HomePage() {
  return (
    <div>
      <SpinLoader className="min-h-[500px] bg-amber-500" />
    </div>
  );
}
