import { selector } from "recoil";
import { counterState } from "./counterState";

export const numberOfClicksSelector = selector({
    key : 'numberOfClicksSelector',
    get : ({get}) => {
        const counterStateValue = get(counterState);
        const totalClicks = counterStateValue.reduce((sum , click) => {
            return sum + click.amount;
        },0);
        return totalClicks;
    }
});