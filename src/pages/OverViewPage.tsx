import ActivityComponent from "../Components/Activity"
import PopularRepo from "../Components/PopularRepo"
import UserCard from "../Components/UserCard"

const OverViewPage = () => {
    return (
        <div className='flex flex-col justify-center md:flex-row  gap-7 mt-10 '>
            <UserCard />
            <div className="flex flex-col items-center md:w-[900px]">
                <div className='flex flex-col items-center sm:[400px] md:w-[900px]'>
                    <PopularRepo />
                </div>
                <div className='flex flex-col items-center md:w-[900px] mt-10'>
                    <ActivityComponent />
                </div>
            </div>
        </div>
    )
}

export default OverViewPage
