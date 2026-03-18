import { formatHour } from "@/utils/format-datetime";

//tornando a rota dinamica
export const dynamic = "force-dynamic";

export default async function ExampleStaticPage() {
  const hour = formatHour(Date.now());

  return (
    <main className="min-h-[600px] text-xl font-bold">
      <div> Hora: {hour}</div>
    </main>
  );
}
