import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { FollowersFollowing } from "../../models/FollowersFollowing";
import axios from "axios";

interface FollowersState {
    followers: FollowersFollowing[]
    loading: boolean,
    error: string | null
}

const initialState: FollowersState = {
    followers: [],
    loading: false,
    error: null
}


export const fetchFollowersApi = createAsyncThunk<FollowersFollowing[], string>("fetch/followers", async (loginUser) => {
    const res = await axios(`https://api.github.com/users/${loginUser}/followers`)
    return res.data
})


const followersApiSlice = createSlice({
    name: "followers",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFollowersApi.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFollowersApi.fulfilled, (state, action) => {
                state.loading = false
                state.followers = action.payload
            })
            .addCase(fetchFollowersApi.rejected, (state, action) => {
                state.loading = true
                state.error = action.error.message || "Followers Api Fetch Error"
            })
    }
})

export default followersApiSlice.reducer