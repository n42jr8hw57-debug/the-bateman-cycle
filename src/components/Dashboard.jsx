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

  const nextLevelXP = 100

  const xpPercent = Math.min(
    (xp / nextLevelXP) * 100,
    100
  )

  const streaks = habits.map(h => h.streak || 0)

  const currentStreak =
    streaks.length > 0
      ? Math.max(...streaks)
      : 0

  const bestStreak = currentStreak

  const consistency =
    total > 0
      ? Math.round((completed / total) * 100)
      : 0

  return (
    <div>

      <div className="card hero">

        <h2>DISCIPLINE SCORE</h2>

        <ProgressRing score={score} />

        <div className="hero-subtitle">
          {completed} / {total} completed
        </div>

      </div>

      <div className="stats-grid">

        <div className="card stat-card">

          <h3>TOTAL XP</h3>

          <div className="big-stat">
            {xp}
          </div>

        </div>

        <div className="card stat-card">

          <h3>LEVEL</h3>

          <div className="big-stat">
            {level}
          </div>

          <div className="xp-info">
            {xp} / {nextLevelXP} XP
          </div>

          <div className="xp-track">
            <div
              className="xp-fill"
              style={{
                width: `${xpPercent}%`
              }}
            />
          </div>

        </div>

      </div>

      <div className="stats-grid stats-grid-3">

        <div className="card stat-card">

          <h3>CURRENT</h3>

          <div className="big-stat">
            🔥 {currentStreak}
          </div>

        </div>

        <div className="card stat-card">

          <h3>BEST</h3>

          <div className="big-stat">
            🏆 {bestStreak}
          </div>

        </div>

        <div className="card stat-card">

          <h3>CONSISTENCY</h3>

          <div className="big-stat">
            ⚡ {consistency}%
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