import { createSlice } from "@reduxjs/toolkit";
import {act} from "@testing-library/react";

const booksSlice = createSlice( {
  name: 'books',
  initialState: [
    {
      id: 1,
      name: "Сборник рассказов В. Зайцева",
      author: "К. Степанян",
      year: 2004,
      quantity: 30,
      rate: 4.1
    }
  ],
  reducers: {
    ADD_BOOK: (state, action) => {
      return [
        ...state,
        {
          id: state.length > 0 
          ? state[state.length - 1].id + 1 : 0,
          ...action.payload
        }
      ]
    },

    REMOVE_BOOK: (state, action) => {
      const bookIndex = state.findIndex(item => item.id === action.payload.id)
      if (bookIndex === -1) return state;
      return [...state.slice(0, bookIndex), ...state.slice(bookIndex + 1)];
    }
  }
}); 

export const {
  ADD_BOOK, REMOVE_BOOK
} = booksSlice.actions;

export default booksSlice.reducer;