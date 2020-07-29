import { all, fork } from "redux-saga/effects";

import { sagaPostsWatcher } from "../redux/posts/sagas.js";
import { sagaUsersWatcher } from "../redux/users/sagas.js";
/* import { sagaProfilesWatcher } from "../redux/profiles/sagas.js"; */

const rootSaga = function* root() {
    yield all([
        fork(sagaPostsWatcher),
        fork(sagaUsersWatcher),
        /*         fork(sagaProfilesWatcher), */
    ]);
};

export default rootSaga;
