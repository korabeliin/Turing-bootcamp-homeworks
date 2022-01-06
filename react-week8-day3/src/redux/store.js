import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './slices/booksSlice';
import readersReducer from './slices/readersSlice'

export default configureStore({
    reducer: {
        books: booksReducer,
        readers: readersReducer
    }
})