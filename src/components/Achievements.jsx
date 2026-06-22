import React from "react"

export default function Achievements({
  completed,
  level,
  habits
}) {

  const streaks =
    habits.map(
      h => h.currentStreak || 0
    )

  const bestStreak =
    streaks.length > 0
      ? Math.max(...streaks)
      : 0

  const achievements = [

    {
      title: "FIRST HABIT",
      unlocked: completed >= 1
    },

    {
      title: "PERFECT DAY",
      unlocked: completed >= 3
    },

    {
      title: "3 DAY STREAK",
      unlocked: bestStreak >= 3
    },

    {
      title: "7 DAY STREAK",
      unlocked: bestStreak >= 7
    },

    {
      title: "30 DAY STREAK",
      unlocked: bestStreak >= 30
    },

    {
      title: "DISCIPLINED",
      unlocked:
        level === "DISCIPLINED" ||
        level === "EXECUTIVE" ||
        level === "ELITE"
    },

    {
      title: "EXECUTIVE",
      unlocked:
        level === "EXECUTIVE" ||
        level === "ELITE"
    },

    {
      title: "ELITE",
      unlocked:
        level === "ELITE"
    }

  ]

  return (

    <div className="card achievements-card">

      <h3>ACHIEVEMENTS</h3>

      {achievements.map((achievement) => (

        <div
          key={achievement.title}
          className={
            achievement.unlocked
              ? "achievement unlocked"
              : "achievement locked"
          }
        >

          <span>
            {achievement.unlocked
              ? "🏆"
              : "🔒"}
          </span>

          <span>
            {achievement.title}
          </span>

        </div>

      ))}

    </div>
  )
}