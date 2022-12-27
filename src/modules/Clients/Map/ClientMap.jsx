import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as parkData from "./skateboard-parks.json";
import mapStyles from "./mapStyles";
// AIzaSyCueZ-BzQugLmj0J1h3ODLAtoeAlLUuogk
const keyApi = 'AIzaSyCueZ-BzQugLmj0J1h3ODLAtoeAlLUuogk'
function Map() {
    const [selectedPark, setSelectedPark] = useState(null);
  
    useEffect(() => {
      const listener = e => {
        if (e.key === "Escape") {
          setSelectedPark(null);
        }
      };
      window.addEventListener("keydown", listener);
  
      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);
  
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 23.777176, lng: 90.399452 }}
        defaultOptions={{ styles: mapStyles }}
      >
        {/* {parkData.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0]
            }}
            onClick={() => {
              setSelectedPark(park);
            }}
            icon={{
              url: `/skateboarding.svg`,
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
        ))} */}
  
        {selectedPark && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedPark(null);
            }}
            position={{
              lat: selectedPark.geometry.coordinates[1],
              lng: selectedPark.geometry.coordinates[0]
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
  
  const MapWrapped = withScriptjs(withGoogleMap(Map));


const ClientMap = () => {
    return (
        <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            keyApi
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
};

export default ClientMap;