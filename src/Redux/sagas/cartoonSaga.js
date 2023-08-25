import { call, put } from "redux-saga/effects";
import { get } from "./client";
import { getCharacters, setQuery } from "../reducers/cartoonReducer";

export function* getCharactersSaga() {
    try {
        const data = yield call(get);
        yield put(getCharacters(data.results))
        yield put(setQuery(data.info))
        console.log('data :>> ', data);
    } catch (error) {
        console.log('error :>> ', error);
    }
}