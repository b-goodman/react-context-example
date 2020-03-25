import {createContext, useState} from "react";

interface DisplayContext {
    display: string[];
    setDisplay: (newVal: string[]) => void;
}

const defaultDisplayContextValue: DisplayContext = {
    display: [""],
    setDisplay: (newVal: string[]) => { }
};

const DisplayContext = createContext<DisplayContext>(defaultDisplayContextValue);

export const useDisplay = (): DisplayContext => {
    const [display, setDisplay] = useState<string[]>(defaultDisplayContextValue.display);
    return {display, setDisplay};
}


export default DisplayContext;