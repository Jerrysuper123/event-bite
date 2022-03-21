import React, { useState, useRef, useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

//import detailevenpage
import EventDetailsPage from "./EventDetailsPage/EventDetailsPage";

export default function MapListing(props) {
  //state to manage if our map has been initialized
  const [map, setMap] = useState(null);
  //show or not show
  const [router, setRouter] = useState(0);
  const showRouter = async (endLatLng) => {
    // use await to wait for setState and for the route to redraw
    // clear previous routing drawn
    await setEnd(endLatLng);
    if (router === 0) {
      setRouter(1);
    } else {
      setRouter(0);
    }
  };

  //state to manage our routing machine instance:
  const [routingMachine, setRoutingMachine] = useState(null);

  const getUserLocation = () => {
    // must use arrow function inside getCurrentPosition in order to acess this.setState
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setStart([lat, lng]);
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);
  // Start-End points for the routing machine:
  //set start as the user currentlocation
  //[1.3077699, 103.8812231]
  const [start, setStart] = useState([]);
  console.log("start", start);
  const [end, setEnd] = useState([]);
  console.log("end", end);
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
    // route will be redraw if there map, start and end points of map changes
  }, [map, start, end]);

  // Once routing machine instance is ready, add to map:
  useEffect(() => {
    if (!routingMachine) return;
    if (routingMachine) {
      routingMachine.addTo(map);
    }
    // remove dependancy on routingMachine, just depends router to change from true to false
  }, [router]);

  const [oneEventDetails, setOneEventDetails] = useState(null);
  const setOneEvent = (oneEvent) => {
    setOneEventDetails(oneEvent);
  };
  return (
    <React.Fragment>
      <EventDetailsPage data={oneEventDetails ? oneEventDetails : {}} />
      <h1>Map</h1>
      <h3 className="subText">highlight text</h3>
      <MapContainer
        center={[1.3521, 103.8198]}
        zoom={13}
        style={{
          width: "100%",
          height: "900px",
          zIndex: 0,
        }}
        //change the state of map when created
        whenCreated={(map) => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {props.data.data.map((eachEvent) => {
          return (
            <React.Fragment key={eachEvent._id}>
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
                      <p className="card-text">
                        {eachEvent.descriptionSummary}
                      </p>
                      <p>{eachEvent.organizer}</p>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-info"
                          data-bs-toggle="modal"
                          // moreInfoModel
                          data-bs-target="#moreInfoModel"
                          onClick={() => {
                            setOneEvent(eachEvent);
                          }}
                        >
                          more info
                        </button>
                        {/* modal to show the event details */}

                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            showRouter(eachEvent.latLng);
                          }}
                        >
                          direction
                        </button>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            </React.Fragment>
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
