import React from "react"

export default function ProgressRing({ score }) {

  const radius = 90
  const circumference = 2 * Math.PI * radius

  const offset =
    circumference -
    (score / 100) * circumference

  return (

    <div
      style={{
        display:"flex",
        justifyContent:"center",
        marginBottom:"30px"
      }}
    >

      <svg
        width="240"
        height="240"
      >

        <circle
          cx="120"
          cy="120"
          r={radius}
          stroke="#151515"
          strokeWidth="14"
          fill="none"
        />

        <circle
          cx="120"
          cy="120"
          r={radius}
          stroke="white"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 120 120)"
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="52"
          fontWeight="700"
        >
          {score}%
        </text>

      </svg>

    </div>
  )
}