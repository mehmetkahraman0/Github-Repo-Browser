import { useDispatch, useSelector } from "react-redux"
import type { Repo } from "../models/Repo"
import { type AppDispatch, type RootState } from "../redux/store"
import { useEffect } from "react"
import { fetchRepoApi } from "../redux/slices/repoApiSlice"
import { currentUser } from "../models/User"
import { formatDistanceToNow } from "date-fns";
import { GoDotFill } from "react-icons/go"

type RepoProps = {
    repo: Repo
}

const RepoComponents = ({ repo }: RepoProps) => {

    const dispatch = useDispatch<AppDispatch>()
    const visitedUser = useSelector((state: RootState) => state.user.visitedUser)
    const fark = formatDistanceToNow(repo.updated_at, { addSuffix: true});

    useEffect(() => {
        if (visitedUser != "") {
            dispatch(fetchRepoApi(visitedUser))
        } else {
            dispatch(fetchRepoApi(currentUser.login))
        }
    }, [dispatch])

    return (
        <div className="flex flex-col flex-wrap justify-center gap-3 max-w-[1000px] w-full px-4 h-fit ">
            <div className="flex flex-row justify-between items-center">
                <p className="text-xl font-semibold text-blue-600 hover:underline">{repo.name}</p>
                <p className="px-3 py-1 bg-gray-100 rounded-2xl text-[12px]">{repo.owner.user_view_type}</p>
            </div>
            <div className="flex flex-row gap-5">
                <p className="flex flex-row font-light text-[14px]"> <GoDotFill className="text-[24px] text-blue-500" />{repo.language}</p>
                <p className="text-[14px] font-light">Updated {fark}</p>
            </div>
            <hr className="my-7"/>
        </div>
    )
}

export default RepoComponents
