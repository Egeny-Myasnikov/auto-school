import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './userNameSlice'

export const store = configureStore({
    reducer: {
        userName: userNameSlice
    },
})