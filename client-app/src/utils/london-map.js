import React from "react"
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

// import { Map, GoogleApiWrapper } from 'google-maps-react'

// const mapStyles = {
//   height: 500,
//   width: 500,
// }

// const defaultCenter = {
//   lat: 51.5074,
//   lng: 0.1278,
// }

// render() {
//     return (
//       <Map
//       google={this.PaymentResponse.google}
//       zoom={8}
//       style={mapsStyles}
//       initialCenter={defaultCenter} />
//   );
// }

// export default GoogleApiWrapper( {
//   apiKey: process.env.REACT_APP_GOOGLE_API_KEY
// })
