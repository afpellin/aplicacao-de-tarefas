import React, { useContext } from "react";
import TaskForm from "../components/TaskForm";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddTask() {
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleCreate = (data) => {
    addTask(data);
    toast.success("Tarefa criada com sucesso");
    navigate("/");
  };

  return (
    <div className="page">
      <h2>Adicionar Tarefa</h2>
      <TaskForm mode="page" onSubmit={handleCreate} />
    </div>
  );
}
