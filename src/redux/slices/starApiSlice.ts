import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Repo } from "../../models/Repo";

interface RepoState {
    stars: Repo[];
    loading: boolean;
    error: string | null;
}

const initialState: RepoState = {
    stars: [],
    loading: false,
    error: null,

}

export const fetchStarApi = createAsyncThunk<Repo[], string>("fetch/repos", async (loginUser) => {
    const res = await axios.get(`https://api.github.com/users/${loginUser}/starred`, {
        headers: {
            Authorization: "Bearer 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"
        }
    })
    return res.data
})

const starApiSlice = createSlice({
    name: "repo",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchStarApi.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(fetchStarApi.fulfilled, (state, action) => {
                state.stars = action.payload
                console.log(state.stars)
                state.loading = false
            })
            .addCase(fetchStarApi.rejected, (state, action) => {
                state.error = action.error.message || "User Api Fetch Error"
                state.loading = true
            })
    }
})

export default starApiSlice.reducer