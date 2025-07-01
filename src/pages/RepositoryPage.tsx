import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../Components/UserCard'
import { type AppDispatch, type RootState } from '../redux/store'
import { useEffect } from 'react'
import { fetchRepoApi } from '../redux/slices/repoApiSlice'
import { currentUser } from '../models/User'
import RepoComponents from '../Components/RepoComponents'

const RepositoryPage = () => {
    const repos = useSelector((state: RootState) => state.repo.repos)
    console.log(repos)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchRepoApi(currentUser.login))
    }, [dispatch])
    return (
        <div className='flex flex-col md:flex-row justify-center gap-7 mt-10'>
            <UserCard />
            <div className='flex flex-col items-center md:w-[900px]'>
                {repos.map((item, index) => (
                    <RepoComponents repo={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default RepositoryPage



