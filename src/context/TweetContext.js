import React from "react";

var TweetStateContext = React.createContext();
var TweetDispatchContext = React.createContext();

function countryReducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRY_LIST":
      return { ...state, data: action.payload };
   
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CountryProvider({ children }) {
  var [state, dispatch] = React.useReducer(countryReducer, {
    countries: []
  });
  return (
    <TweetStateContext.Provider value={state}>
      <TweetDispatchContext.Provider value={dispatch}>
        {children}
      </TweetDispatchContext.Provider>
    </TweetStateContext.Provider>
  );
}

function useTweetState() {
  var context = React.useContext(TweetStateContext);
  if (context === undefined) {
    throw new Error("useTweetState must be used within a CountryProvider");
  }
  return context;
}

function useTweetDispatch() {
  var context = React.useContext(TweetDispatchContext);
  if (context === undefined) {
    throw new Error("useTweetDispatch must be used within a CountryProvider");
  }
  return context;
}

export { SetCountryList };

// ###########################################################
function SetCountryList(dispatch, list) {
  dispatch({
    type: "SET_COUNTRY_LIST",
    payload: list
  });
}



