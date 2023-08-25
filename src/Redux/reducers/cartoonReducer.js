import { createSlice } from "@reduxjs/toolkit";

const cartoonReducer = createSlice({
  name: "cartoon",
  initialState: {
    characters: [],
    query : {}
  },
  reducers: {
    getCharacters: (state, actions) => {
      return { ...state, characters: actions.payload };
    },
    setQuery: (state, actions) => {
      return { ...state, query: actions.payload }
    }
  },
});

export const { getCharacters, setQuery } = cartoonReducer.actions;
export default cartoonReducer.reducer;