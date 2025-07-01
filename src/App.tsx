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
        <Route path="/repository" element={<RepositoryPage />}></Route>
        <Route path="/star" element={<StarPage />}></Route>
        <Route path="/followers" element={<FollowersPage />}></Route>
        <Route path="/followings" element={<FollowingPage />}></Route>

      </Routes>
    </>
  )
}

export default App
