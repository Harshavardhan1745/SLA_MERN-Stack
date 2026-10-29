import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";



function Main() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/content" element={<Contact/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default Main;