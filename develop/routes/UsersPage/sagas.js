import { takeEvery, put, call } from "redux-saga/effects";
import { USERS_REQUEST, loadUsers } from "./actions";

import * as axios from "axios";

export function* sagaUsersWatcher() {
    yield takeEvery(USERS_REQUEST, sagaWorker);
}

export function* sagaWorker() {
    let payload = yield call(fetchUsers);
    yield put(loadUsers(payload));
}

const fetchUsers = async () =>
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.data);
