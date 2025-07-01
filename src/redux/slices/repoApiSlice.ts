import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Repo } from "../../models/Repo";

interface RepoState {
    repos: Repo[];
    loading: boolean;
    error: string | null;
}

const initialState: RepoState = {
    repos: [],
    loading: false,
    error: null,

}

export const fetchRepoApi = createAsyncThunk<Repo[], string>("fetch/repos", async (loginUser) => {
    const res = await axios.get(`https://api.github.com/users/${loginUser}/repos`, {
        headers: {
            Authorization: "Bearer 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"
        }
    })
    return res.data
})

const repoApiSlice = createSlice({
    name: "repo",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchRepoApi.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(fetchRepoApi.fulfilled, (state, action) => {
                state.repos = action.payload
                console.log(state.repos)
                state.loading = false
            })
            .addCase(fetchRepoApi.rejected, (state, action) => {
                state.error = action.error.message || "User Api Fetch Error"
                state.loading = true
            })
    }
})

export default repoApiSlice.reducer