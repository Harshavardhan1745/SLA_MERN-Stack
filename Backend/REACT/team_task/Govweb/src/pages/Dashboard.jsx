import {
  Building2,
  BriefcaseBusiness,
  Layers3,
  CircleAlert
} from "lucide-react";

import StatCard from "../components/StatCard";

const Dashboard = () => {

  const departments =
    JSON.parse(localStorage.getItem("departments")) || [];

  const services =
    JSON.parse(localStorage.getItem("services")) || [];

  const categories =
    JSON.parse(localStorage.getItem("categories")) || [];

  const issues =
    JSON.parse(localStorage.getItem("issues")) || [];


  return (
    <div className="space-y-7">

      {/* Header */}

      <div className="animate-[fadeUp_0.5s_ease-out]">

        <p className="text-sm font-medium text-orange-500">
          ADMIN DASHBOARD
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-800">
          Welcome back, Admin
        </h1>

        <p className="mt-1 text-slate-500">
          Here's what's happening in your government portal today.
        </p>

      </div>


      {/* Cards */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Departments"
          value={departments.length}
          icon={Building2}
          delay={100}
        />

        <StatCard
          title="Services"
          value={services.length}
          icon={BriefcaseBusiness}
          delay={200}
        />

        <StatCard
          title="Categories"
          value={categories.length}
          icon={Layers3}
          delay={300}
        />

        <StatCard
          title="Open Issues"
          value={issues.length}
          icon={CircleAlert}
          delay={400}
        />

      </div>


      {/* Information */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="animate-[fadeUp_0.7s_ease-out] rounded-2xl border bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-slate-800">
            Portal Overview
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Manage government departments, public services,
            categories and reported issues from one centralized
            administration portal.
          </p>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">

            <div className="h-full w-[78%] animate-[progress_1.2s_ease-out] rounded-full bg-orange-500" />

          </div>

          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>System usage</span>
            <span>78%</span>
          </div>

        </div>


        <div className="animate-[fadeUp_0.8s_ease-out] rounded-2xl border bg-[#082850] p-6 text-white shadow-sm">

          <p className="text-sm text-blue-200">
            SYSTEM STATUS
          </p>

          <div className="mt-3 flex items-center gap-3">

            <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

            <h2 className="text-xl font-semibold">
              All systems operational
            </h2>

          </div>

          <p className="mt-3 text-sm leading-6 text-blue-100">
            Government services portal is running normally.
            All local data is securely maintained in browser
            storage.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;