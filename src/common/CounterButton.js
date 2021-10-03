import React, { useContext, useState } from "react";
import { CounterContext } from "../CounterContext";

export const CounterButton = () => {

    const { numberOfClicks , increament } = useContext(CounterContext);
    const [increamentBy , setIcreamentBy] = useState(1);

    return (
        <>
            <p>Total number of clicks { numberOfClicks }</p>
            <input type="number" value={increamentBy} onChange={(e)=> setIcreamentBy(Number(e.target.value))}/>
            <button onClick={() => { increament(increamentBy); }}>Add Click</button>
        </>
    );
};