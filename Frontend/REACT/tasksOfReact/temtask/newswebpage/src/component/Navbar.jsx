import { FaNewspaper, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaNewspaper className="text-3xl text-yellow-400" />
          <h1 className="text-2xl font-bold">
            News<span className="text-yellow-400">Pulse</span>
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-yellow-400 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            Technology
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            Sports
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition">
            Science
          </li>
        </ul>

        {/* Search */}
        <div className="flex items-center bg-white rounded-lg px-3 py-2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 text-black"
          />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;