import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';


const casesTypeColors = {
    cases: {
        hex: "red",
        multiplier: 200,
    },
    recovered: {
        hex: "green",
        multiplier: 800,
    },
    deaths: {
        hex: "yellow",
        multiplier: 1200,
    }
}


export const sortData = data => {
    const sortData = [...data];

    return sortData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
    // sortData.sort((a, b) => {
    //     if (a.cases > b.cases) {
    //         return -1;
    //     } else {
    //         return 1;
    //     }
    // });

    // return sortData;
}

export const prettyPrintStat = (stat) => {

    return `+${numeral(stat).format("0.0a")}`

}

export const showDataOnMap = (data, casesType) => {
    console.log(">>>>>", casesTypeColors[casesType].hex);
    return (
        data.map(country => (
            <Circle
                center={[country.countryInfo.lat, country.countryInfo.long]}
                fillOpacity={0.4}
                color={casesTypeColors[casesType].hex}
                fillColor={casesTypeColors[casesType].hex}
                radius={
                    Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
                }
            >
                <Popup>
                    <div className="info-container">
                        <div className="info-flag" style={{ backgroundImage: `url(${country.countryInfo.flag})` }} />
                        <div className="info-name">{country.country}</div>
                        <div className="info-confirmed">Cases : {numeral(country.cases).format("0, 0")}</div>
                        <div className="info-recovered">Recovered : {numeral(country.recovered).format("0, 0")}</div>
                        <div className="info-deaths">Deaths : {numeral(country.deaths).format("0, 0")}</div>

                    </div>
                </Popup>
            </Circle>
        ))
    );
}