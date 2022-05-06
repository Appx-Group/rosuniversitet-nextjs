import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lang: 'ru',
    activeShow: false,
}

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        changeRu: (state) => {
            state.lang = 'ru'
        },
        changeEng: (state) => {
            state.lang = 'eng'
        },
        changeLang: (state, action) => {
            state.lang = action.payload
        },
        changeActiveShow: (state, action) => {
            state.activeShow = action.payload
        },
    },
})

export const { changeEng, changeRu, changeLang, changeActiveShow } =
    langSlice.actions

export const selectLangSlice = (state) => state.langSlice

export default langSlice.reducer
