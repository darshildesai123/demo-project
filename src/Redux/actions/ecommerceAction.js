import { ADD_TO_CART, DELETE_CART, GET_CARTS, GET_PRODUCT ,UPDATE_QUANTITY} from "./common";

export function getProductAction() {
    return{
        type: GET_PRODUCT,
    }
}

export function addToCartAction(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export function getCartAction() {
    return {
        type: GET_CARTS,
    }
}

export function updateQuantityAction(id, quantity) {
    return {
        type: UPDATE_QUANTITY,
        payload: {
            id,
            quantity
        }
    }
}

export function deleteCartAction(payload) {
    return {
        type: DELETE_CART,
        payload,
    }
}