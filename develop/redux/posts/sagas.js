import { takeEvery, put, call } from "redux-saga/effects";
import { POSTS_REQUEST, loadPosts } from "./actions";

import * as axios from "axios";

export function* sagaPostsWatcher() {
    yield takeEvery(POSTS_REQUEST, sagaWorker);
}

export function* sagaWorker() {
    let payload = yield call(fetchPosts);
    yield put(loadPosts(payload));
}

async function fetchPosts() {
    const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
}
