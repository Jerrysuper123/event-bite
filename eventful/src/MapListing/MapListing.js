import React, { useState, useRef, useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

export default function MapListing(props) {
  //state to manage if our map has been initialized
  const [map, setMap] = useState(null);
  //show or not show
  const [router, setRouter] = useState(false);
  const showRouter = () => {
    setRouter(true);
  };

  //state to manage our routing machine instance:
  const [routingMachine, setRoutingMachine] = useState(null);

  // Start-End points for the routing machine:
  const [start, setStart] = useState([1.3335, 103.7437]);
  const [end, setEnd] = useState([1.3076, 103.8808]);

  // Ref for our routing machine instace:
  const RoutingMachineRef = useRef(null);

  // Create the routing-machine instance:
  useEffect(() => {
    // Check For the map instance:
    if (!map) return;
    if (map) {
      // Assign Control to React Ref:
      RoutingMachineRef.current = L.Routing.control({
        position: "topright", // Where to position control on map
        lineOptions: {
          // Options for the routing line
          styles: [
            {
              color: "#757de8",
            },
          ],
        },
        waypoints: [start, end], // Point A - Point B
      });
      // Save instance to state:
      setRoutingMachine(RoutingMachineRef.current);
    }
  }, [map]);

  // Once routing machine instance is ready, add to map:
  useEffect(() => {
    if (!routingMachine) return;
    if (routingMachine) {
      routingMachine.addTo(map);
    }
    // remove dependancy on routingMachine, just depends router to change from true to false
  }, [router]);

  return (
    <React.Fragment>
      <h1>Map</h1>
      <h3 className="subText">highlight text</h3>
      <MapContainer
        center={[1.3521, 103.8198]}
        zoom={13}
        style={{
          width: "100%",
          height: "900px",
        }}
        //change the state of map when created
        whenCreated={(map) => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {props.data.map((eachEvent) => {
          return (
            <Marker position={eachEvent.latLng} key={eachEvent._id}>
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
                      <button className="btn btn-danger" onClick={showRouter}>
                        direction
                      </button>
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
