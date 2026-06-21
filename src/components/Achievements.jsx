import React from "react"

export default function Achievements({
  completed,
  level
}) {

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