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
        {/*
  id: string; auto
  slug: string; auto
  title: string;
  excerpt: string;
  content: string;
  UPLOADER
  coverImageUrl: string;
  published: boolean;
  author: string;
}; */}

        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={""}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerado automaticamente"
          type="text"
          defaultValue={""}
          readOnly
        />

         <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={""}
        />

        <InputText
          labelText="Título"
          name="title"
          placeholder="Digite o titulo"
          type="text"
          defaultValue={""}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={""}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText="URL da Imagem de Capa"
          name="coverImageUrl"
          placeholder="Digite a URL da imagem"
          type="text"
          defaultValue={""}
        />

        <InputCheckBox
        labelText="Publicar?"
        name="published"
        type="checkbox"
        />

      </div>

      <div className="mt-4">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
