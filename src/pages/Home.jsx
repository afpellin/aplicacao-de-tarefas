import React, { useContext, useState, useMemo } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { toast } from "react-toastify";

export default function Home() {
  const { tasks, clearAll } = useContext(TaskContext);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tasks;
    return tasks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        (t.description && t.description.toLowerCase().includes(q))
    );
  }, [tasks, query]);

  return (
    <div className="page">
      <div className="page-header">
        <h2>Minhas Tarefas</h2>
        <div className="actions-row">
          <input
            aria-label="Pesquisar tarefas"
            placeholder="Buscar tarefas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input"
          />
          <button
            className="btn danger"
            onClick={() => {
              if (confirm("Remover todas as tarefas?")) {
                clearAll();
                toast.info("Todas as tarefas removidas");
              }
            }}
          >
            Limpar tudo
          </button>
        </div>
      </div>

      <TaskForm mode="inline" />

      <TaskList tasks={filtered} />
    </div>
  );
}
