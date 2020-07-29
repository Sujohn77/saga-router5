import { PROFILES_LOADED } from "./actions";

export const profilesPage = (state = {}, action) => {
    switch (action.type) {
        case PROFILES_LOADED:
            return {
                ...state,
                profiles: action.profiles,
            };
        default:
            return state;
    }
};
