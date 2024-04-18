import {createSlice} from '@reduxjs/toolkit'

export const themeSlice = createSlice({
      name: "theme",
      initialState: {
        value:  JSON.parse(localStorage.getItem("users"))  || false
      },
      reducers: {
        toggleMode(state) {
            state.value = !state.value
            localStorage.setItem("theme", JSON.stringify(state.value))
        }
      }
})

export const { toggleMode} = themeSlice.actions
export default themeSlice.reducer