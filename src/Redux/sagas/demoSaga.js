import { put } from "redux-saga/effects";
import { decrement, increment } from "../reducers/demoReducer";

export function* incrementSaga({ payload}) {
    try {
        yield put (increment(payload))
    } catch (error) {
        console.log('error ', error);
    }
}

export function* decrementSaga({ payload}) {
    try {
        yield put (decrement(payload))
    } catch (error) {
        console.log('error ', error);
    }
}