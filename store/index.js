import { configureStore } from '@reduxjs/toolkit'
import langSlice from './features/lang'

export const store = configureStore({
    reducer: {
        langSlice,
    },
})
