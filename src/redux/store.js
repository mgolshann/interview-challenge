import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import { dataReducer } from './reducers/dataReducer';
    

const initialState = {};
const middleWare = [thunk];

const reducers = combineReducers({
    data: dataReducer,
});

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;