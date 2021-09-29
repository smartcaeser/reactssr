import React, { useContext } from "react";
import { CounterContext } from "../CounterContext";

export const CounterButton = () => {

    const { numberOfClicks , increament } = useContext(CounterContext);
    return (
        <>
            <p>Total number of clicks { numberOfClicks }</p>
            <button onClick={() => { increament(); }}>Add Click</button>
        </>
    );
};