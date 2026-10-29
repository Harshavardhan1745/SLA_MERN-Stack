import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./components/About"
import Firstpage from "./components/Homepage"

const App = () => {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Firstpage/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App