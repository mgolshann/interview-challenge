import React from 'react';
import "./Map.css";
import { Circle, LayerGroup, LayersControl, Map as leafletMap, MapContainer, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from './util';

function Map({ zoom, countries, casesType }) {

    const center = [51.505, -0.09]

    return (
        <div className="map">
            <MapContainer center={center} zoom={3} scrollWheelZoom={false}>
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.Overlay checked name="Layer group with circles">
                        <LayerGroup>
                            {showDataOnMap(countries, casesType)}
                        </LayerGroup>
                    </LayersControl.Overlay>

                </LayersControl>
            </MapContainer>
        </div >
    )
}

export default Map;


export const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}