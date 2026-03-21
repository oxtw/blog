import { revalidateExampleAction } from "@/actions/revalidate-example";
import { formatHour } from "@/utils/format-datetime";

export const dynamic = "force-static";
// export const revalidate = 10;

export default async function ExampleDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  return (
    <main className="min-h-[600px] text-xl font-bold">
      <div>
        {" "}
        Hora: {hour}(ID: {id})
      </div>

      <form name="path" className="py-16" action={revalidateExampleAction}>
        <input type="hidden" defaultValue={`/example/${id}`} />
        <button className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer" type="submit">REVALIDATE</button>
      </form>
    </main>
  );
}
