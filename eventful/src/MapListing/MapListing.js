import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapListing(props) {
  return (
    <React.Fragment>
      <h1>Map</h1>
      <h3 className="highlightText">highlight text</h3>
      <MapContainer
        center={[1.3521, 103.8198]}
        zoom={13}
        style={{
          width: "100%",
          height: "900px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {props.data.map((eachEvent) => {
          return (
            <Marker position={eachEvent.latLng}>
              <Popup>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={eachEvent.eventImage}
                    className="card-img-top"
                    alt="image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{eachEvent.title}</h5>
                    <p>{eachEvent.startDateTime}</p>
                    <p>event in progress now...</p>
                    <p className="card-text">{eachEvent.descriptionSummary}</p>
                    <p>{eachEvent.organizer}</p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-info">more info</button>
                      <button className="btn btn-danger">direction</button>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* <Marker position={[1.3477, 103.755]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </React.Fragment>
  );
}
