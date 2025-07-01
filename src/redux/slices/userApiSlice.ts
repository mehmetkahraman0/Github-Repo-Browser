import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { currentUser, type User } from "../../models/User";
import axios from "axios";

interface UserState {
    user: User;
    loading: boolean;
    error: string | null;
    visitedUser: string,
    selectedPage: string
}

const initialState: UserState = {
    user: {} as User,
    loading: false,
    error: null,
    visitedUser: currentUser.login,
    selectedPage: "overview"
}

export const fetchUserApi = createAsyncThunk<User, string>("fetch/user", async (loginUser) => {
    const res = await axios.get<User>(`https://api.github.com/users/${loginUser}`)

    console.log(res.data)
    return res.data
})

const userApiSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setVisitedUser: (state, action) => {
            state.visitedUser = action.payload
        },
        setSelectedPage: (state, action) => {
            state.selectedPage = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUserApi.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(fetchUserApi.fulfilled, (state, action) => {
                state.user = action.payload
                state.loading = false
            })
            .addCase(fetchUserApi.rejected, (state, action) => {
                state.error = action.error.message || "User Api Fetch Error"
                state.loading = true
            })
    }
})

export const { setVisitedUser, setSelectedPage } = userApiSlice.actions
export default userApiSlice.reducer