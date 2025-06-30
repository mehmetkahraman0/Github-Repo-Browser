import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../models/User";
import axios from "axios";

interface UserState {
    user: User;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: {},
    loading: false,
    error: null,

}

export const fetchUserApi = createAsyncThunk<User, string>("fetch/user", async (loginUser) => {
    const res = await axios(`https://api.github.com/users/${loginUser}`)
    return res.data
})

const userApiSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUserApi.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(fetchUserApi.fulfilled, (state, action) => {
                state.user = action.payload
                console.log(state.user)
                state.loading = false
            })
            .addCase(fetchUserApi.rejected, (state, action) => {
                state.error = action.error.message || "User Api Fetch Error"
                state.loading = true
            })
    }
})

export default userApiSlice.reducer