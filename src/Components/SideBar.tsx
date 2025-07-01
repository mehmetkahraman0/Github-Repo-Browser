import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store"
import { GoBook, GoRepo, GoStar } from "react-icons/go"
import { setSelectedPage } from "../redux/slices/userApiSlice"

const SideBar = () => {
    const visitedUser = useSelector((state: RootState) => state.user.visitedUser)
    const dispatch = useDispatch<AppDispatch>()
    const selectedPage = useSelector((state : RootState) => state.user.selectedPage)

    return (
        <ul className="flex flex-row gap-14 text-[16px] ml-2">
            <li onClick={() => dispatch(setSelectedPage("overview"))} className={selectedPage == "overview" ? "flex flex-row gap-1 items-center tracking-[1px] border-b-[4px] p-1 border-red-500 font-semibold text-[14px]" : "flex flex-row gap-1 items-center tracking-[1px] p-1 text-[14px]"}><GoBook /> Overview</li>
            <li onClick={() => dispatch(setSelectedPage("repo"))} className={selectedPage == "repo" ? "flex flex-row gap-1 items-center tracking-[1px] border-b-[4px] p-1 border-red-500 font-semibold text-[14px]" : "flex flex-row gap-1 items-center tracking-[1px] p-1 text-[14px]"}><GoRepo /> Repositories</li>
            <li onClick={() => dispatch(setSelectedPage("star"))} className={selectedPage == "star" ? "flex flex-row gap-1 items-center tracking-[1px] border-b-[4px] p-1 border-red-500 font-semibold text-[14px]" : "flex flex-row gap-1 items-center tracking-[1px] p-1 text-[14px]"} > <GoStar /> Starts</li>
        </ul >
    )
}

export default SideBar
