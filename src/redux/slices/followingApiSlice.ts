import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { FollowersFollowing } from "../../models/FollowersFollowing";
import axios from "axios";
import type { User } from "../../models/User";

interface FollowersState {
    followings: User[]
    loading: boolean,
    error: string | null
}

const initialState: FollowersState = {
    followings: [],
    loading: false,
    error: null
}


export const fetchFollowingApi = createAsyncThunk<User[], string>("fetch/following", async (loginUser) => {
    const res = await axios(`https://api.github.com/users/${loginUser}/following`)
    const followingsUserDetails = await Promise.all(
        res.data.map((following: FollowersFollowing) =>
            axios.get(following.url).then(res => res.data)
        )
    )
    return followingsUserDetails
})


const followingsApiSlice = createSlice({
    name: "following",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFollowingApi.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFollowingApi.fulfilled, (state, action) => {
                state.loading = false
                state.followings = action.payload
            })
            .addCase(fetchFollowingApi.rejected, (state, action) => {
                state.loading = true
                state.error = action.error.message || "Following Api Fetch Error"
            })
    }
})

export default followingsApiSlice.reducer