import React from "react"

export default function HabitList({
  habits,
  toggle,
  deleteHabit,
  editHabit
}) {
  return (
    <div className="card">

      <h2>Habits</h2>

      {habits.map((habit, index) => (

        <div
          className="habit"
          key={habit.name}
        >

          <div>
            <strong>{habit.name}</strong>

            <div>
              🔥 {habit.streak}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px"
            }}
          >

            <button
              onClick={() => toggle(index)}
            >
              {habit.done ? "✓" : "○"}
            </button>

            <button
              onClick={() => editHabit(index)}
            >
              ✏️
            </button>

            <button
              onClick={() => deleteHabit(index)}
            >
              🗑️
            </button>

          </div>

        </div>

      ))}

    </div>
  )
}