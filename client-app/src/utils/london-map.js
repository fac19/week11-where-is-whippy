import React from "react"
// import { Map, GoogleApiWrapper } from "google-maps-react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
require("dotenv").config()

export default function LondonMap() {
  const mapStyles = {
    height: 500,
    width: 500,
  }

  const defaultCenter = {
    lat: 51.5074,
    lng: 0.1278,
  }

  return (
    <section>
      <p> London Map Function </p>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        />
      </LoadScript>
    </section>
  )
}

// var script = document.createElement('script');
// script.src = "https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=visualization";
// script.defer = true;
// script.async = true;

// let map;

// function initMap() {
//     map = new google.maps.Map(document.querySelector(".map"), {
//         center: {lat: , lng: },
//         zoom: 10
//     });
// }

// window.initMap;

// OR

// let london = new google.maps.LatLng(lat, lng)

// map = new google.maps.Map(document.querySelector('.map'), {
//     center: london,
//     zoom: 13,
//     mapTypeId: 'satellite'
// })

// https://developers.google.com/maps/documentation/javascript/tutorial

// https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2

// https://janosh.io/blog/google-maps+react-hooks (!!!)

// * https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d// * https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
