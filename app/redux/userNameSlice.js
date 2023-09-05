import { createSlice } from "@reduxjs/toolkit"
import { profileUser } from "../helpers/api/fetch.api"

const initialState = {
    value: ''
}

export const userNameSlice = createSlice({
    name: 'userName',
    initialState,
    reducers: {
        setUserName: async (state) => {
            state.value = await profileUser()
        }
    }
})

export const { setUserName } = userNameSlice.actions

export default userNameSlice.reducer