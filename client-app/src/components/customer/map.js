//Map page for customer - having logged in would like to see nearby vendors and signal interest.
import React, { useEffect, useState, useContext, Component } from "react";
import GoogleMapReact from "google-map-react";
import { getCustomerCoords } from "../../utils/getData";
import { AppContext } from "../AppContext";
import { BlueButton } from "../../styles/buttons";
import addCustomerCoords from "../..utils/postData";

require("dotenv").config();

export default function HeatMapForVendor() {
  const { customerCoords, setCustomerCoords } = useContext(AppContext);
  const gMAPI = "AIzaSyBlm3QfivNjejFqL3StXdPuRf0-yEsdM9o";

  const mapStyles = {
    height: "60vh",
    width: "100%",
  };

  return (
    <section style={mapStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: gMAPI }}
        mapContainerStyle={mapStyles}
        defaultZoom={13}
        defaultCenter={{ lat: 51.5646, lng: 0.1047 }}
      ></GoogleMapReact>
      <BlueButton type="submit" onClick={addCustomerCoords}>
        SCREAM 4 ICE CREAM
      </BlueButton>
    </section>
  );
}

//Please ignore this
// const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY;
// const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY;
// const gMAPI = "AIzaSyApyt224I8eHKHjNrZMZUZ6h5nCWm-0qus";s
