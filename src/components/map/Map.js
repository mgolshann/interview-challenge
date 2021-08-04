import React from 'react';
import "./Map.css";
import { Circle, Map as leafletMap, MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from '../../util';
import { connect } from 'react-redux';
import "leaflet/dist/leaflet.css";

function Map({ center, zoom, casesType, data }) {
    return (
        <div className="map" >
            <MapContainer center={center} zoom={zoom}>
                <ChangeView center={center} zoom={zoom} />

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {!data ? (
                    <div>Loading...</div>
                ) : (
                        showDataOnMap(data.countries, casesType)
                    )}

            </MapContainer>
        </div>
    )
}

const mapStateToProps = state => {
    return { data: state.data }
}

export default connect(mapStateToProps)(Map)


export const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

