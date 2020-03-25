import React, {FunctionComponent, useContext} from "react";
import DisplayContext from "../contexts/DisplayContext";
import ThemeContext from "../contexts/ThemeContext";

interface Props {};

const Display: FunctionComponent<Props> = () => {

    const {display, setDisplay} = useContext(DisplayContext);
    const theme = useContext(ThemeContext);

    return (
        <div className="display" style={theme.display}>{display}</div>
    )

};

export default Display;