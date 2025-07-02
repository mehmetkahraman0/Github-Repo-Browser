import { GoDotFill, GoStarFill } from 'react-icons/go';
import type { Repo } from '../models/Repo'
import { formatDistanceToNow } from 'date-fns';

type StarComponentProps = {
    repo: Repo
}

const StartComponent = ({ repo }: StarComponentProps) => {
    const fark = formatDistanceToNow(repo.updated_at, { addSuffix: true });

    return (
        <div className="flex flex-col flex-wrap justify-center gap-3 w-full px-4 h-fit ">
            <div className="flex flex-row justify-between items-center">
                <p className="text-xl font-semibold text-blue-600 hover:underline">{repo.name}</p>
                <div className='flex flex-row gap-1 items-center'>
                    <p className="px-3 py-1 bg-gray-100 rounded-2xl text-[12px]">{repo.owner.user_view_type}</p>
                    <p><GoStarFill className='text-yellow-400' /></p>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <p className="flex flex-row font-light text-[14px]"> <GoDotFill className="text-[24px] text-blue-500" />{repo.language}</p>
                <p className="text-[14px] font-light">Updated {fark}</p>
            </div>
            <hr className="my-7" />
        </div>
    )
}

export default StartComponent
