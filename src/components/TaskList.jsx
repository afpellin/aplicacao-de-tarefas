import React, { useContext, useEffect } from "react";
import TaskItem from "./TaskItem";
import { TaskContext } from "../context/TaskContext";
import { toast } from "react-toastify";

export default function TaskList({ tasks }) {
  const { addTask } = useContext(TaskContext);

  useEffect(() => {
    const handler = (e) => {
      addTask(e.detail);
      toast.success("Tarefa adicionada");
    };
    window.addEventListener("task:create", handler);
    return () => window.removeEventListener("task:create", handler);
  }, [addTask]);

  if (!tasks || tasks.length === 0) {
    return <div className="empty">Nenhuma tarefa encontrada.</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </div>
  );
}
