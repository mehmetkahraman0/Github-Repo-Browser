import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Event } from "../../models/Event";

interface EventState {
    events: Event[];
    loading: boolean;
    error: string | null;
}

const initialState: EventState = {
    events: [],
    loading: false,
    error: null,
}

export const fetchEventApi = createAsyncThunk<Event[], string>("fetch/event", async (loginUser) => {
    const res = await axios(`https://api.github.com/users/${loginUser}/events`)
    return res.data
})

const userApiSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchEventApi.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(fetchEventApi.fulfilled, (state, action) => {
                state.events = action.payload
                console.log(state.events)
                state.loading = false
            })
            .addCase(fetchEventApi.rejected, (state, action) => {
                state.error = action.error.message || "User Api Fetch Error"
                state.loading = true
            })
    }
})

export default userApiSlice.reducer