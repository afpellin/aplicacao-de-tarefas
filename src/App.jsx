import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </main>

      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
    </div>
  );
}
