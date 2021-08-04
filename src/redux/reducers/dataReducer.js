import { DATA_COUNTRIES, SELECTED_COUNTRY } from '../types';

const initialState = {
    countries: [],
    loading: false
}

export const dataReducer = (state = initialState, action) => {
    let index;
    switch (action.type) {
        case DATA_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: true
            }
        case SELECTED_COUNTRY:
            return {
                ...state,
                countries: action.payload,
                loading: true
            }
        default:
            return state;
    }
}