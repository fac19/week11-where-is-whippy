// let heatmapData = [
//     new.google.maps.LatLng(lat, lng)
//     new.google.maps.LatLng(lat, lng)
// ]

// let london = new google.maps.LatLng(lat, lng)

// map = new google.maps.Map(document.querySelector('.map'), {
//     center: london,
//     zoom: 13,
//     mapTypeId: 'satellite'
// })

export default function HeatMap() {
  const heatmapData = fetch(url + "/customers/coords").then((res) => res.json())
}
