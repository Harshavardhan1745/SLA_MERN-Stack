import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="bg-gradient-to-r from-black to-yellow-600 text-white p-7">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-black">
          <h1>Logo</h1>
        </div>
         <nav className="flex gap-4 ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/content">Content</Link>
        </nav>
        <div>
          <button className="bg-white text-black border border-black p-2 w-30 rounded-xl shadow-2xl">Login</button>
        </div>
       </div>
    </div>
    </>
  );
}

export default Navbar;