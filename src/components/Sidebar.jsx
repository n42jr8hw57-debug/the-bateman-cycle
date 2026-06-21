import React from "react"

export default function Sidebar({ setPage }) {
  return (
    <aside className="sidebar">
      <h1>THE BATEMAN CYCLE</h1>

      <p>TRACK. EXECUTE. REPEAT.</p>

      <nav className="sidebar-nav">
        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPage("habits")}>
          Habits
        </button>

        <button onClick={() => setPage("analytics")}>
          Analytics
        </button>

        <button onClick={() => setPage("settings")}>
          Settings
        </button>
      </nav>
    </aside>
  )
}