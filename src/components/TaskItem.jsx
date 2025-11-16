import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Modal from "./Modal";
import { toast } from "react-toastify";

export default function TaskItem({ task }) {
  const { removeTask, toggleComplete, editTask } = useContext(TaskContext);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    if (confirm("Excluir tarefa?")) {
      removeTask(task.id);
      toast.info("Tarefa removida");
    }
  };

  const handleToggle = () => {
    toggleComplete(task.id);
    toast.success(task.completed ? "Marcado como pendente" : "Tarefa concluída");
  };

  const handleSave = (updated) => {
    editTask(updated);
    setOpen(false);
    toast.success("Tarefa atualizada");
  };

  return (
    <div className={"task-item " + (task.completed ? "completed" : "")}>
      <div className="task-main">
        <input type="checkbox" checked={task.completed} onChange={handleToggle} />
        <div className="task-body">
          <div className="task-title">{task.title}</div>
          {task.description && <div className="task-desc">{task.description}</div>}
        </div>
      </div>

      <div className="task-actions">
        <button className="btn ghost" onClick={() => setOpen(true)}>Editar</button>
        <button className="btn danger" onClick={handleDelete}>Excluir</button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <EditForm task={task} onSave={handleSave} />
      </Modal>
    </div>
  );
}

// Inline edit form used inside modal
function EditForm({ task, onSave }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [dueDate, setDueDate] = useState(task.dueDate || "");

  const submit = (e) => {
    e.preventDefault();
    const updated = { ...task, title: title.trim(), description, dueDate };
    onSave(updated);
  };

  return (
    <form onSubmit={submit} className="card">
      <h3>Editar tarefa</h3>
      <div className="field">
        <label>Título</label>
        <input className="input" value={title} onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div className="field">
        <label>Descrição</label>
        <textarea className="input" rows="4" value={description} onChange={(e)=>setDescription(e.target.value)} />
      </div>
      <div className="field">
        <label>Vencimento</label>
        <input type="date" className="input" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} />
      </div>
      <div style={{display:"flex", gap: 10, marginTop: 10}}>
        <button className="btn primary" type="submit">Salvar</button>
      </div>
    </form>
  );
}
