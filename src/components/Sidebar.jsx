import React from "react"

export default function Sidebar({
  setPage,
  page
}) {

  const items = [
    {
      id: "dashboard",
      label: "Dashboard"
    },
    {
      id: "habits",
      label: "Habits"
    },
    {
      id: "analytics",
      label: "Analytics"
    },
    {
      id: "settings",
      label: "Settings"
    }
  ]

  return (
    <aside className="sidebar">

      <h1>
        THE BATEMAN CYCLE
      </h1>

      <p>
        TRACK. EXECUTE. REPEAT.
      </p>

      <nav className="sidebar-nav">

        {items.map((item) => (

          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={
              page === item.id
                ? "nav-btn active-nav"
                : "nav-btn"
            }
          >
            {page === item.id
              ? "● "
              : "○ "}

            {item.label}
          </button>

        ))}

      </nav>

    </aside>
  )
}