import { ADD_BUTTON_CLICKED } from "./types"

export const addButtonClicked = amount => ({
        type : ADD_BUTTON_CLICKED,
        payload : { amount }
});
