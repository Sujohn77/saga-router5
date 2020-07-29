export const USERS_LOADED = "USERS_LOADED";
export const USERS_REQUEST = "USERS_REQUEST";

export const loadUsers = (users) => {
    return {
        type: USERS_LOADED,
        users,
    };
};

export const fetchUsers = () => {
    return {
        type: USERS_REQUEST,
    };
};
