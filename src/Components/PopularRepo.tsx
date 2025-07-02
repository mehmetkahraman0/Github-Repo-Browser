import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store"
import PopularRepoComponent from "./PopularRepoComponent"
import { useEffect } from "react"
import { fetchSubscription } from "../redux/slices/subscriptionApiSlice"
import { currentUser } from "../models/User"
import { useParams } from "react-router-dom"

const PopularRepo = () => {
    const dispatch = useDispatch<AppDispatch>()
    const sub = useSelector((state: RootState) => state.subscriptions.subscription)
    const selectSub = sub.slice(0, 6)
    const { user } = useParams()
    const selectedUser = user || currentUser.login
    console.log(user)
    console.log(selectedUser)

    useEffect(() => {
        dispatch(fetchSubscription(selectedUser))
    }, [dispatch, user])
    return (
        <div className="flex flex-col w-full">
            <header className="text-lg font-semibold mb-2">Popular Repository</header>
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-5">
                {selectSub.map((item, index) => (
                    <PopularRepoComponent repo={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default PopularRepo
