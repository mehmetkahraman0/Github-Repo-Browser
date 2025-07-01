import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { GoX, GoPerson, GoRepo, GoStar, GoPersonFill } from "react-icons/go";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserApi, setSelectedPage, setVisitedUser } from "../redux/slices/userApiSlice";
import { currentUser } from "../models/User";
import type { AppDispatch, RootState } from '../redux/store';
import { fetchRepoApi } from "../redux/slices/repoApiSlice";

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [isMenü, setIsMenü] = useState(false)

    const { user } = useSelector((state: RootState) => state.user);


    useEffect(() => {
        console.log("Login gönderiliyor:", currentUser.login);
        dispatch(fetchUserApi(currentUser.login));
    }, [dispatch]);
    console.log(user)

    const handleSelect = (item: string) => {
        dispatch(setSelectedPage(item))
        dispatch(setVisitedUser(item))
        dispatch(fetchRepoApi(currentUser.login))
        dispatch(setSelectedPage(""))

    }


    return (
        <div className="relative h-[60px] mx-3 flex flex-row justify-between items-center">
            <div className="flex flex-row gap-5">
                <Link to="/"> <FaGithub onClick={() => dispatch(setVisitedUser(""))} className="text-[26px]" /> </Link>
                <p className="font-semibold">{user.login}</p>
            </div>
            <div>
                <img onClick={() => setIsMenü(!isMenü)} className="h-[40px] rounded-[50%]" src={user.avatar_url} alt="profile_foto" />
            </div>
            <div className={isMenü ? `fixed p-2 top-0 right-0 w-[300px] h-[100vh] bg-amber-100 transition` : `hidden`}>
                <div className="flex flex-row justify-between items-center mb-5">
                    <div className="flex flex-row gap-2 items-center">
                        <img className="h-[40px] rounded-[50%]" src={user.avatar_url} alt="" />
                        <div>
                            <p className="text-[14px] font-bold">{user.login}</p>
                            <p className="text-[14px]">{user.name}</p>
                        </div>
                    </div>
                    <button onClick={() => setIsMenü(!isMenü)}><GoX /></button>
                </div>
                <ul className="text-[14px] flex flex-col gap-1">
                    <li onClick={() => handleSelect("overview")} className="py-1 px-1 flex flex-row gap-1 items-center hover:bg-gray-200 hover:rounded-xl"><GoPerson /> Your profile</li>
                    <li onClick={() => handleSelect("repo")} className="py-1 px-1 flex flex-row gap-1 items-center hover:bg-gray-200 hover:rounded-xl"><GoRepo /> Your repositories</li>
                    <li onClick={() => handleSelect("star")} className="py-1 px-1 flex flex-row gap-1 items-center hover:bg-gray-200 hover:rounded-xl"><GoStar /> Your starts</li>
                    <a href={user.html_url} target="_blank"><li className="py-1 px-1 flex flex-row gap-1 items-center hover:bg-gray-200 hover:rounded-xl"><GoPersonFill /> Your Real Profile</li></a>
                </ul>
            </div>
        </div >
    )
}

export default Navbar
