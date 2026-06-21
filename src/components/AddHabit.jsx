import React, { useState } from "react"

export default function AddHabit({ addHabit }) {
  const [value, setValue] = useState("")

  const handleSubmit = () => {
    if (!value.trim()) return

    addHabit(value)

    setValue("")
  }

  return (
    <div className="card">

      <h2>Add Habit</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "12px"
        }}
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter habit..."
        />

        <button onClick={handleSubmit}>
          Add
        </button>
      </div>

    </div>
  )
}