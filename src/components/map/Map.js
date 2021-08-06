import React from 'react';
import "./Map.css";
import { Map as leafletMap, MapContainer, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from '../../util';
import "leaflet/dist/leaflet.css";

// Redux
import { connect } from 'react-redux';

export const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

function Map({ center, zoom, data }) {
    return (
        <div className="map" >
            <MapContainer center={center} zoom={zoom}>
                <ChangeView center={center} zoom={zoom} />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {!data ? (<div>Loading...</div>) : (showDataOnMap(data.countries))}
            </MapContainer>
        </div>
    )
}

const mapStateToProps = state => {
    return { data: state.data }
}
export default connect(mapStateToProps)(Map)

