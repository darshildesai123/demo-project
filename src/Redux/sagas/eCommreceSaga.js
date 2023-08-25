import {
  addtoCart,
  deleteCart,
  setCarts,
  setProduct,
  updateQuantity,
} from "../reducers/ecommreceReducer";
import { del, get, post, patch } from "./client";
import { call, put } from "redux-saga/effects";

export function* getProductSaga() {
  try {
    const productData = yield call(() => get("/product"));
    yield put(setProduct(productData));
  } catch (error) {
    console.log("error", error);
  }
}

export function* addtoCartSaga({ payload }) {
  try {
    delete payload.id;
    const cartData = yield call(() => post("/cart", payload));
    yield put(addtoCart(cartData));
  } catch (err) {
    console.log("err :>> ", err);
  }
}

export function* getCartsSaga() {
  try {
    const cartData = yield call(() => get("/cart"));
    yield put(setCarts(cartData));
  } catch (err) {
    console.log("err :>> ", err);
  }
}

export function* deleteCartSaga({ payload }) {
  try {
    yield call(() => del(`/cart/${payload}`));
    yield put(deleteCart(payload));
  } catch (err) {
    console.log("err :>> ", err);
  }
}

export function* updateQuantitySaga({ payload: { id, quantity } }) {
  try {
    const result = yield call(() => patch(`/cart/${id}`, { quantity }));
    yield put(updateQuantity(result));
  } catch (err) {
    console.log("err :>> ", err);
  }
}
