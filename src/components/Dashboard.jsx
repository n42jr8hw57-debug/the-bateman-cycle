import React from "react"

export default function Dashboard({
  score,
  completed,
  total,
  xp,
  level
}) {
  return (
    <div className="card hero">

      <h2>THE BATEMAN CYCLE</h2>

      <div className="score">
        {score}%
      </div>

      <p>
        {completed} / {total} completed
      </p>

      <h3>
        XP: {xp}
      </h3>

      <h3>
        LEVEL: {level}
      </h3>

    </div>
  )
}