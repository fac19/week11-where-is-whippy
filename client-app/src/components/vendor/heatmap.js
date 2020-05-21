import React, { useState } from "react"
import { Link } from "react-router-dom"
import LondonMap from "../../utils/london-map.js"

export default function Heatmap() {
  //fetch API - retrieve all lat/lng coordinates from
  //then(data => data.forEach(create new array heatmapData))

  //   const [customerPosition, getCustomerPositions] = React.useState({})
  //   const marker = (position) => {
  //     const position = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     } //marker should be an object made up the arrays pulled from the fetch request?
  //     getCustomerPositions(customerPosition)
  //   }

  //   React.useEffect(() => {
  //     navigator.geolocation.getCustomerPosition(marker)
  //   })

  // where does code for the marker go? to be imported or exported?

  return (
    <section>
      <section className="map">
        <LondonMap />
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
