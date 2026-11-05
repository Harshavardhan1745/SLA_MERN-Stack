import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Navbar from "../pages/Navbar"
// import About from "../components/About"
import Skills from "../components/Skills"
import Project from "../components/Project"

const Approute = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <About/> */}
    <Skills/>
    <Project/>
    </>
  )
}

export default Approute