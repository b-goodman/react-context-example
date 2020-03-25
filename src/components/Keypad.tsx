import React, {FunctionComponent, useContext, useState} from "react";
import ThemeContext from "../contexts/ThemeContext";
import DisplayContext from "../contexts/DisplayContext";
import "./style.scss"

interface Props {};

const Keypad: FunctionComponent<Props> = () => {

    const [buffer, setBuffer] = useState<string[]>([""]);

    const theme = useContext(ThemeContext);
    const {display, setDisplay} = useContext(DisplayContext);

    const numericKeys = [9 ,8, 7, 6, 5 ,4, 3, 2, 1, ".", 0];

    const operatorKeys = ["+", "-", "*", "/"];

    const handleNumericKeypadInput = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const val = event.currentTarget.value;
        setDisplay([...display, val]);
        setBuffer([...buffer, val]);
        console.log(buffer)
    };

    const handleOperatorKeyInput = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const operator = event.currentTarget.value;
        setBuffer([...buffer, operator]);
        setDisplay([])
    };

    const evaluateInput = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const input = buffer.join("");
        console.log(input)
        const output = [eval(input)];
        setBuffer(output)
        setDisplay(output)
    };

    const clearEntry = () => {
        setDisplay([""]);
        setBuffer([""])
    };

    return (
        <div className="keypad-wrapper">
            <div className="column">
                <div className="row">
                    <div className="grid">
                        {numericKeys.map( (el, index) => {
                            return <input type="button" className="key-btn" style={theme.keyBtn} key={el} value={el} onClick={handleNumericKeypadInput} />
                        })}
                    </div>
                    <div className="column">
                        {operatorKeys.map( (el) => {
                            return <input type="button" className="key-btn operator" style={theme.operatorBtn} key={el} value={el} onClick={handleOperatorKeyInput} />
                        })}
                    </div>
                </div>
                <div className="row">
                    <input type="button" className="key-btn operator" style={theme.operatorBtn} key={"="} value={"="} onClick={evaluateInput} />
                    <input type="button" className="key-btn operator" style={theme.operatorBtn} key={"C"} value="C" onClick={clearEntry} />
                </div>
            </div>
        </div>
    )
};

export default Keypad;