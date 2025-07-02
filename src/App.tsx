import { Routes, Route } from "react-router-dom"
import OverViewPage from "./pages/OverViewPage"
import RepositoryPage from "./pages/RepositoryPage"
import StarPage from "./pages/StarPage"
import SideBar from './Components/SideBar';
import Navbar from "./Components/Navbar";
import FollowersPage from "./pages/FollowersPage";
import FollowingPage from "./pages/FollowingPage";
function App() {

  return (
    <>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/" element={<OverViewPage />}></Route>
        <Route path="/:user" element={<OverViewPage />}></Route>
        <Route path="/:user/repository" element={<RepositoryPage />}></Route>
        <Route path="/:user/star" element={<StarPage />}></Route>
        <Route path="/:user/followers" element={<FollowersPage />}></Route>
        <Route path="/:user/followings" element={<FollowingPage />}></Route>

      </Routes>
    </>
  )
}

export default App
