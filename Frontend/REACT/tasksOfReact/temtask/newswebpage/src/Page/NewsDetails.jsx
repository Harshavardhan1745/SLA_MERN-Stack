import { useParams, Link } from "react-router-dom";
import news from "../Data/news";

const NewsDetails = () => {
  const { id } = useParams();

  const singleNews = news.find((item) => item.id === Number(id));

  if (!singleNews) {
    return <h1 className="text-center mt-20">News Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">

      <img
        src={singleNews.image}
        alt={singleNews.title}
        className="w-full h-[450px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-8">
        {singleNews.title}
      </h1>

      <p className="text-blue-600 mt-2">
        {singleNews.category}
      </p>

      <p className="text-gray-500">
        {singleNews.date}
      </p>

      <p className="mt-8 text-lg leading-9 text-gray-700">
        {singleNews.desc}

        <br /><br />

        Artificial Intelligence and modern technology continue to transform
        industries worldwide. Experts believe these innovations will improve
        productivity, create new opportunities, and change the way people
        work and communicate. This news highlights the latest developments
        and explains their impact on everyday life.
      </p>

      <Link
        to="/"
        className="inline-block mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        ← Back to Home
      </Link>

    </div>
  );
};

export default NewsDetails;