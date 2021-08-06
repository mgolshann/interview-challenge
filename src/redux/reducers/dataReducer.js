import {
    DATA_COUNTRIES,
    SELECTED_COUNTRIES,
    DELETE_CHARACTER_SEARCH,
    FILL_BACKUP
} from '../types';

const initialState = {
    countries: [],
    backup: [],
    count: 0
}

export const dataReducer = (state = initialState, action) => {
    let index;
    switch (action.type) {
        case DATA_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                backup: action.payload,
                count: action.payload.length
            }
        case SELECTED_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                count: action.payload.length
            }
        case DELETE_CHARACTER_SEARCH:
            return {
                ...state,
                countries: action.payload,
                count: action.payload.length
            }
        case FILL_BACKUP:
            return {
                ...state,
                countries: state.backup,
                count: state.backup.length
            }
        default:
            return state;
    }
}