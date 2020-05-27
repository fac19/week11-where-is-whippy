// let heatmapData = [
//     new.google.maps.LatLng(lat, lng)
//     new.google.maps.LatLng(lat, lng)
// ]

import { GoogleMap } from "@react-google-maps/api"

// let london = new google.maps.LatLng(lat, lng)

// map = new google.maps.Map(document.querySelector('.map'), {
//     center: london,
//     zoom: 13,
//     mapTypeId: 'satellite'
// })

export default function HeatMap() {
  const heatmapData = fetch(url + "/customers/coords").then((res) => res.json())

  const latLongArr = heatmapData.map(obj[(obj.latitude, obj.longitude)])

  let heatMapData = latLongArr.map((arr) => {
    new google.maps.LatLng(arr[0], arr[1])
  })
}
