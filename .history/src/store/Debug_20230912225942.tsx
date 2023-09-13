"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import { pressKeys } from "@/lib/functions";
import { useRouter } from "next/navigation";
//initial state
const initialState = {
  debugMode: false,
};
// Create a context for the debug mode
const DebugContext = createContext();

//reducer
function debugReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DEBUG_MODE":
      return {
        ...state,
        debugMode: !state.debugMode,
      };
    case "SET_DEBUG_MODE":
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
  const router = useRouter();

  const [debugMode, dispatch] = useReducer(debugReducer, initialState);
  const debugFlag = "#debug";
  const debugTrigger = ["Shift", "D"];
  // Actions
  function toggleDebugMode() {
    dispatch({
      type: "TOGGLE_DEBUG_MODE",
    });
  }

  function setDebugMode(value: boolean) {
    dispatch({
      type: "SET_DEBUG_MODE",
      payload: value,
    });
  }

  useEffect(() => {
    function toggleDebugMode() {
      const currentUrl = window.location.href;

      // Check if '#debug' is present in the URL
      if (currentUrl.includes("#debug")) {
        // Remove '#debug' if it's present
        const newUrl = currentUrl.replace("#debug", "");
        router.push(newUrl);
      } else {
        // Add '#debug' if it's not present
        router.push(currentUrl + debugFlag);
      }
    }

    pressKeys(debugTrigger, toggleDebugMode);

    return () => {
      pressKeys(debugTrigger, toggleDebugMode);
    };
  }, [debugMode.debugMode, debugTrigger, router]);

  const value = {
    debugStore: {
      debugMode,
    },
    debugActions: {
      toggleDebugMode,
      setDebugMode,
    },
  };

  return (
    <DebugContext.Provider value={value}>{children}</DebugContext.Provider>
  );
}
