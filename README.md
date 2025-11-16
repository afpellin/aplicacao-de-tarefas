📝 Aplicação de Tarefas – React, Router & Context API
<p align="center"> <img src="https://img.shields.io/badge/STATUS-CONCLUÍDO-4CAF50?style=for-the-badge" /> <img src="https://img.shields.io/badge/REACT-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/ROUTER-6.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" /> <img src="https://img.shields.io/badge/CONTEXT-API-000000?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/JAVASCRIPT-ES2021-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/LICENÇA-MIT-blue?style=for-the-badge" /> <img src="https://img.shields.io/badge/GITHUB-afpellin-000?style=for-the-badge&logo=github" /> </p>

Este repositório contém uma aplicação completa de gerenciamento de tarefas (To-Do List) desenvolvida em React, utilizando:

📌 React Router para navegação entre páginas

📌 Context API para estado global

📌 Hooks (useState, useEffect)

📌 Persistência local com localStorage

📌 CRUD completo de tarefas

Uma aplicação ideal para consolidar conhecimentos essenciais de desenvolvimento front-end moderno.

📌 Descrição do Projeto

A aplicação permite:

✔️ Adicionar novas tarefas
✔️ Listar todas as tarefas existentes
✔️ Editar uma tarefa já criada
✔️ Excluir tarefas
✔️ Persistir tudo no localStorage
✔️ Navegar entre páginas usando React Router

Fluxo clássico de uma aplicação React profissional:

👉 Estado Global → Renderização → Interações → Persistência → Re-renderização

🎯 Objetivos do Exercício

Criar uma aplicação funcional com Create React App

Usar Context API para compartilhamento global de tarefas

Implementar CRUD completo (Create, Read, Update, Delete)

Criar múltiplas páginas com React Router

Utilizar useEffect para sincronizar dados com localStorage

Seguir boas práticas de componentização e organização de pastas

🚀 Tecnologias Utilizadas

⚛️ React.js 18
📦 Create React App
🧭 React Router DOM 6
🧠 Context API
🟨 JavaScript ES2021+
🟦 Node.js
🌐 HTML5 / CSS3

📁 Estrutura do Projeto
```
aplicacao-de-tarefas/
├─ src/
│  ├─ components/
│  │  ├─ TaskForm.jsx
│  │  └─ TaskList.jsx
│  │
│  ├─ context/
│  │  └─ TaskContext.js
│  │
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  └─ AddTask.jsx
│  │
│  ├─ App.js
│  ├─ index.js
│  ├─ index.css
│
├─ public/
│  └─ index.html
│
├─ package.json
├─ .gitignore
└─ README.md
```

🧠 Código do Contexto Global (TaskContext.js)
```
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Carrega tarefas salvas
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(stored);
  }, []);

  // Salva quando alterar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // CRUD
  const addTask = (task) => setTasks([...tasks, task]);

  const removeTask = (id) =>
    setTasks(tasks.filter((task) => task.id !== id));

  const editTask = (updated) =>
    setTasks(tasks.map((task) => (task.id === updated.id ? updated : task)));

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, editTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
```

🧭 Configuração das Rotas (App.js)
```
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import { TaskProvider } from "./context/TaskContext";

export default function App() {
  return (
    <Router>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </TaskProvider>
    </Router>
  );
}
```

▶️ Como executar o projeto
🔧 Pré-requisitos

Node.js instalado

npm ou yarn instalados

🧪 Passo a passo
```
# Clonar o repositório
git clone https://github.com/afpellin/aplicacao-de-tarefas

# Acessar a pasta
cd aplicacao-de-tarefas

# Instalar dependências
npm install

# Executar aplicação
npm start
```
Acesse no navegador:
👉 http://localhost:3000

📘 Aprendizados

Durante o desenvolvimento desta aplicação foram reforçados:

Criação de rotas com React Router DOM

Uso avançado do Context API

Ciclo completo de CRUD

Persistência com localStorage

Componentização e reutilização de lógica

Hooks fundamentais: useState, useEffect

Organização de pastas em uma SPA profissional

👨‍💻 Autor

André Felipe Pellin Bonfim
Desenvolvedor Full Stack

📧 Email: afpellin@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/afpellin/

🐙 GitHub: https://github.com/afpellin
