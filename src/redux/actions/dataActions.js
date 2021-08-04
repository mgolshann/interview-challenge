import {
    DATA_COUNTRIES,
    SELECTED_COUNTRIES,
    DELETE_CHARACTER_SEARCH,
    FILL_BACKUP
} from '../types';
import axios from "axios";


export const getCountryList = () => dispatch => {
    axios
        .get("https://restcountries.eu/rest/v2/all")
        .then(res => {
            const countries = res.data.filter(country => country.latlng.length !== 0);
            dispatch({ type: DATA_COUNTRIES, payload: countries });
        })
        .catch(err => { console.log(err) });
}


export const deleteCharacterSearch = countries => dispatch => {
    dispatch({ type: SELECTED_COUNTRIES, payload: countries })
}

export const fillBackUp = () => dispatch => {
    dispatch({ type: FILL_BACKUP })
}

export const selectedCountry = countries => dispatch => {
    dispatch({ type: SELECTED_COUNTRIES, payload: countries })
}
