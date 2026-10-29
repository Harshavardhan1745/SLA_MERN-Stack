import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import news from "../data/news";
const RecentNews = () => {
  const news = [
    {
      id: 1,
      title: "AI Revolution in Healthcare",
      category: "Technology",
      date: "24 July 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
      desc: "Artificial Intelligence is changing hospitals with faster diagnosis."
    },
    {
      id: 2,
      title: "India Wins Cricket Series",
      category: "Sports",
      date: "23 July 2026",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500",
      desc: "India defeated Australia in an exciting cricket series."
    },
    {
      id: 3,
      title: "SpaceX Launch Success",
      category: "Science",
      date: "22 July 2026",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500",
      desc: "SpaceX successfully launched its latest satellite mission."
    },
    {
      id: 4,
      title: "Electric Cars Growing Fast",
      category: "Automobile",
      date: "21 July 2026",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500",
      desc: "Electric vehicles are becoming more popular around the world."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Recent News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {item.category}
              </span>

              <h3 className="text-xl font-bold mt-3">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.desc}
              </p>

              <div className="flex justify-between items-center mt-5">
                <span className="flex items-center gap-2 text-gray-500">
                  <FaCalendarAlt />
                  {item.date}
                </span>

                {/* Read Button */}
                <Link
                  to={`/news/${item.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                  Read More
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentNews;