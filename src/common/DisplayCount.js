import { useRecoilValue } from "recoil";
import { numberOfClicksSelector } from "../recoil/numberOfClicksSelector";

export const DisplayCount = () => {
    const numberOfClicks = useRecoilValue(numberOfClicksSelector);
    return (
        <p>Total clicks { numberOfClicks }</p>
    );
};