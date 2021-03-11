import React from 'react';
import numeral from 'numeral';
import { Circle, LayersControl, Popup } from 'react-leaflet';


const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 200,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 200,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 200,
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


export const showDataOnMap = (data, casesType = "cases") => {
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
            ></Circle>
        ))
    );
}