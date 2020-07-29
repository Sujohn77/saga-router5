export const POSTS_LOADED = "POSTS_LOADED";
export const POSTS_REQUEST = "POSTS_REQUEST";

export const loadPosts = (posts) => {
    return {
        type: POSTS_LOADED,
        posts,
    };
};

export const fetchPosts = () => {
    return {
        type: POSTS_REQUEST,
    };
};
