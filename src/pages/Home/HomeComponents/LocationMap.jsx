import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap,  } from "react-leaflet";

const LocationMap = () => {
  return (
    <section className="w-3/4 md:1/2 mx-auto mb-8 md:mt-36 md:mb-16">
        <h2 className="text-2xl md:text-4xl text-amber-400 text-center font-semibold pb-4 md:pb-10">Our location</h2>
      <MapContainer center={[23.8109, 90.4125]} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: 'w-full' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.8109, 90.4125]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default LocationMap;
