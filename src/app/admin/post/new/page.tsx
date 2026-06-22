import { Button } from "@/components/Button";
import { InputCheckBox } from "@/components/InputCheckBox";
import { InputText } from "@/components/InputText";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Post Admin - New",
};

export default async function AdminPostNewPage() {
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite seu nome" />
        <InputText labelText="Sobrenome" placeholder="Digite seu Sobrenome" />
        <InputCheckBox labelText="Sobrenome" />

        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu Sobrenome"
          defaultValue="Teste"
        />
        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu Sobrenome"
          readOnly
        />
        <InputText
          readOnly
          labelText="Sobrenome"
          defaultValue="Teste"
          placeholder="Digite seu Sobrenome"
        />
      </div>

      <div className="mt-4">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
