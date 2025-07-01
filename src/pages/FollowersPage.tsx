import { useDispatch, useSelector } from "react-redux"
import UserCard from "../Components/UserCard"
import {type AppDispatch, type RootState } from "../redux/store"
import FollowingFollowersComponents from "../models/FollowingFollowersComponents"
import { useEffect } from "react"
import { fetchFollowersApi } from "../redux/slices/followersApiSlice"
import { currentUser } from "../models/User"

const FollowersPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const followers = useSelector((state: RootState) => state.follower.followers)
    console.log(followers)
    useEffect(() => {
        dispatch(fetchFollowersApi(currentUser.login))
    }, [dispatch])

    return (
        <div className='flex flex-col md:flex-row justify-center gap-7 mt-10 mx-5'>
            <UserCard />
            <div className='flex flex-col gap-5 items-center md:w-[900px]'>
                {followers.map((item, index) => (
                    <FollowingFollowersComponents user={item} key={index} />
                ))}

            </div>
        </div>
    )
}

export default FollowersPage
