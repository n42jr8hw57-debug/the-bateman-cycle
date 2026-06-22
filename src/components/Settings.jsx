import React from "react"

export default function Settings({
  resetStreaks,
  resetAchievements,
  resetAnalytics,
  factoryReset
}) {

  return (

    <div className="card">

      <h2>SETTINGS</h2>

      <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap:"14px",
          marginTop:"24px"
        }}
      >

        <button
          onClick={resetStreaks}
        >
          🔥 Reset Streaks
        </button>

        <button
          onClick={resetAchievements}
        >
          🏆 Reset Achievements
        </button>

        <button
          onClick={resetAnalytics}
        >
          📈 Reset Analytics
        </button>

        <button
          onClick={factoryReset}
        >
          💀 Factory Reset
        </button>

      </div>

    </div>

  )
}