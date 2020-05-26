import React from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

// "AIzaSyCpZyYXf7AXSluljORIU3cgXpeNJXLl0Fw"

export default function LondonMap() {
  const mapStyles = {
    height: 500,
    width: 500,
  }

  const defaultCenter = {
    lat: 51.5646,
    lng: 0.1047,
  }

  const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY

  return (
    <section>
      <LoadScript googleMapsApiKey={gMAPI}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        ></GoogleMap>
      </LoadScript>
    </section>
  )
}
