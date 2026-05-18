import { createSlice } from '@reduxjs/toolkit'



export const chooseSlice = createSlice({
    name: "choose",
    initialState: {
        mood: null,
        genre: null,
        userPrompt: null,
        format: null,
        isBookmarked: false,
    },
    reducers: {
        setMood: (state, action) => {
            state.mood = action.payload
        },
        setGenre: (state, action) => {
            state.genre = action.payload
        },
        setFormat: (state, action) => {
            state.format = action.payload
        },
        setIsBookmarked: (state, action) => {
            state.isBookmarked = action.payload
        },
        setUserPrompt: (state, action) => {
            state.userPrompt = action.payload
        }
    }
})


export const { setMood, setFormat, setGenre, setIsBookmarked, setUserPrompt } = chooseSlice.actions

export default chooseSlice.reducer