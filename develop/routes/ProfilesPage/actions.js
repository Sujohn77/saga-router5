export const PROFILES_LOADED = "PROFILES_LOADED";
export const PROFILES_REQUEST = "PROFILES_REQUEST";

export const loadProfiles = (profiles) => {
    return {
        type: PROFILES_LOADED,
        profiles,
    };
};

export const fetchProfiles = () => {
    return {
        type: PROFILES_REQUEST,
    };
};
