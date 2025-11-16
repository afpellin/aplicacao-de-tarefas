import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().trim().min(3, "mínimo 3 caracteres").required("Título obrigatório"),
  description: yup.string().max(500, "Máximo 500 caracteres").nullable(),
  dueDate: yup.string().nullable()
});

export default function TaskForm({ mode = "inline", onSubmit: externalSubmit }) {
  // mode: 'inline' (on Home) or 'page' (on separate Add page) or 'edit' not used here
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    // optional: reset on mount
    reset();
  }, [reset]);

  const submit = async (data) => {
    if (externalSubmit) {
      await externalSubmit(data);
      reset();
      return;
    }
    // for inline mode let parent handle via custom event: dispatch custom event
    const event = new CustomEvent("task:create", { detail: data });
    window.dispatchEvent(event);
    reset();
  };

  return (
    <form className={mode === "page" ? "card" : "form-inline"} onSubmit={handleSubmit(submit)}>
      <div className="field">
        <label>Título</label>
        <input {...register("title")} placeholder="Ex.: Comprar presentes" className="input" />
        {errors.title && <small className="error">{errors.title.message}</small>}
      </div>

      <div className="field">
        <label>Descrição</label>
        <textarea {...register("description")} placeholder="Detalhes (opcional)" rows="3" className="input" />
        {errors.description && <small className="error">{errors.description.message}</small>}
      </div>

      <div className="field row">
        <div style={{flex:1}}>
          <label>Data de vencimento</label>
          <input {...register("dueDate")} type="date" className="input" />
        </div>

        <div style={{display:"flex", alignItems:"flex-end"}}>
          <button className="btn primary" type="submit" disabled={isSubmitting}>
            {mode === "page" ? "Adicionar Tarefa" : "Adicionar"}
          </button>
        </div>
      </div>
    </form>
  );
}
