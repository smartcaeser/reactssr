import { combineReducers, createStore } from "redux";
import { numberOfClicksReducers } from "./reducers";

export const store = createStore(combineReducers({
    numberOfClicks : numberOfClicksReducers
}));