import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="text-white">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Breaking News
          </p>

          <h1 className="text-5xl font-bold mt-4 leading-tight">
            Stay Updated with the
            <span className="text-yellow-400"> Latest News</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Read the latest news from Technology, Sports, Science and
            Automobile. Get real-time updates with beautiful UI and dynamic
            rendering.
          </p>

          <button className="mt-8 flex items-center gap-3 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 duration-300">
            Explore News
            <FaArrowRight />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800"
            alt="News"
            className="rounded-2xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;