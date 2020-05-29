//Map page for customer - having logged in would like to see nearby vendors and signal interest.
import React, { useEffect, useState, useContext, Component } from "react";
import GoogleMapReact from "google-map-react";
import { getCustomerCoords } from "../../utils/getData";
import { AppContext } from "../AppContext";
import { BlueSmallButton } from "../../styles/buttons";
import { addCustomerCoords } from "../../utils/postData";

require("dotenv").config();

export default function MapForCustomer() {
  const { myCustomerCoords, setMyCustomerCoords } = useContext(AppContext);
  const gMAPI = "AIzaSyBlm3QfivNjejFqL3StXdPuRf0-yEsdM9o";

  function getCustomerLocation() {
    const success = (position) => {
      const coordsObj = {
        customerId: 3, // hardcoded
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        temperature: 34, // hardcoded
      };
      setMyCustomerCoords({
        lat: position.coords.latitude,
        lat: position.coords.longitude,
      });
      addCustomerCoords(coordsObj); // Add your location to the db
      console.log(position.coords.latitude, position.coords.longitude);
    };
    const error = () => {
      console.log("error -> error", error);
    };
    const geo = navigator.geolocation;
    navigator.geolocation.getCurrentPosition(success, error);
  }

  const mapStyles = {
    height: "60vh",
    width: "100%",
  };

  return (
    <>
      <section style={mapStyles}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: gMAPI }}
          mapContainerStyle={mapStyles}
          defaultZoom={13}
          defaultCenter={myCustomerCoords}
        ></GoogleMapReact>
      </section>
      <BlueSmallButton type="submit" onClick={getCustomerLocation}>
        SCREAM 4 ICE CREAM
      </BlueSmallButton>
    </>
  );
}

// onClick = { addCustomerCoords };

//Please ignore this
// const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY;
// const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY;
// const gMAPI = "AIzaSyApyt224I8eHKHjNrZMZUZ6h5nCWm-0qus";s
