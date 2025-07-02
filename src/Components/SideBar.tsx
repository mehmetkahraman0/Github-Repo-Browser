import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store"
import { GoBook, GoRepo, GoStar } from "react-icons/go"
import { setSelectedPage } from "../redux/slices/userApiSlice"
import { Link } from 'react-router-dom';

const SideBar = () => {
    const dispatch = useDispatch<AppDispatch>()
    const visitedUser = useSelector((state: RootState) => state.user.visitedUser)
    const selectedPage = useSelector((state: RootState) => state.user.selectedPage)

    return (
        <ul className="flex flex-row gap-6 text-[16px] ml-2">
            <Link to={`/${visitedUser}`}> <li onClick={() => dispatch(setSelectedPage("overview"))} className={selectedPage == "overview" ? "flex flex-row gap-1 items-center tracking-[1px] border-b-[4px] p-1 border-red-500 font-semibold text-[14px]" : "flex flex-row gap-1 items-center tracking-[1px] p-1 text-[14px]"}><GoBook /> Overview</li></Link>
            <Link to={`/${visitedUser}/repository`} ><li onClick={() => dispatch(setSelectedPage("repo"))} className={selectedPage == "repo" ? "flex flex-row gap-1 items-center tracking-[1px] border-b-[4px] p-1 border-red-500 font-semibold text-[14px]" : "flex flex-row gap-1 items-center tracking-[1px] p-1 text-[14px]"}><GoRepo /> Repositories</li></Link>
            <Link to={`/${visitedUser}/star`} > <li onClick={() => dispatch(setSelectedPage("star"))} className={selectedPage == "star" ? "flex flex-row gap-1 items-center tracking-[1px] border-b-[4px] p-1 border-red-500 font-semibold text-[14px]" : "flex flex-row gap-1 items-center tracking-[1px] p-1 text-[14px]"} > <GoStar /> Starts</li></Link>
        </ul >
    )
}

export default SideBar