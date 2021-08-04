import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';



export const sortData = data => {
    const sortData = [...data];
    return sortData.sort((a, b) => b.population - a.population);
}

export const prettyPrintStat = (stat) => {
    return `+${numeral(stat).format("0.0a")}`
}

const casesTypeColors = {
    cases: {
        hex: "red",
        multiplier: 10,
    },

}


export const showDataOnMap = (countries, casesType) => {

    return (
        countries.map(country => (
            <Circle
                center={country.latlng}
                fillOpacity={0.4}
                color={casesTypeColors[casesType].hex}
                fillColor={casesTypeColors[casesType].hex}
                radius={
                    Math.sqrt(country.population) * casesTypeColors[casesType].multiplier
                }
            >
                <Popup>
                    <div className="info-container">
                        <div className="info-flag" style={{ backgroundImage: `url(${country.flag})` }} />
                        <div className="info-name">{country.name}</div>
                        <div className="info-confirmed">Population : {numeral(country.population).format("0, 0")}</div>
                    </div>
                </Popup>
            </Circle>
        ))
    );
}
