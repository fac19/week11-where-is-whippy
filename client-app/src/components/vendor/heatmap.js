import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
// const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY;
// const gMAPI = "AIzaSyApyt224I8eHKHjNrZMZUZ6h5nCWm-0qus";
require("dotenv").config();

// export const MapContainer = () => {

//   const [ currentPosition, setCurrentPosition ] = useState({});

//   const success = position => {
//     const currentPosition = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     }
//     setCurrentPosition(currentPosition);
//   };

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(success);
//   })
// ...
//   return (
//      ...
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={13}
//           center={currentPosition}>
//           {
//             currentPosition.lat &&
//             (
//               <Marker position={currentPosition}
//             )
//           }
//         <GoogleMap/>
//      ...
//   )
// }

export default function HeatMapForVendor() {
  const gMAPI = "AIzaSyBlm3QfivNjejFqL3StXdPuRf0-yEsdM9o";
  // const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY;
  const mapStyles = {
    height: 500,
    width: 500,
  };

  // const defaultCenter = {
  //   lat: 51.5646,
  //   lng: 0.1047,
  // };

  const [currentPosition, setCurrentPosition] = useState({});
  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  return (
    <section>
      <LoadScript googleMapsApiKey={gMAPI}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}
        >
          {currentPosition.lat && <Marker position={currentPosition}></Marker>}>
        </GoogleMap>
      </LoadScript>
    </section>
  );
}

// import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import LondonMap from "../../utils/london-map.js"
// import { PinkButton } from "../../styles/buttons"
// export default function Heatmap() {
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

//   return (
//     <section>
//       <section className="map">
//         <LondonMap />
//       </section>
//       <Link
//         to={{
//           pathname: "/timetable",
//           state: {
//             editSchedule: true,
//           },
//         }}
//         className="home-link__schedule"
//       >
//         <PinkButton className="home-btn__schedule">
//           Edit Current Schedule
//         </PinkButton>
//       </Link>
//     </section>
//   )
// }
