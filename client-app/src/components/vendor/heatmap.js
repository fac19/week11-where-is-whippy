import React from "react"
import { Link } from "react-router-dom"
import LondonMap from "../../utils/london-map.js"

export default function Heatmap() {
  //fetch API - retrieve all lat/lng coordinates from
  //then(data => data.forEach(create new array heatmapData))

  return (
    <section>
      <section className="map">
        <LondonMap />
        <p>hello</p>
      </section>
      <Link
        to={{
          pathname: "/schedule",
          state: {
            editSchedule: true,
          },
        }}
        className="home-link__schedule"
      >
        Edit schedule
      </Link>
    </section>
  )
}
