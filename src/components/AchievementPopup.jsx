import React from "react"

export default function AchievementPopup({
  achievement
}) {

  if (!achievement) return null

  return (

    <div className="achievement-popup">

      <div className="popup-icon">
        🏆
      </div>

      <div>

        <div className="popup-title">
          ACHIEVEMENT UNLOCKED
        </div>

        <div className="popup-name">
          {achievement}
        </div>

      </div>

    </div>

  )
}