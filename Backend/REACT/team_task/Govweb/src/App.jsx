import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";

import Services from "./pages/Services";
import Categories from "./pages/Categories";
import Issues from "./pages/Issues";

import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100">

        <Sidebar />

        <div className="ml-64">

          <Navbar />

          <main className="p-6">
           <Routes>

  {/* Public Website */}
  <Route path="/" element={<Landing />} />

  {/* Admin */}
  <Route path="/dashboard" element={<Dashboard />} />

  <Route
    path="/departments"
    element={<Departments />}
  />

  <Route
    path="/services"
    element={<Services />}
  />

  <Route
    path="/categories"
    element={<Categories />}
  />

  <Route
    path="/issues"
    element={<Issues />}
  />

</Routes>
          </main>

        </div>

      </div>
    </BrowserRouter>

    </>
  );
};

export default App;