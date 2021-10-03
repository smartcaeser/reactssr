import { useSelector } from "react-redux";
import { getNumberOfClicks } from "../redux/selectors";

export const DisplayCount = () => {
    const numberOfClicks = useSelector(getNumberOfClicks);
    return (
        <p>Total clicks { numberOfClicks }</p>
    );
};