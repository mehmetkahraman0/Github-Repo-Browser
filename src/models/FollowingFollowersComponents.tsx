import { GoLocation, GoOrganization } from 'react-icons/go'
import type { User } from './User'
import { useDispatch } from 'react-redux'
import { setVisitedUser } from '../redux/slices/userApiSlice'

type FFProps = {
    user: User
}


const FollowingFollowersComponents = ({ user }: FFProps) => {
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col max-w-[1000px] w-full px-4 h-fit'>
            <div className=" flex flex-row gap-4 max-w-[1000px] w-full px-4 h-fit my-5">
                <div className="">
                    <img className='w-[90px] rounded-[50%]' src={user.avatar_url} alt="profile_foto" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className='flex flex-row gap-4 '>
                        <p className='hover:text-blue-500 cursor-pointer'>{user.name}</p>
                        <p className='font-light'>{user.login}</p>
                    </div>
                    <p className="flex flex-row font-light text-[14px]">{user.bio}</p>
                    <p className="text-[14px] font-light"></p>
                    <div className='flex flex-row gap-5'>
                        <p className={user.company ? "flex flex-row items-center gap-1" : "hidden"}><GoOrganization />{user.company}</p>
                        <p className={user.location ? "flex flex-row items-center gap-1" : "hidden"}><GoLocation />{user.location}</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default FollowingFollowersComponents
