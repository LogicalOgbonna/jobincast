import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        loginLoading: false,
        registerLoading: false,
        resetPasswordLoading: false,
        verifyEmailLoading: false,
        user: null
    },
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            [action.payload.type]: action.payload.value
        }),
        setusers: (state, action) => ({
            ...state,
            user: action.payload
        })
    }
})

export const { setLoading, setusers } = authSlice.actions;

export default authSlice.reducer;