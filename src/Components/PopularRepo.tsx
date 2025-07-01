import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store"
import PopularRepoComponent from "./PopularRepoComponent"
import { useEffect } from "react"
import { fetchSubscription } from "../redux/slices/subscriptionApiSlice"
import { currentUser } from "../models/User"

const PopularRepo = () => {
    const dispatch = useDispatch<AppDispatch>()
    const sub = useSelector((state: RootState) => state.subscriptions.subscription)
    const selectSub = sub.slice(0,6)
    console.log(sub)
    useEffect(() => {
        dispatch(fetchSubscription(currentUser.login))
    }, [])
    return (
        <div className='flex flex-col justify-between'>
            <header className="text-[20px] mb-2">Popular Repository</header>
            <hr />
            <div className='flex flex-row flex-wrap justify-between items-center w-full gap-10 mt-5'>
                {selectSub.map((item, index) => (
                    <PopularRepoComponent repo={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default PopularRepo
