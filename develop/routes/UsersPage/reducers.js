import { USERS_LOADED } from "./actions";

export const usersPage = (state = {}, action) => {
    switch (action.type) {
        case USERS_LOADED:
            return {
                ...state,
                users: action.users,
            };
        default:
            return state;
    }
};
