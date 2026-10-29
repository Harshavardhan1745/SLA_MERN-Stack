import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Allsports from "../pages/Allsports"
import Mens from "../pages/Mens"
import Womens from "../pages/Womens"
import Kids from "../pages/Kids"
import Home from "../pages/Home"

const Approutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Allsports/>}/>
      <Route path="/mens" element = {<Mens/>}/>
      <Route path="/womens" element = {<Womens/>}/>
      <Route path="/kids" element = {<Kids/>}/>
    </Routes>
    <Home/>
    </>
  )
}

export default Approutes