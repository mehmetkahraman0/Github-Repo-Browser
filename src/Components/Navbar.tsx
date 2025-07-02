import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { GoX, GoPerson, GoRepo, GoStar, GoPersonFill } from "react-icons/go";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserApi, setSelectedPage, setVisitedUser } from "../redux/slices/userApiSlice";
import { currentUser } from "../models/User";
import type { AppDispatch, RootState } from '../redux/store';

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isMenü, setIsMenü] = useState(false)
    const { user } = useSelector((state: RootState) => state.user);


    useEffect(() => {
        dispatch(fetchUserApi(currentUser.login));
    }, [dispatch]);
    console.log(user)

    const handleSelect = (item: string) => {
        dispatch(setSelectedPage(item))
        dispatch(setVisitedUser("mehmetkahraman0"))
        setIsMenü(false)
    }


    return (
        <div className="relative h-[60px] mx-3 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-5">
                <Link to="/"> <FaGithub onClick={() => dispatch(setVisitedUser(""))} className="text-[26px]" /> </Link>
                <Link to={`/${user.login}`}><p className="font-semibold cursor-pointer px-2 py-1 rounded-xl hover:bg-gray-200">{user.login}</p></Link>
            </div>
            <div>
                <img onClick={() => setIsMenü(!isMenü)} className="h-[40px] rounded-[50%]" src={currentUser.avatar_url} alt="profile_foto" />
            </div>
            <div className={isMenü ? `fixed p-2 top-0 right-0 w-[300px] h-[100vh] bg-gray-50 transition ` : `hidden`}>
                <div className="flex flex-row justify-between items-center mb-5">
                    <div className="flex flex-row gap-2 items-center">
                        <img className="h-[40px] rounded-[50%]" src={currentUser.avatar_url} alt="" />
                        <div>
                            <p className="text-[14px] font-bold">{currentUser.login}</p>
                            <p className="text-[14px]">{currentUser.name}</p>
                        </div>
                    </div>
                    <button onClick={() => setIsMenü(!isMenü)}><GoX /></button>
                </div>
                <ul className="text-[14px] flex flex-col gap-1">
                    <Link to="/mehmetkahraman0"> <li onClick={() => handleSelect("overview")} className="py-1 px-1 flex flex-row gap-1 items-center hover:bg-gray-200 hover:rounded-xl"><GoPerson /> Your profile</li></Link>
                    <Link to="/mehmetkahraman0/repository"><li onClick={() => handleSelect("repo")} className="py-1 px-1 flex flex-row gap-1 items-center hover:bg-gray-200 hover:rounded-xl"><GoRepo /> Your repositories</li></Link>
                    <Link to="/mehmetkahraman0/star"> <li onClick={() => handleSelect("star")} className="py-1 px-1 flex flex-row gap-1 items-center hover:bg-gray-200 hover:rounded-xl"><GoStar /> Your starts</li></Link>
                    <a href={user.html_url} target="_blank"><li className="py-1 px-1 flex flex-row gap-1 items-center hover:bg-gray-200 hover:rounded-xl"><GoPersonFill /> Your Real Profile</li></a>
                </ul>
            </div>
        </div >
    )
}

export default Navbar
