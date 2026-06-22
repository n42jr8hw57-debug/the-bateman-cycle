import React from "react"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts"

export default function Analytics({ history }) {

  const scores =
    history.map(item => item.score)

  const bestDay =
    scores.length
      ? Math.max(...scores)
      : 0

  const average =
    scores.length
      ? Math.round(
          scores.reduce(
            (a, b) => a + b,
            0
          ) / scores.length
        )
      : 0

  const trackedDays =
    history.length

  const latestScore =
    history.length
      ? history[history.length - 1].score
      : 0

  return (

    <div>

      <div className="stats-grid stats-grid-4">

        <div className="card stat-card">

          <h3>LATEST</h3>

          <div className="big-stat">
            {latestScore}%
          </div>

        </div>

        <div className="card stat-card">

          <h3>BEST DAY</h3>

          <div className="big-stat">
            {bestDay}%
          </div>

        </div>

        <div className="card stat-card">

          <h3>AVERAGE</h3>

          <div className="big-stat">
            {average}%
          </div>

        </div>

        <div className="card stat-card">

          <h3>TRACKED</h3>

          <div className="big-stat">
            {trackedDays}
          </div>

        </div>

      </div>

      <div
        className="card"
        style={{
          marginTop:"16px"
        }}
      >

        <h2>DISCIPLINE TREND</h2>

        <div
          style={{
            width:"100%",
            height:"320px"
          }}
        >

          <ResponsiveContainer>

            <LineChart data={history}>

              <XAxis
                dataKey="day"
              />

              <YAxis
                domain={[0,100]}
              />

              <Tooltip
                contentStyle={{
                  background:"#0d0d0d",
                  border:"1px solid #222",
                  borderRadius:"16px",
                  color:"#fff"
                }}
                labelStyle={{
                  color:"#fff"
                }}
              />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#ffffff"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      <div
        className="card"
        style={{
          marginTop:"16px"
        }}
      >

        <h2>HABIT CALENDAR</h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:
              "repeat(7, 18px)",
            gap:"8px",
            marginTop:"20px"
          }}
        >

{history.map((day, index) => {

  let color = "#151515"

  if (day.score >= 90) {
    color = "#ffffff"
  }
  else if (day.score >= 75) {
    color = "#bdbdbd"
  }
  else if (day.score >= 50) {
    color = "#7a7a7a"
  }
  else if (day.score > 0) {
    color = "#3a3a3a"
  }

  return (

    <div
      key={index}
      title={
        `${day.day} • ${day.score}%`
      }
      style={{
        width:"18px",
        height:"18px",
        borderRadius:"6px",
        background:color,
        transition:"0.2s"
      }}
    />

  )

})}

        </div>

      </div>

    </div>

  )
}