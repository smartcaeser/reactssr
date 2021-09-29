import React,{ useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children}) => {
    const [numberOfClicks , setNumberOfClicks] = useState(0);

    const increament = () => {
        setNumberOfClicks(numberOfClicks + 1);
    };


    return (
        <CounterContext.Provider value={{numberOfClicks , increament}}>
            {children}
        </CounterContext.Provider>
    );
};