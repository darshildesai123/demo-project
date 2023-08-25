import { createSlice } from "@reduxjs/toolkit";

const demoReducer = createSlice({
    name: "Demo",
    initialState: {
        // count: 1,
        price: 50,
        quantity: 1
    },
    reducers: {
        increment:(state, actions) => {
            return{...state, quantity: actions.payload}
        },
        decrement:(state, actions) => {
            return{...state, quantity: actions.payload}
        }
    }, 
});

export const { decrement, increment } = demoReducer.actions;

export default demoReducer.reducer;