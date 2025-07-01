import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../redux/store"
import { useEffect } from "react"
import { fetchUserApi, setSelectedPage } from "../redux/slices/userApiSlice"
import { currentUser, type User } from "../models/User"
import { fetchFollowingApi } from "../redux/slices/followingApiSlice"
import { fetchFollowersApi } from "../redux/slices/followersApiSlice"
import { GoPeople } from "react-icons/go"

const UserCard = () => {

    const dispatch = useDispatch<AppDispatch>()
    const visitedUser = useSelector((state: RootState) => state.user.visitedUser)
    const {user, selectedPage } = useSelector((state: RootState) => state.user)
    const following = useSelector((state: RootState) => state.following.followings)
    const follower = useSelector((state: RootState) => state.follower.followers)
    const selectedUser = currentUser.login
    console.log(selectedPage)


    useEffect(() => {
        if (visitedUser != "") {
            selectedUser == visitedUser
        }
        dispatch(fetchUserApi(selectedUser))
        dispatch(fetchFollowingApi(selectedUser))
        dispatch(fetchFollowersApi(selectedUser))
    }, [dispatch, visitedUser])


    return (
        <div className="flex flex-col gap-2 h-auto w-[]">
            <div>
                <div>
                    <img className="rounded-[50%] h-[300px]" src={user.avatar_url} alt="profile_foto" />
                </div>
                <div>
                    <p className="text-[26px] font-semibold">{user.name}</p>
                    <p className="text-[22px] font-light">{user.login}</p>
                </div>
            </div>
            <div className="flex flex-row ">
                <p className="mr-3"><GoPeople /></p>
                <p onClick={()=> dispatch(setSelectedPage("follower"))} className="flex flex-row gap-5 items-center text-[14px] font-light hover:text-blue-700">{follower.length} followers - </p>
                <p onClick={()=> dispatch(setSelectedPage("following"))} className="flex flex-row gap-5 items-center text-[14px] font-light hover:text-blue-700">{following.length} folowings</p>
            </div>
        </div>
    )
}

export default UserCard
