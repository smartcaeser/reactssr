import React,{ useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children}) => {
    const [numberOfClicks , setNumberOfClicks] = useState(0);

    const increament = increamentBy => {
        setNumberOfClicks(numberOfClicks + increamentBy);
    };


    return (
        <CounterContext.Provider value={{numberOfClicks , increament}}>
            {children}
        </CounterContext.Provider>
    );
};