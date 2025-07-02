import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Event } from "../../models/Event";

interface ReceivedEventState {
    receivedEvent: Event[];
    loading: boolean;
    error: string | null;
}

const initialState: ReceivedEventState = {
    receivedEvent: [],
    loading: false,
    error: null,
}

export const fetchReceivedEventApi = createAsyncThunk<Event[], string>("fetch/receivedEvent", async (loginUser) => {
    const res = await axios(`https://api.github.com/users/${loginUser}/received_events`)
    return res.data
})

const receivedEventApiSlice = createSlice({
    name: "receivedEvent",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchReceivedEventApi.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(fetchReceivedEventApi.fulfilled, (state, action) => {
                state.receivedEvent = action.payload
                console.log(state.receivedEvent)
                state.loading = false
            })
            .addCase(fetchReceivedEventApi.rejected, (state, action) => {
                state.error = action.error.message || "User Api Fetch Error"
                state.loading = true
            })
    }
})

export default receivedEventApiSlice.reducer