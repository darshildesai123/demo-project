import { takeEvery } from "redux-saga/effects";
import { decrementSaga, incrementSaga } from "./demoSaga";
import { ADD_TO_CART, DELETE_CART, GET_ALL_CHARACTER, GET_CARTS, GET_PRODUCT, UPDATE_QUANTITY } from "../actions/common";
import { getCharactersSaga } from "./cartoonSaga";
import { addtoCartSaga, deleteCartSaga, getCartsSaga, getProductSaga, updateQuantitySaga } from "./eCommreceSaga";

export function* rootSaga() {
    yield takeEvery("INCREMENT", incrementSaga);
    yield takeEvery("DECREMENT", decrementSaga);
    yield takeEvery(GET_ALL_CHARACTER, getCharactersSaga);
    yield takeEvery(GET_PRODUCT, getProductSaga);
    yield takeEvery(ADD_TO_CART, addtoCartSaga);
    yield takeEvery(GET_CARTS, getCartsSaga);
    yield takeEvery(DELETE_CART, deleteCartSaga);
    yield takeEvery(UPDATE_QUANTITY, updateQuantitySaga);
}