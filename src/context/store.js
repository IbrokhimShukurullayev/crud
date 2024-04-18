import { configureStore } from '@reduxjs/toolkit'
import usersSlice, { addToUsers } from './usersSlice'
import themeSlice from './themeSlice'
import id from './id'


export const  store = configureStore({
    reducer: {
        users : usersSlice,
        theme: themeSlice,
        id
    }, 
})