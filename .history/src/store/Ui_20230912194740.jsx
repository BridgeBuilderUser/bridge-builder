import React, { createContext, useContext, useState } from 'react';

// Create a context for the debug mode
const DebugContext = createContext();

// Custom hook to access the debug mode and setDebugMode function
export function useDebug() {
  return useContext(DebugContext);
}

// Provider component to wrap your app with to provide the debug context
export function DebugProvider({ children }) {
  const [debugMode, setDebugMode] = useState(false);

  // Toggle debug mode
  const toggleDebugMode = () => {
    setDebugMode((prevDebugMode) => !prevDebugMode);
  };

  const value = {
    debugMode,
    setDebugMode,
    toggleDebugMode,
  };

  return <DebugContext.Provider value={value}>{children}</DebugContext.Provider>;
}
