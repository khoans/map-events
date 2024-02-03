"use client";

import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const defaultPosition: [number, number] = [51.505, -0.09];

function MapsApp() {
  return (
    <div className="content">
      <div className="flex flex-col w-full h-full">
        <div className="h-12"></div>
        <MapContainer
          center={defaultPosition}
          zoom={13}
          className="map-container"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={defaultPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapsApp;
