import React from "react"
import { Link } from "react-router-dom"

export default function Heatmap() {
    //fetch API - retrieve all lat/lng coordinates from
    //then(data => data.forEach(create new array heatmapData))

    


    let heatmapData = [
        new.google.maps.LatLng(lat, lng)
        new.google.maps.LatLng(lat, lng)
    ]

    let london = new google.maps.LatLng(lat, lng)

    map = new google.maps.Map(document.querySelector('.map'), {
        center: london,
        zoom: 13,
        mapTypeId: 'satellite'
    })

  return (
    <section>
      <section className="map"></section>
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
