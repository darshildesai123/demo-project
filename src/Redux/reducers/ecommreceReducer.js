import { createSlice } from "@reduxjs/toolkit";

const eCommreceReducer = createSlice({
  name: "Product",
  initialState: {
    products: [],
    cart: [],
  },
  reducers: {
    setProduct: (state, actions) => {
      return { ...state, products: actions.payload };
    },
    addtoCart: (state, actions) => {
      const findData =
        state.cart.find((ele) => ele.productId === actions.payload.productId) ??
        null;
      if (findData) {
        const updateData = state.cart.map((ele) => {
          if (ele.productId === actions.payload.productId) {
            return { ...ele, quantity: ele.quantity + 1 };
          } else {
            return ele;
          }
        });
        return { ...state, cart: updateData };
      } else {
        return { ...state, cart: [...state.cart, actions.payload] };
      }
    },
    setCarts: (state, actions) => {
      const updateData = actions.payload.filter(
        (cartEle, idx) =>
        idx !== actions.payload.findIndex((ele) => cartEle.productId  === ele.productId)
      );
      console.log('updateData :>> ', updateData);
      return { ...state, cart: actions.payload };
    },
    updateQuantity: (state, actions) => {
      const updateData = state.cart.map((cart) => {
        if (actions.payload?.id === cart.id) {
          return { ...cart, quantity: actions.payload?.quantity };
        } else {
          return cart;
        }
      });
      return { ...state, cart: updateData };
    },
    deleteCart: (state, actions) => {
      const updateData = state.cart.filter((ele) => ele.id !== actions.payload);
      return { ...state, cart: updateData };
    },
  },
});

export const { setProduct, addtoCart, setCarts, deleteCart, updateQuantity } =
  eCommreceReducer.actions;
export default eCommreceReducer.reducer;
