import React, { useEffect, useState, useContext, Component } from "react";
import GoogleMapReact from "google-map-react";
import { getCustomerCoords } from "../../utils/getData";
import { AppContext } from "../AppContext";
import { VendorButton } from "../../styles/buttons";

// const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY;
// const gMAPI = "AIzaSyApyt224I8eHKHjNrZMZUZ6h5nCWm-0qus";
require("dotenv").config();

export default function HeatMapForVendor() {
  const { customerCoords, setCustomerCoords } = useContext(AppContext);
  const gMAPI = "AIzaSyBlm3QfivNjejFqL3StXdPuRf0-yEsdM9o";
  // const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY;

  const mapStyles = {
    height: "60vh",
    width: "100%",
  };

  const [currentPosition, setCurrentPosition] = useState({});
  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  // useEffect(async () => {
  //   let coordsArr = await getCustomerCoords();
  //   console.log("HeatMapForVendor -> coordsArr", coordsArr);
  //   setCustomerCoords((coordsArr) => [...coordsArr]);
  // }, []);

  const handleFetchCoords = async () => {
    console.log("FETCH COORDS CALLED");
    let coordsArr = await getCustomerCoords();
    console.log("HeatMapForVendor -> coordsArr", coordsArr);
    let positionsValue = { positions: coordsArr };
    setCustomerCoords(positionsValue);
  };

  return (
    <section style={mapStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: gMAPI }}
        mapContainerStyle={mapStyles}
        defaultZoom={13}
        defaultCenter={{ lat: 51.5646, lng: 0.1047 }}
        heatmapLibrary={true}
        heatmap={customerCoords}
      ></GoogleMapReact>
      <VendorButton type="submit" onClick={handleFetchCoords}>
        View customers on map
      </VendorButton>
    </section>
  );
}
