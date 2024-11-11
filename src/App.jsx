import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import FavouritesPage from "./pages/FavouritesPage"
import RecipePage from "./pages/RecipePage"
function App() {
  return (
    <div className="flex">
    <Sidebar/>
    <Routes>
      <Route path="/" element ={<HomePage/>} />
      <Route path="/favourites" element ={<FavouritesPage/>}/>
      <Route path="/recipe" element={<RecipePage/>}/>
    </Routes>
    </div>
  )
}
export default App
