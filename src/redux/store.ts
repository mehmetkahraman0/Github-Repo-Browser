import { configureStore } from "@reduxjs/toolkit";
import userApiSlice from './slices/userApiSlice';
import followingsApiSlice from './slices/followingApiSlice';
import followersApiSlice from "./slices/followersApiSlice"
import repoApiSlice from './slices/repoApiSlice';
import receivedEventApiSlice from './slices/receivedEventApiSlice';
import eventApiSlice from './slices/eventApiSlice';
import subscriptionApiSlice from './slices/subscriptionApiSlice';
import starApiSlice from './slices/starApiSlice';

export const store = configureStore({
    reducer: {
        user: userApiSlice,
        following: followingsApiSlice,
        follower: followersApiSlice,
        repo: repoApiSlice,
        receivedEvent: receivedEventApiSlice,
        event: eventApiSlice,
        subscriptions: subscriptionApiSlice,
        star: starApiSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch