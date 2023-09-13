import { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = {
  isMobile: false,
  isLoading: false,
  isMobileNavOpen: false,
}
// Create a context for the Ui mode
const UiContext = createContext();

// Custom hook to access the Ui mode and setUiMode function
export function useUi() {
  return useContext(UiContext);
}

// Provider component to wrap your app with to provide the Ui context
export function UiProvider({ children }) {
  const [ui, dispatch] = useReducer(UiContext, initialState);

  // Toggle Ui mode
  const toggleUiMode = () => {
    setUiMode((prevUiMode) => !prevUiMode);
  };

  const value = {
    UiMode,
    setUiMode,
    toggleUiMode,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
