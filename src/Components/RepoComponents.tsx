import { useDispatch, useSelector } from "react-redux"
import type { Repo } from "../models/Repo"
import { type AppDispatch, type RootState } from "../redux/store"
import { useEffect } from "react"
import { fetchRepoApi } from "../redux/slices/repoApiSlice"
import { currentUser } from "../models/User"
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

type RepoProps = {
    repo: Repo
}

const RepoComponents = ({ repo }: RepoProps) => {

    const dispatch = useDispatch<AppDispatch>()
    const visitedUser = useSelector((state: RootState) => state.user.visitedUser)
    const fark = formatDistanceToNow(repo.updated_at, { addSuffix: true, locale: tr });

    useEffect(() => {
        if (visitedUser != "") {
            dispatch(fetchRepoApi(visitedUser))
        } else {
            dispatch(fetchRepoApi(currentUser.login))
        }
    }, [dispatch,])

    return (
        <div className="flex flex-col gap-3 border-b-2">
            <div className="flex flex-row justify-between">
                <p>{repo.name}</p>
                <p>{repo.owner.user_view_type}</p>
            </div>
            <div>
                <p>{repo.language}</p>
                <p>Updated {fark}</p>
            </div>
        </div>
    )
}

export default RepoComponents
