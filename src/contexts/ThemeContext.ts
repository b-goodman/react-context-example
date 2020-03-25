import {createContext} from "react";


const colors = {
    light: {
        colorPrimary: "#FEDFCD",
        colorSecondary:"#E8D3B0",
        displayBackground: "#ffffff",
        keyColor: "#1A1919",
        colorAccent: "#fdfdff",
  },
  dark: {
        colorPrimary:" #363556",
        colorSecondary: "#694c65",
        displayBackground: "#585353",
        keyColor: "#FFFDFC",
        colorAccent: "#c5c7cc",
  }
};


export const themes = (type:"light"|"dark") => {
    return {
            type: type,
            keyBtn: {
                background: colors[type].colorPrimary,
                color: colors[type].keyColor,
            },
            operatorBtn: {
                background: colors[type].colorSecondary,
                color: colors[type].keyColor,
            },
            display: {
                background: colors[type].displayBackground,
                color: colors[type].keyColor,
            },
            wrapper: {
                background: colors[type].colorAccent,
            }
    }
};


const ThemeContext = createContext(themes("dark"));

export default ThemeContext;
