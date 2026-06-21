import React from "react"

import ProgressRing from "./ProgressRing"
import Achievements from "./Achievements"

export default function Dashboard({
  score,
  completed,
  total,
  xp,
  level,
  habits
}) {

  return (
    <div>

      <div className="card hero">

        <h2>DISCIPLINE SCORE</h2>

        <ProgressRing score={score} />

        <p>
          {completed} / {total} completed
        </p>

      </div>

      <div className="stats-grid">

        <div className="card stat-card">

          <h3>XP</h3>

          <div className="big-stat">
            {xp}
          </div>

        </div>

        <div className="card stat-card">

          <h3>LEVEL</h3>

          <div className="big-stat">
            {level}
          </div>

        </div>

      </div>

      <Achievements
        completed={completed}
        level={level}
      />

      <div className="card targets-card">

        <h3>TODAY'S TARGETS</h3>

        {habits.map((habit) => (

          <div
            key={habit.name}
            className="target-row"
          >

            <span>
              {habit.done ? "✓" : "○"}
            </span>

            <span>
              {habit.name}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}