"use client";
import { createContext, useReducer, useContext } from "react";

export const UiContext = createContext();

 
// Initial state
const initialState = {
 scrollPosition: 0,
};

 
// Reducer
export function uiReducer(state, action) {
  switch (action.type) {
    case 'SET_SCROLL_POSITION':
        return { ...state, scrollPosition: action.scrollPosition };
    default:
      return state;
  }
}

function UiProvider(props: any) {
  const [Ui, dispatch] = useReducer(uiReducer, initialState);

  const uiData = { ui, dispatch };

  return (
    <UiContext.Provider value={uiData} {...props}>
      {props.children}
    </UiContext.Provider>
  );
}

function useUiContext() {
  return useContext(UiContext);
}

export { UiProvider, useUiContext };
