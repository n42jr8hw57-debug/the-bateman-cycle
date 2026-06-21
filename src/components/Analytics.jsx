import React from "react"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts"

export default function Analytics() {

  const data = [
    { day:"Mon", score:40 },
    { day:"Tue", score:60 },
    { day:"Wed", score:50 },
    { day:"Thu", score:80 },
    { day:"Fri", score:70 },
    { day:"Sat", score:90 },
    { day:"Sun", score:100 }
  ]

  return (

    <div>

      <div className="card">

        <h2>WEEKLY DISCIPLINE</h2>

        <div
          style={{
            width:"100%",
            height:"350px"
          }}
        >

          <ResponsiveContainer>

            <LineChart data={data}>

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

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

    </div>

  )
}