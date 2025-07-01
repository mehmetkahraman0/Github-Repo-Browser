import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { FollowersFollowing } from "../../models/FollowersFollowing";
import axios from "axios";
import type { User } from "../../models/User";

interface FollowersState {
    followers: User[]
    loading: boolean,
    error: string | null
}

const initialState: FollowersState = {
    followers: [],
    loading: false,
    error: null
}


export const fetchFollowersApi = createAsyncThunk<User[], string>("fetch/followers", async (loginUser) => {
    const res = await axios(`https://api.github.com/users/${loginUser}/followers`, {
        headers: {
            Authorization: "Bearer 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"
        }
    })
    const followersUserDetails = await Promise.all(
        res.data.map((follower: FollowersFollowing) =>
            axios.get(follower.url, {
                headers: {
                    Authorization: "Bearer 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"
                }
            }).then(res => res.data)
        )
    )
    return followersUserDetails

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