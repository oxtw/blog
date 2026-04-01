import { revalidateExampleAction } from "@/actions/revalidate-example";
import { formatHour } from "@/utils/format-datetime";

// export const dynamic = "force-static";
// export const revalidate = 30;

export default async function ExampleDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  const response = await fetch("https://randomuser.me/api/?results=1",{
    next: {
      tags: [],
      revalidate: 30,
    },
  });

  const json = await response.json();
  const name = json.results[0].name.first;

  return (
    <main className="min-h-[600px] text-xl font-bold">
      <div>
       Name: {name}  |  Hora: {hour}(ID: {id})
      </div>

      <form name="path" className="py-16" action={revalidateExampleAction}>
        <input type="hidden" defaultValue={`/example/${id}`} />
        <button
          className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer"
          type="submit"
        >
          REVALIDATE
        </button>
      </form>
    </main>
  );
}
