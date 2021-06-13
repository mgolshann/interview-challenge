import React from 'react';
import "./Map.css";
import { Circle, Map as leafletMap, MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from './util';

function Map({ center, zoom, countries, casesType }) {
    return (
        <div className="map" >
            <MapContainer center={center} zoom={zoom}>
                <ChangeView center={center} zoom={zoom} />

                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {showDataOnMap(countries, casesType)}

            </MapContainer>
        </div>
    )
}

export default Map;


export const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}