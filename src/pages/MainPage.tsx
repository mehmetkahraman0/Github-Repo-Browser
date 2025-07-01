import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../Components/UserCard'
import { type AppDispatch, type RootState } from '../redux/store'
import { useEffect } from 'react'
import { fetchRepoApi } from '../redux/slices/repoApiSlice'
import { currentUser } from '../models/User'
import RepoComponents from '../Components/RepoComponents'
import type { Repo } from '../models/Repo'

const MainPage = () => {
    const repos = useSelector((state: RootState) => { state.repo.repos })
    console.log(repos)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchRepoApi(currentUser.login))
    }, [dispatch])
    return (
        <div className='flex flex-row justify-center gap-3 mt-5 mx-5'>
            <UserCard />
            
        </div>
    )
}

export default MainPage