import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("dark");

  // load from localStorage
  useEffect(() => {
    const raw = localStorage.getItem("tasks_v1");
    const stored = raw ? JSON.parse(raw) : [];
    setTasks(stored);

    const t = localStorage.getItem("theme_v1") || "dark";
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  // save tasks
  useEffect(() => {
    localStorage.setItem("tasks_v1", JSON.stringify(tasks));
  }, [tasks]);

  // save theme
  useEffect(() => {
    localStorage.setItem("theme_v1", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const addTask = ({ title, description, dueDate }) => {
    const newTask = {
      id: uuidv4(),
      title,
      description: description || "",
      completed: false,
      createdAt: Date.now(),
      dueDate: dueDate || null
    };
    setTasks((prev) => [newTask, ...prev]);
    return newTask;
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTask = (updated) => {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const clearAll = () => setTasks([]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        editTask,
        toggleComplete,
        clearAll,
        theme,
        setTheme
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
