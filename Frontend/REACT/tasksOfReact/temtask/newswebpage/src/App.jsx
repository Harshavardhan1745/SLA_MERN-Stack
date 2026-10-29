import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Homepage";
import RecentNews from "./component/RecentNews";
import Footer from "./component/Footer";
import NewsDetails from "./Page/NewsDetails";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <RecentNews />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news/:id" element={<NewsDetails />} />
    </Routes>
  );
}

export default App;