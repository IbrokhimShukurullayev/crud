import { createSlice } from '@reduxjs/toolkit'

export const getIdSlice = createSlice({
    name: "getId",
    initialState: {
        value: 0,
    },
    reducers: {
        getId: (state, actions) => {
            state.value = actions.payload;
        }
    }
})

export const { getId } = getIdSlice.actions

export default getIdSlice.reducer