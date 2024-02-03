"use client";

import React, { useRef, useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import eventsData from "../historyEvents";

export interface HistoricalEvent {
  id: number;
  title: string;
  description: string;
  position: [number, number];
  category: string;
}

const defaultPosition: [number, number] = [21.028, 105.854];
const emptyStar = <i className="fa-regular fa-star"></i>;
const fullStar = (
  <i className="fa-solid fa-star" style={{ color: "#fdc401" }}></i>
);
function MapsApp() {
  const icon: Icon = new Icon({
    iconUrl: "marker.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="content">
      <div className="flex flex-col w-full h-full">
        <div className="h-12"></div>
        <MapContainer
          center={defaultPosition}
          zoom={1}
          className="map-container"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {eventsData.map((event) => {
            return (
              <Marker key={event.id} position={event.position} icon={icon}>
                <Popup>
                  <div className="popup-inner">
                    <h2 className="popup-inner__title">{event.title}</h2>
                  </div>
                  <p className="popup-inner__description">
                    {event.description}
                  </p>
                  <button className="popup-inner__button">
                    <span>{emptyStar}</span>
                    Favourite
                  </button>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapsApp;
