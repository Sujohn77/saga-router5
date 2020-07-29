import { POSTS_LOADED } from "./actions";

export const postsPage = (state = {}, action) => {
    switch (action.type) {
        case POSTS_LOADED:
            return {
                ...state,
                posts: action.posts,
            };
        default:
            return state;
    }
};
