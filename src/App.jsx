import React, { useState, useEffect } from "react"

import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import HabitList from "./components/HabitList"
import AddHabit from "./components/AddHabit"
import Analytics from "./components/Analytics"
import Settings from "./components/Settings"
import AchievementPopup from "./components/AchievementPopup"

export default function App() {

  const [page, setPage] = useState("dashboard")

const [popupAchievement, setPopupAchievement] =
  useState(null)

const [unlockedAchievements, setUnlockedAchievements] =
  useState(() => {

    const saved =
      localStorage.getItem(
        "bateman-achievements"
      )

    return saved
      ? JSON.parse(saved)
      : []

  })

  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("bateman-habits")

    if (saved) {
      return JSON.parse(saved)
    }

    return [
      {
        name: "Workout",
        done: false,
        currentStreak: 0,
        bestStreak: 0,
        lastTrackedDate: null
      },
      {
        name: "Reading",
        done: false,
        currentStreak: 0,
        bestStreak: 0,
        lastTrackedDate: null
      },
      {
        name: "Deep Work",
        done: false,
        currentStreak: 0,
        bestStreak: 0,
        lastTrackedDate: null
      }
    ]
  })

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("bateman-history")

    if (saved) {
      return JSON.parse(saved)
    }

    return []
  })

  const [lastResetDate, setLastResetDate] = useState(() => {
    return (
      localStorage.getItem("bateman-last-reset") ||
      new Date().toDateString()
    )
  })

  const completed =
    habits.filter(h => h.done).length

  const score = Math.round(
    (completed / Math.max(habits.length, 1)) * 100
  )

  const xp = completed * 25

  const level =
    xp >= 500
      ? "ELITE"
      : xp >= 250
      ? "EXECUTIVE"
      : xp >= 100
      ? "DISCIPLINED"
      : "NOVICE"

  useEffect(() => {
    localStorage.setItem(
      "bateman-habits",
      JSON.stringify(habits)
    )
  }, [habits])

  useEffect(() => {
    localStorage.setItem(
      "bateman-history",
      JSON.stringify(history)
    )
  }, [history])

  useEffect(() => {
    localStorage.setItem(
      "bateman-last-reset",
      lastResetDate
    )
  }, [lastResetDate])

  useEffect(() => {

  localStorage.setItem(
    "bateman-achievements",
    JSON.stringify(
      unlockedAchievements
    )
  )

}, [unlockedAchievements])

  useEffect(() => {

    const today =
      new Date().toDateString()

    if (today !== lastResetDate) {

      const yesterday =
        new Date(lastResetDate)

      const label =
        yesterday.toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric"
          }
        )

      const alreadySaved =
        history.find(
          item => item.day === label
        )

      if (!alreadySaved) {

        setHistory(prev => [
          ...prev,
          {
            day: label,
            score
          }
        ])
      }

      setHabits(prev =>
        prev.map(habit => ({
          ...habit,
          done: false
        }))
      )

      setLastResetDate(today)
    }

  }, [])

useEffect(() => {

  const achievement =
    "FIRST HABIT"

  if (
    completed >= 1 &&
    !unlockedAchievements.includes(
      achievement
    )
  ) {

    setUnlockedAchievements(
      prev => [
        ...prev,
        achievement
      ]
    )

    setPopupAchievement(
      achievement
    )

    const timer =
      setTimeout(() => {

        console.log(
          "Popup hidden"
        )

        setPopupAchievement(
          null
        )

      }, 3000)

    return () =>
      clearTimeout(timer)
  }

}, [completed,])

  const toggle = (index) => {

    const updated = [...habits]

    updated[index].done =
      !updated[index].done

const today =
  new Date().toDateString()

if (
  updated[index].done &&
  updated[index].lastTrackedDate !== today
) {

  const lastDate =
    updated[index].lastTrackedDate

  if (!lastDate) {

    updated[index].currentStreak = 1

  } else {

    const previous =
      new Date(lastDate)

    const current =
      new Date(today)

    const diffDays =
      Math.floor(
        (
          current - previous
        ) /
        (
          1000 *
          60 *
          60 *
          24
        )
      )

    if (diffDays === 1) {

      updated[index].currentStreak += 1

    } else {

      updated[index].currentStreak = 1

    }

  }

  if (
    updated[index].currentStreak >
    updated[index].bestStreak
  ) {

    updated[index].bestStreak =
      updated[index].currentStreak
  }

  updated[index].lastTrackedDate =
    today
}

    setHabits(updated)
  }

  const addHabit = (name) => {

    if (!name.trim()) return

    setHabits([
      ...habits,
      {
        name,
        done: false,
        currentStreak: 0,
        bestStreak: 0,
        lastTrackedDate: null
      }
    ])
  }

  const deleteHabit = (index) => {

    setHabits(
      habits.filter((_, i) => i !== index)
    )
  }

  const editHabit = (index) => {

    const newName = prompt(
      "New habit name:",
      habits[index].name
    )

    if (!newName) return

    const updated = [...habits]

    updated[index].name = newName

    setHabits(updated)
  }

const resetStreaks = () => {

  if (
    !window.confirm(
      "Reset all streaks?"
    )
  ) return

  setHabits(prev =>
    prev.map(habit => ({
      ...habit,
      currentStreak: 0,
      bestStreak: 0,
      lastTrackedDate: null
    }))
  )
}

const resetAchievements = () => {

  if (
    !window.confirm(
      "Reset achievements?"
    )
  ) return

  localStorage.removeItem(
    "bateman-achievements"
  )

  window.location.reload()
}

const resetAnalytics = () => {

  if (
    !window.confirm(
      "Reset analytics?"
    )
  ) return

  setHistory([])
}

const factoryReset = () => {

  if (
    !window.confirm(
      "Delete ALL data?"
    )
  ) return

  localStorage.clear()

  window.location.reload()
}

  return (

    <div className="app">

      <AchievementPopup
  achievement={popupAchievement}
/>

      <Sidebar
        setPage={setPage}
        page={page}
      />

      <main className="main">

        {page === "dashboard" && (
          <Dashboard
            score={score}
            completed={completed}
            total={habits.length}
            xp={xp}
            level={level}
            habits={habits}
          />
        )}

        {page === "habits" && (
          <>
            <AddHabit
              addHabit={addHabit}
            />

            <HabitList
              habits={habits}
              toggle={toggle}
              deleteHabit={deleteHabit}
              editHabit={editHabit}
            />
          </>
        )}

        {page === "analytics" && (
          <Analytics
            history={history}
          />
        )}

{page === "settings" && (
  <Settings
    resetStreaks={resetStreaks}
    resetAchievements={
      resetAchievements
    }
    resetAnalytics={
      resetAnalytics
    }
    factoryReset={
      factoryReset
    }
  />
)}

      </main>

    </div>
  )
}