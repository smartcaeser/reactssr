import { ADD_BUTTON_CLICKED } from "./types";

export const numberOfClicksReducers = (state = 0 , actions) => {
    const {type} = actions;
    switch(type){
        case ADD_BUTTON_CLICKED:
            return state + actions.payload.amount;        
        default:
            return state;
    }
};