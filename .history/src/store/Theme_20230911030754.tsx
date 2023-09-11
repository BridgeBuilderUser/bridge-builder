"use client";
import { createContext, useReducer, useContext } from "react";

export const ThemeContext = createContext();

const themes = {
    LIGHT: "light",
    DARK: "dark",
};
// Initial state
const initialState = {
    theme: themes.LIGHT,
    companyName: "Bridge Builder",
    description: "Bridge Builder is a one-stop-shop for companies who need help building, managing & opertaing their Salesforce Database, Marketing Automation, and other business systems.",

      "features": [
        {
          "id": 1,
          "title": "Custom Salesforce Setup",
          "description": "Tailored Salesforce configurations to match your unique business needs."
        },
        {
          "id": 2,
          "title": "Data Migration Services",
          "description": "Seamless data transfer to Salesforce, ensuring data integrity and accuracy."
        },
        {
          "id": 3,
          "title": "Automation Solutions",
          "description": "Automate routine tasks and workflows for improved efficiency."
        },
        {
          "id": 4,
          "title": "Custom App Development",
          "description": "Build custom Salesforce apps to enhance your CRM capabilities."
        },
        {
          "id": 5,
          "title": "Salesforce Integration",
          "description": "Integrate Salesforce with other business tools for a unified platform."
        },
        {
          "id": 6,
          "title": "Data Analytics and Reporting",
          "description": "Access insightful analytics and reports for data-driven decision-making."
        },
        {
          "id": 7,
          "title": "User Training and Support",
          "description": "Comprehensive training and ongoing support for your Salesforce users."
        },
        {
          "id": 8,
          "title": "Security and Compliance",
          "description": "Ensure data security and compliance with industry standards."
        },
        {
          "id": 9,
          "title": "Scalability and Growth",
          "description": "Adapt Salesforce as your business grows with scalable solutions."
        },
        {
          "id": 10,
          "title": "24/7 Monitoring and Maintenance",
          "description": "Proactive monitoring and maintenance to keep your Salesforce running smoothly."
        }
      ]
    
    
};

// Action creators
export function setTheme(theme:string) {
  return { type: SET_THEME, theme };
}

// Action types
export const SET_THEME = "SET_THEME";

// Reducer
export function themeReducer(state, action) {
  switch (action.type) {
    case SET_THEME:
        return { ...state, theme: action.theme };
    default:
      return state;
  }
}


function ThemeProvider(props:any) {
  const [theme, dispatch] = useReducer(themeReducer, initialState);

  const ThemeData = { theme, dispatch };

    return (
        <ThemeContext.Provider value={ThemeData} {...props}>
            {props.children}
        </ThemeContext.Provider>
    );
}

function useThemeContext() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useThemeContext };