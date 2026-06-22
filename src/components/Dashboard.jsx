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
    const greetings = {

  NOVICE: {
    title: "GOOD MORNING",
    quote: "Every master was once a beginner."
  },

  DISCIPLINED: {
    title: "STAY SHARP",
    quote: "Discipline equals freedom."
  },

  EXECUTIVE: {
    title: "KEEP EXECUTING",
    quote: "Consistency compounds."
  },

  ELITE: {
    title: "ELITE STATUS",
    quote: "The standard is excellence."
  }

}

const briefing =
  greetings[level] ||
  greetings.NOVICE

let nextLevelXP = 100
let previousLevelXP = 0

if (level === "DISCIPLINED") {
  previousLevelXP = 100
  nextLevelXP = 250
}
else if (level === "EXECUTIVE") {
  previousLevelXP = 250
  nextLevelXP = 500
}
else if (level === "ELITE") {
  previousLevelXP = 500
  nextLevelXP = 500
}

const xpPercent =
  level === "ELITE"
    ? 100
    : Math.min(
        (
          (xp - previousLevelXP) /
          (nextLevelXP - previousLevelXP)
        ) * 100,
        100
      )

  const currentStreaks = habits.map(h => h.currentStreak || 0)

  const bestStreaks =
    habits.map(h => h.bestStreak || 0)

  const currentStreak = currentStreaks.length > 0
    ? Math.max(...currentStreaks)
    : 0

  const bestStreak = bestStreaks.length > 0
    ? Math.max(...bestStreaks)
    : 0

  const consistency =
    total > 0
      ? Math.round((completed / total) * 100)
      : 0

const missionCompleted =
  completed === total &&
  total > 0

const missionReward = 100

  return (

    <div>

<div className="card">

  <h2>
    {briefing.title}
  </h2>

  <div
    style={{
      marginTop:"16px",
      display:"grid",
      gap:"10px"
    }}
  >

    <div>
      🔥 Current Streak:
      {" "}
      {Math.max(
        ...habits.map(
          h => h.currentStreak || 0
        ),
        0
      )} days
    </div>

    <div>
      🏆 Level:
      {" "}
      {level}
    </div>

    <div>
      ✅ Today's Habits:
      {" "}
      {completed}/{total}
    </div>

    <div>
      ⚡ Discipline Score:
      {" "}
      {score}%
    </div>

  </div>

  <p
    style={{
      marginTop:"20px",
      color:"#888",
      fontStyle:"italic"
    }}
  >
    "{briefing.quote}"
  </p>

</div>

<div className="card">

  <h2>
    TODAY'S MISSION
  </h2>

  {!missionCompleted ? (

    <>

      <p>
        Complete all habits today.
      </p>

      <div
        style={{
          marginTop:"16px",
          fontSize:"14px",
          color:"#888"
        }}
      >
        Reward: +{missionReward} XP
      </div>

    </>

  ) : (

    <>

      <div
        style={{
          fontSize:"22px",
          fontWeight:"700"
        }}
      >
        ✓ MISSION COMPLETE
      </div>

      <div
        style={{
          marginTop:"12px",
          color:"#888"
        }}
      >
        Reward Earned:
        {" "}
        +{missionReward} XP
      </div>

    </>

  )}

</div>

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

  {level === "ELITE"
    ? `${xp} XP`
    : `${xp} / ${nextLevelXP} XP`
  }

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
        habits={habits}
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