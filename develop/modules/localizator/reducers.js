/**
 * Created by kyckyc on 12.10.18.
 */
import { platforms } from "constants";
import { combineReducers } from "redux";

export const language = (state = "en", action) => {
    switch (action.type) {
        case "LANGUAGE_UPDATE":
            return action.language;
        default:
            return state;
    }
};
