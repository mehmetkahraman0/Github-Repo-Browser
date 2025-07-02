import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Repo } from "../../models/Repo";

interface SubscriptionState {
    subscription: Repo[];
    loading: boolean;
    error: string | null;
}

const initialState: SubscriptionState = {
    subscription: [],
    loading: false,
    error: null,

}

export const fetchSubscription = createAsyncThunk<Repo[], string | undefined>("fetch/subscription", async (loginUser) => {
    const res = await axios.get(`https://api.github.com/users/${loginUser}/subscriptions`)
    return res.data
})

const subscriptionApiSlice = createSlice({
    name: "subscription",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchSubscription.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(fetchSubscription.fulfilled, (state, action) => {
                state.subscription = action.payload
                console.log(state.subscription)
                state.loading = false
            })
            .addCase(fetchSubscription.rejected, (state, action) => {
                state.error = action.error.message || "User Api Fetch Error"
                state.loading = true
            })
    }
})

export default subscriptionApiSlice.reducer