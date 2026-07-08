"use client";

import { Button } from "@/components/Button";
import { InputCheckBox } from "@/components/InputCheckBox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState("");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite seu nome" />
        <InputText labelText="Sobrenome" placeholder="Digite seu Sobrenome" />
        <InputCheckBox labelText="Sobrenome" />

        <ImageUploader />

        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu Sobrenome"
          defaultValue="Teste"
        />

        <MarkdownEditor
          labelText="Conteudo do post"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
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
