import { takeEvery, put, call } from "redux-saga/effects";
import { PROFILES_REQUEST, loadProfiles } from "./actions";
import has from "has";
import * as axios from "axios";

export function* sagaProfilesWatcher() {
    yield takeEvery(PROFILES_REQUEST, sagaWorker);
}

export function* sagaWorker() {
    const htmlStore = JSON.parse(
        document.getElementById("application-state").textContent
    );

    let bootstrap = {
        loadProfiles: "loadProfiles",
    };

    for (let bootKey in bootstrap) {
        if (has(htmlStore, bootKey)) {
            yield put(loadProfiles(htmlStore[bootstrap.loadProfiles]));
        }
    }
}
