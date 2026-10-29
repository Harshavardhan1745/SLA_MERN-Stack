import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaNewspaper,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2">
            <FaNewspaper className="text-3xl text-yellow-400" />
            <h1 className="text-2xl font-bold">
              News<span className="text-yellow-400">Pulse</span>
            </h1>
          </div>

          <p className="text-gray-400 mt-4">
            Stay updated with the latest Technology, Sports,
            Science and Automobile news from around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Recent News</li>
            <li className="hover:text-yellow-400 cursor-pointer">Categories</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Categories</h2>

          <ul className="space-y-2 text-gray-400">
            <li>Technology</li>
            <li>Sports</li>
            <li>Science</li>
            <li>Automobile</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>

          <div className="flex gap-4 text-2xl">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer duration-300" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer duration-300" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer duration-300" />
            <FaYoutube className="hover:text-red-500 cursor-pointer duration-300" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        © 2026 NewsPulse. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;