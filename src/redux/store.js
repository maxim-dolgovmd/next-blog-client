import { configureStore } from '@reduxjs/toolkit'
import posts from './slices/postSlice'
import { postsApi } from '../api/postsApi'

export const store = configureStore({
    reducer: {
        posts,
        [postsApi.reducerPath]: postsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postsApi.middleware]),
})