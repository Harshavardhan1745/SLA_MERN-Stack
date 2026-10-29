import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    
    <>
    <div className="flex justify-between items-center p-5 bg-slate-900 text-white">
        <div>
            <h1>Logo</h1>
        </div>
        <div className="flex gap-10">
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/services">Service</Link>
        </div>
        <button className="bg-white text-black py-2 px-5 rounded-xl">Login</button>
    </div>
    </>
  )
}

export default Navbar