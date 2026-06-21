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

  return (

    <div className="card">

      <h2>WEEKLY DISCIPLINE</h2>

      <div
        style={{
          width: "100%",
          height: "300px"
        }}
      >

        <ResponsiveContainer>

          <LineChart data={history}>

            <XAxis dataKey="day" />

            <YAxis
              domain={[0, 100]}
            />

            <Tooltip
  contentStyle={{
    background:"#0d0d0d",
    border:"1px solid #222",
    borderRadius:"16px",
    color:"#fff",
    boxShadow:"0 10px 30px rgba(0,0,0,.4)"
  }}
  labelStyle={{
    color:"#fff",
    fontWeight:"700"
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

  )
}