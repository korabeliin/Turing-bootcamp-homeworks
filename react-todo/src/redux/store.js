import { configureStore } from "@reduxjs/toolkit";
import imagesGallerySlice from "./slice/imagesGallerySlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, imagesGallerySlice)

// export default configureStore({
//   reducer: {
//     imagesGallery: imagesGallerySlice,
//   }
// })

export const store = configureStore({
  reducer: {
    imagesGallery: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)