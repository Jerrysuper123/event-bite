import React, { useState, useRef, useEffect } from "react";
import L from "leaflet";
import "./style.css";
import Draggable from "react-draggable";
import DisplayRealTime from "./DisplayRealTime/DisplayRealTime";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

//import detailevenpage
import EventCard from "./EventCard/EventCard";
import EventDetailsPage from "./EventDetailsPage/EventDetailsPage";
import defaultMarker from "../images/defaultMarker.png";
import userLocationMarker from "../images/userLocationMarker.gif";
import destinationMarker from "../images/destinationMarker.png";

export default function MapListing(props) {
  //state to manage if our map has been initialized
  const [map, setMap] = useState(null);
  //show or not show
  const [router, setRouter] = useState(0);
  const showRouter = async (eachEvent) => {
    // use await to wait for setState and for the route to redraw
    // clear previous routing drawn
    await setEndEvent(eachEvent);
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
  const [endEvent, setEndEvent] = useState({});

  const showDestinationPopUp = () => {
    return (
      <EventCard
        eachEvent={endEvent}
        setOneEvent={setOneEvent}
        showRouter={showRouter}
      />
    );
  };
  // console.log("end", end);
  // Ref for our routing machine instace:
  const RoutingMachineRef = useRef(null);
  function removeRouteDrawn(map) {
    if (RoutingMachineRef.current !== null) {
      map.removeControl(RoutingMachineRef.current);

      RoutingMachineRef.current = null;
    }
  }
  // Create the routing-machine instance:
  useEffect(() => {
    // Check For the map instance:
    if (!map) return;
    if (map) {
      // Assign Control to React Ref:
      removeRouteDrawn(map);
      RoutingMachineRef.current = L.Routing.control({
        position: "topright", // Where to position control on map
        lineOptions: {
          // Options for the routing line
          styles: [
            {
              color: "#e27d60",
              weight: 5,
            },
          ],
        },
        waypoints: [start, endEvent.latLng], // Point A - Point B
        createMarker: function (i, start, n) {
          let marker_icon = null;
          if (i === 0) {
            // This is the first marker, indicating start
            marker_icon = createCustomMarkerIcon(userLocationMarker);
          } else if (i === n - 1) {
            //This is the last marker indicating destination
            marker_icon = createCustomMarkerIcon(destinationMarker);
          }
          let marker = L.marker(start.latLng, {
            draggable: true,
            bounceOnAdd: false,
            bounceOnAddOptions: {
              duration: 1000,
              height: 800,
            },
            icon: marker_icon,
          });
          //below addes pop up only to the destination
          if (i === 0) {
            marker.bindPopup("You are here!");
          } else if (i === n - 1) {
            //This is the last marker indicating destination
            marker.bindPopup(`<EventCard
            eachEvent=${endEvent}
            setOneEvent=${setOneEvent}
            showRouter=${showRouter}
          />`);
          }
          return marker;
        },
      });
      // Save instance to state:
      setRoutingMachine(RoutingMachineRef.current);
    }
    // route will be redraw if there map, start and end points of map changes
  }, [map, start, endEvent]);

  // Once routing machine instance is ready, add to map:
  useEffect(() => {
    if (!routingMachine) return;
    if (routingMachine) {
      routingMachine.addTo(map);
      let pop1 = L.popup()
        .setLatLng(endEvent.latLng)
        .setContent(
          `<EventCard
        eachEvent=${endEvent}
        setOneEvent=${setOneEvent}
        showRouter=${showRouter}
      />`
        )
        .openOn(map);

      map.flyTo(endEvent.latLng, 10);
    }
    // remove dependancy on routingMachine, just depends router to change from true to false
  }, [router]);

  const [oneEventDetails, setOneEventDetails] = useState(null);
  const setOneEvent = (oneEvent) => {
    setOneEventDetails(oneEvent);
  };

  //custom marker
  function createCustomMarkerIcon(imageUrl) {
    //customized pharmacy location marker
    let icon = L.Icon.extend({
      options: {
        //iconsize - width and height
        iconSize: [37, 40],
        //iconAnchor: x axis in pixel, y axis in pixel (based on left up corner of image as 0,0 coord)
        iconAnchor: [0, 0],
        //popupachor: x axis in pixel, y axis in pixel (based on image anchor)
        popupAnchor: [16, -3],
      },
    });

    let customIcon = new icon({
      iconUrl: imageUrl,
    });
    return customIcon;
  }

  return (
    <div
      style={{
        display: props.display,
      }}
    >
      <EventDetailsPage data={oneEventDetails ? oneEventDetails : {}} />
      <div className="mapEventListContainer">
        <MapContainer
          center={[1.3521, 103.8198]}
          zoom={13}
          style={{
            width: "100%",
            height: "900px",
            zIndex: 0,
          }}
          id="my-leaflet-map"
          //change the state of map when created
          whenCreated={(map) => setMap(map)}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            // credir: https://docs.stadiamaps.com/themes/
            //https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png
            //https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            // id="mapbox/dark-v10"
          />

          {props.data.map((eachEvent) => {
            return (
              <React.Fragment key={eachEvent._id}>
                <Marker
                  position={eachEvent.latLng}
                  key={eachEvent._id}
                  icon={
                    eachEvent.customizedMapMarker
                      ? createCustomMarkerIcon(eachEvent.customizedMapMarker)
                      : createCustomMarkerIcon(defaultMarker)
                  }
                >
                  <Popup>
                    <EventCard
                      eachEvent={eachEvent}
                      setOneEvent={setOneEvent}
                      showRouter={showRouter}
                    />
                  </Popup>
                </Marker>
              </React.Fragment>
            );
          })}
        </MapContainer>

        {/* Today's event list on the map */}
        <Draggable>
          <section className="eventList">
            <DisplayRealTime />
            <h2
            // style={{
            //   display: "none",
            // }}
            >
              Event list Mar 22, 2022
            </h2>
            {props.data.map((eachEvent) => {
              return (
                <EventCard
                  eachEvent={eachEvent}
                  setOneEvent={setOneEvent}
                  showRouter={showRouter}
                  margin={"2em"}
                />
              );
            })}
          </section>
        </Draggable>
      </div>
    </div>
  );
}
