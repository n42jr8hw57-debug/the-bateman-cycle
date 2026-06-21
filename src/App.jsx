import React, { useState, useEffect } from "react"

import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import HabitList from "./components/HabitList"
import AddHabit from "./components/AddHabit"

export default function App() {

  const [page, setPage] = useState("dashboard")

  const [habits, setHabits] = useState(() => {

    const saved =
      localStorage.getItem("bateman-habits")

    if (saved) {
      return JSON.parse(saved)
    }

    return [
      {
        name: "Workout",
        done: false,
        streak: 0
      },
      {
        name: "Reading",
        done: false,
        streak: 0
      },
      {
        name: "Deep Work",
        done: false,
        streak: 0
      }
    ]
  })

  useEffect(() => {
    localStorage.setItem(
      "bateman-habits",
      JSON.stringify(habits)
    )
  }, [habits])

  const completed =
    habits.filter(h => h.done).length

  const score = Math.round(
    (completed / Math.max(habits.length, 1)) * 100
  )

  const xp = completed * 25

  const level =
    xp >= 500
      ? "ELITE"
      : xp >= 250
      ? "EXECUTIVE"
      : xp >= 100
      ? "DISCIPLINED"
      : "NOVICE"

  const toggle = (index) => {

    const updated = [...habits]

    updated[index].done =
      !updated[index].done

    if (updated[index].done) {
      updated[index].streak += 1
    }

    setHabits(updated)
  }

  const addHabit = (name) => {

    setHabits([
      ...habits,
      {
        name,
        done: false,
        streak: 0
      }
    ])
  }

  const deleteHabit = (index) => {

    setHabits(
      habits.filter((_, i) => i !== index)
    )
  }

  const editHabit = (index) => {

    const newName = prompt(
      "New habit name:",
      habits[index].name
    )

    if (!newName) return

    const updated = [...habits]

    updated[index].name = newName

    setHabits(updated)
  }

  return (
    <div className="app">

      <Sidebar setPage={setPage} />

      <main className="main">

        {page === "dashboard" && (
<Dashboard
  score={score}
  completed={completed}
  total={habits.length}
  xp={xp}
  level={level}
  habits={habits}
/>
        )}

        {page === "habits" && (
          <>
            <AddHabit addHabit={addHabit} />

            <HabitList
              habits={habits}
              toggle={toggle}
              deleteHabit={deleteHabit}
              editHabit={editHabit}
            />
          </>
        )}

        {page === "analytics" && (
          <div className="card">
            <h2>Analytics</h2>
            <p>Coming soon...</p>
          </div>
        )}

        {page === "settings" && (
          <div className="card">
            <h2>Settings</h2>
          </div>
        )}

      </main>

    </div>
  )
}