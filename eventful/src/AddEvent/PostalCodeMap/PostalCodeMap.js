import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function PostalCodeMap(props) {
  return (
    <section>
      <MapContainer
        // center={props.latLng}
        center={props.latLng}
        zoom={20}
        scrollWheelZoom={false}
        style={{
          width: "20rem",
          height: "20rem",
          zIndex: 0,
        }}
        id="postalCodeMap"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={props.latLng}></Marker>
      </MapContainer>
    </section>
  );
}
