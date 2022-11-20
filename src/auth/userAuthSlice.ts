import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: null }

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { setToken } = userAuthSlice.actions
export default userAuthSlice.reducer
