import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Contador de Cliques</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Clique para aumentar
      </button>

      {count > 0 && (
        <button style={{ marginTop: "10px", background: "#d64545" }} 
                onClick={() => setCount(0)}>
          Resetar
        </button>
      )}
    </div>
  );
}
