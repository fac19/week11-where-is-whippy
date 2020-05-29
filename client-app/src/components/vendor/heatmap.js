import React, { useEffect, useState, useContext, Component } from "react";
import GoogleMapReact from "google-map-react";
import { getCustomerCoords } from "../../utils/getData";
import { AppContext } from "../AppContext";
import { PinkButton } from "../../styles/buttons";

require("dotenv").config();

export default function HeatMapForVendor() {
  const { customerCoords, setCustomerCoords } = useContext(AppContext);
  const gMAPI = "AIzaSyBlm3QfivNjejFqL3StXdPuRf0-yEsdM9o";

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

  const handleFetchCoords = async () => {
    let coordsArr = await getCustomerCoords();
    let positionsValue = { positions: coordsArr };
    setCustomerCoords(positionsValue);
  };

  return (
    <section style={mapStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: gMAPI }}
        mapContainerStyle={mapStyles}
        defaultZoom={11}
        defaultCenter={{ lat: 51.571, lng: -0.1204 }}
        heatmapLibrary={true}
        heatmap={customerCoords}
      ></GoogleMapReact>
      <PinkButton type="submit" onClick={handleFetchCoords}>
        View customers on map
      </PinkButton>
    </section>
  );
}

// const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY;
// const gMAPI = process.env.REACT_APP_GOOGLEAPIKEY;
// const gMAPI = "AIzaSyApyt224I8eHKHjNrZMZUZ6h5nCWm-0qus";
