import React, { createContext, useReducer, useContext } from "react";


const themes = {
    LIGHT: "light",
    DARK: "dark",
};
// Initial state
const initialState = {
    theme: themes.LIGHT,
    companyName: "Bridge Builder",
    description: "Bridge Builder is a one-stop-shop for companies who need help building, managing & opertaing their Salesforce Database, Marketing Automation, and other business systems.",
};

// Action creators
export function setTheme(theme:string) {
  return { type: SET_THEME, theme };
}

// Action types
export const SET_THEME = "SET_THEME";

// Reducer
export function coreReducer(state, action) {
  switch (action.type) {
    case SET_THEME:
        return { ...state, theme: action.theme };
    default:
      return state;
  }
}
export const CoreContext = createContext();

function CoreProvider(props:any) {
  const [Core, dispatch] = useReducer(coreReducer, initialState);

  const CoreData = { Core, dispatch };

    return (
        <CoreContext.Provider value={CoreData}>
            {props.children}
        </CoreContext.Provider>
    );
}

function useCoreContext() {
  return useContext(CoreContext);
}

export { CoreProvider, useCoreContext };