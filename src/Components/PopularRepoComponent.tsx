import { GoStar } from "react-icons/go"
import type { Repo } from "../models/Repo"

type PopularRepoProps = {
  repo: Repo
}

const PopularRepoComponent = ({ repo }: PopularRepoProps) => {
  return (
    <div className="flex flex-col gap-2 w-[400px] h-[100px] border-[1px] border-gray-300 p-4 shadow-sm">
      <div className="flex flex-row  justify-between">
        <p className="text-[14px] font-semibold text-blue-700 hover:underline">{repo.name}</p>
        <p className="bg-gray-200 px-2 py-1 rounded-2xl text-[12px] self-center">{repo.visibility}</p>
      </div>
      <div>
        <p className="text-[12px]">{repo.description}</p>
      </div>
      <div>
        <p className={repo.stargazers_count == 0 ? "hidden" : "flex flex-row gap-1 items-center text-[12px]"}><GoStar className="text-[16px]"/> {repo.stargazers_count}</p>
      </div>
    </div>
  )
}

export default PopularRepoComponent
