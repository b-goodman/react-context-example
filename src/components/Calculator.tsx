import React, {FunctionComponent, useState, useContext} from "react";
import Keypad from "./Keypad";
import Display from "./Display";
import ThemeContext, {themes} from "../contexts/ThemeContext";
import DisplayContext, {useDisplay} from "../contexts/DisplayContext"

interface Props {};

const Calculator: FunctionComponent<Props> = () => {
    const theme = useContext(ThemeContext);

    const [themeMode, setThemeMode] = useState<"light"|"dark">("light");
    
    const toggleTheme = (event: React.MouseEvent<HTMLInputElement, MouseEvent>)  => {
        if (themeMode === "light") {
            setThemeMode("dark")
        } else {
            setThemeMode("light")
        };
    };

    return (
    <ThemeContext.Provider value={themes(themeMode)} >
        <div className="calculator-wrapper" style={theme.wrapper}>
            <div className="column">
                <div className="heading row">
                    <h1>Calculator</h1>
                    <input type="button" value="Toggle Theme" onClick={toggleTheme} />
                </div>
                    <DisplayContext.Provider value={useDisplay()} >
                        <Display />
                        <Keypad />
                    </DisplayContext.Provider >
            </div>
        </div>
    </ThemeContext.Provider >
    )
};



export default Calculator;