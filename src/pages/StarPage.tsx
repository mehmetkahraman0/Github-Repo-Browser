import UserCard from "../Components/UserCard"
import StartComponent from '../Components/StartComponent';
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchStarApi } from "../redux/slices/starApiSlice";
import { currentUser } from "../models/User";
import { useParams } from "react-router-dom";


const StarPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const stars = useSelector((state: RootState) => state.star.stars)
    const { user } = useParams()
    const selectedUser = user || currentUser.login

    useEffect(() => {
        dispatch(fetchStarApi(selectedUser))
    }, [dispatch, user])
    return (
        <div className='flex flex-col md:flex-row justify-center gap-7 mt-10'>
            <UserCard />
            <div className='flex flex-col items-center md:w-[900px]'>
                {stars.map((item, index) => (
                    <StartComponent repo={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default StarPage
