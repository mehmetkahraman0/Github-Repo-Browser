import { useDispatch, useSelector } from "react-redux"
import UserCard from "../Components/UserCard"
import {type AppDispatch, type RootState } from "../redux/store"
import FollowingFollowersComponents from "../Components/FollowingFollowersComponents"
import { useEffect } from "react"
import { fetchFollowersApi } from "../redux/slices/followersApiSlice"
import { currentUser } from "../models/User"

const FollowingPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const followings = useSelector((state: RootState) => state.following.followings)
    console.log(followings)
    useEffect(() => {
        dispatch(fetchFollowersApi(currentUser.login))
    }, [dispatch])

    return (
        <div className='flex flex-col md:flex-row justify-center gap-7 mt-10 mx-5'>
            <UserCard />
            <div className='flex flex-col gap-5 items-center md:w-[900px]'>
                {followings.map((item, index) => (
                    <FollowingFollowersComponents user={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default FollowingPage