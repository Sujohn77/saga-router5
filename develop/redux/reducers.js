/**
 * Created by kyckyc on 13.08.16.
 */
import { combineReducers } from "redux";
/* import { postsPage } from "./posts/reducers";
import { profilesPage } from "./profiles/reducers";
import { usersPage } from "./users/reducers"; */
import { language } from "modules/localizator/reducers";
const application = {
    /*     postsPage,
    profilesPage,
    usersPage, */
    application: {
        language,
    },
};

export default application;
