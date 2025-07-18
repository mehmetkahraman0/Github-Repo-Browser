import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store"
import { useEffect, useState } from "react"
import { currentUser } from "../models/User"
import { fetchEventApi } from "../redux/slices/eventApiSlice"
import { GoFold, GoUnfold } from "react-icons/go"
import type { Event } from "../models/Event"
import { useParams } from "react-router-dom"

const ActivityComponent = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [isOpen, setIsOpen] = useState(true)
    const event = useSelector((state: RootState) => state.event.events)
    const { user } = useParams()
    const selectedUser = user || currentUser.login
    interface GroupedEvent {
        groupName: string;
        items: Event[];
    }

    const groupByActivity = (events: Event[]): GroupedEvent[] => {
        const groups = events.reduce<Record<string, Event[]>>((acc, item) => {
            const repoName = item.repo.name;

            if (!acc[repoName]) {
                acc[repoName] = [];
            }

            acc[repoName].push(item);
            return acc;
        }, {});

        const groupedList: GroupedEvent[] = Object.entries(groups).map(
            ([groupName, items]) => ({
                groupName,
                items,
            })
        );

        return groupedList;
    };

    const groupEvent = groupByActivity(event)
    console.log(groupEvent)

    useEffect(() => {
        dispatch(fetchEventApi(selectedUser))
    }, [])

    return (
        <div className="flex flex-col gap-2 w-full ">
            <p className="text-[20px]">Activity</p>
            <hr />
            <div className="flex flex-row justify-between">
                <header>Created {event.length} commits in {groupEvent.length} repositories</header>
                {isOpen ? <GoFold onClick={() => setIsOpen(false)} /> : <GoUnfold onClick={() => setIsOpen(true)} />}
            </div>
            <div className="flex flex-col gap-2">
                {isOpen
                    ? groupEvent.map((item, index) => (
                        <div key={index} className="flex flex-row gap-5 items-end">
                            <p className="text-blue-700 cursor-pointer text-[12px]">{item.groupName}</p>
                            <p className="font-light text-[10px]"> Commit {item.items.length}</p>
                        </div>
                    ))
                    : <hr className="text-blue-700" />
                }
            </div>
        </div>
    )
}

export default ActivityComponent