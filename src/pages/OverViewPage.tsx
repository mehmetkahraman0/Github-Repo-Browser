import ActivityComponent from "../Components/Activity"
import PopularRepo from "../Components/PopularRepo"
import UserCard from "../Components/UserCard"

const OverViewPage = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 mt-10 px-4">
            <div className="md:w-[300px] w-full mb-6 lg:mb-0">
                <UserCard />
            </div>

            <div className="flex flex-col gap-10 w-full">
                <PopularRepo />
                <div className="w-full">
                    <ActivityComponent />
                </div>
            </div>
        </div>
    )
}

export default OverViewPage
