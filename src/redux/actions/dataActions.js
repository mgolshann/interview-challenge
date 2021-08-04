import { DATA_COUNTRIES, SELECTED_COUNTRY } from '../types';
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

export const selectedCountry = (countries) => dispatch => {
    dispatch({ type: SELECTED_COUNTRY, payload: countries });
}
