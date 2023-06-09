import React, { useState } from "react";
import Button from "./button";

const Count = () => {

    const [count, setCount] = useState(0);

    const buttonPlus = () => {setCount(count + 1)};
    const buttonMinus = () => {setCount(count - 1)};
    const buttonReset = () => {setCount(0)};


    return (
        <div className="count">
            <h1>{count}</h1>
            <div className="btn-group">
                <Button buttonPlus = {buttonPlus} buttonMinus = {buttonMinus} buttonReset = {buttonReset} />
            </div>
        </div>
    );
}

export default Count;