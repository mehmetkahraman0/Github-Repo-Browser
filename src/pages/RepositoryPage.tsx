import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../Components/UserCard'
import { type AppDispatch, type RootState } from '../redux/store'
import { useEffect } from 'react'
import { fetchRepoApi } from '../redux/slices/repoApiSlice'
import { currentUser } from '../models/User'
import RepoComponents from '../Components/RepoComponents'
import { useParams } from 'react-router-dom'

const RepositoryPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const repos = useSelector((state: RootState) => state.repo.repos)
    const { user } = useParams()
    console.log(repos)

    const selectedUser = user || currentUser.login

    useEffect(() => {
        dispatch(fetchRepoApi(selectedUser))
    }, [dispatch, user])
    return (
        <div className='flex flex-col md:flex-row justify-center gap-7 mt-10 items'>
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



