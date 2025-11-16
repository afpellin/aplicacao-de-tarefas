import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-row">
        <Link to="/" className="brand">📝 Tarefas</Link>

        <nav className="nav">
          <NavLink to="/" className={({isActive})=> "nav-link" + (isActive ? " active":"")}>Home</NavLink>
          <NavLink to="/add" className={({isActive})=> "nav-link" + (isActive ? " active":"")}>Adicionar</NavLink>
        </nav>

        <div style={{display: "flex", alignItems:"center", gap: "12px"}}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
