"use client";
import { createContext, useContext, useEffect, useReducer } from 'react';
import { pressKeys } from '@/lib/functions';

//initial state
const initialState = {
  debugMode: false,
};
// Create a context for the debug mode
const DebugContext = createContext();

//reducer
function debugReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_DEBUG_MODE':
      return {
        ...state,
        debugMode: !state.debugMode,
      };
    case 'SET_DEBUG_MODE':
      return {
        ...state,
        debugMode: action.payload,
      };
    default:
      return state;
  }
}

// Custom hook to access the debug mode and setDebugMode function
export function useDebug() {
  return useContext(DebugContext);
}

// Provider component to wrap your app with to provide the debug context
export function DebugProvider({ children }: { children: React.ReactNode }) {
  const [debugMode, dispatch] = useReducer(debugReducer, initialState);
  const debugFlag = '#debug';
  const debugTrigger = ['Shift', 'D']
  // Actions
  function toggleDebugMode() {
    dispatch({
      type: 'TOGGLE_DEBUG_MODE',
    });
  }

  function setDebugMode(value: boolean) {
    dispatch({
      type: 'SET_DEBUG_MODE',
      payload: value,
    });
  }

  useEffect(() => {
    const updateUrlWithDebugMode = () => {

      if (debugMode.debugMode) {
        window.location.hash = debugFlag;
      } else {
        window.location.hash = '';
      }

      window.history.replaceState({}, '', `${url.pathname}?${params}`);
    };

    pressKeys(debugTrigger, updateUrlWithDebugMode)

    return () => {
      pressKeys(debugTrigger, updateUrlWithDebugMode)
    }
  }, [debugMode.debugMode, debugTrigger ]);

  const value = {
    debugMode,
    toggleDebugMode,
    setDebugMode,
  };


  return <DebugContext.Provider value={value}>{children}</DebugContext.Provider>;
}
