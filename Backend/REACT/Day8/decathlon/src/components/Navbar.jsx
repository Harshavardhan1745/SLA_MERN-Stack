import { Link } from "react-router-dom"
import logo from "../assets/images/logo/icon.jpg"

const Navbar = () => {
  return (
    <>
    <div className="bg-white p-4 shadow flex justify-between items-center">
        <div className="flex gap-10 items-center justify-between">
            <img src={logo}  alt="loading"  className="mx-10 w-20 "/>
            <input type="text" placeholder="Search"  className="p-3 bg-gray-100 w-60 rounded-2xl shadow"/>    
        </div>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-xl mx-10">Login</button>
    </div>
    <div>
        <div className="flex justify-between p-3">
            <div className="flex gap-10 mx-10">
            <Link to = "/" className="hover:underline hover:underline-offset-5">All sports</Link>
            <Link to = "/mens" className="hover:underline hover:underline-offset-5">Mens</Link>
            <Link to = "/womens" className="hover:underline hover:underline-offset-5">Womens</Link>
            <Link to = "/kids" className="hover:underline hover:underline-offset-5">Kids</Link>
            </div>
            <div>
                <h1 className="font-semibold text-xs mx-10">Delivery to <span className="text-blue-800">Bangalore Central, Bangalore, 560001, Karnataka</span></h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar