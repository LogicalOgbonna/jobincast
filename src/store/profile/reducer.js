import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        generalInfoLoading: false,
        contactInfoLoading: false,
        resumeInfoLoading: false,
        previewSubmitLoading: false,
        profile: null
    },
    reducers: {
        setLoading: (state, action) => ({
            ...state,
            [action.payload.type]: action.payload.value
        }),
        setProfile: (state, action) => ({
            ...state,
            profile: action.payload
        })
    }
})

export const { setLoading, setProfile } = profileSlice.actions;
export default profileSlice.reducer;