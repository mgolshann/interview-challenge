import {
    DATA_COUNTRIES,
    SELECTED_COUNTRIES,
    DELETE_CHARACTER_SEARCH,
    FILL_BACKUP
} from '../types';

const initialState = {
    countries: [],
    backup: [],
    count: 0,
    loading: false
}

export const dataReducer = (state = initialState, action) => {
    let index;
    switch (action.type) {
        case DATA_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                backup: action.payload,
                count: action.payload.length,
                loading: true
            }
        case SELECTED_COUNTRIES:
            return {
                ...state,
                countries: state.backup.filter(({ name: id1 }) => action.payload.some(({ name: id2 }) => id2 === id1)),
                count: state.backup.length,
                loading: false
            }
        case DELETE_CHARACTER_SEARCH:
            return {
                ...state,
                countries: state.backup.filter(({ name: id1 }) => !action.payload.some(({ name: id2 }) => id2 !== id1)),
                count: (state.backup.length - action.payload.length),
                loading: false
            }
        case FILL_BACKUP:
            return {
                ...state,
                countries: state.backup,
                count: state.backup.length,
                loading: false
            }
        default:
            return state;
    }
}