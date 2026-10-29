import {
  LayoutDashboard,
  Building2,
  BriefcaseBusiness,
  Layers3,
  CircleAlert,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const menu = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard
    },
    {
      name: "Departments",
      path: "/departments",
      icon: Building2
    },
    {
      name: "Services",
      path: "/services",
      icon: BriefcaseBusiness
    },
    {
      name: "Categories",
      path: "/categories",
      icon: Layers3
    },
    {
      name: "Issues",
      path: "/issues",
      icon: CircleAlert
    }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#082850] text-white shadow-xl">

      {/* Logo */}

      <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500">
          <Building2 size={22} />
        </div>

        <div>
          <h1 className="font-bold tracking-wide">
            GOVSERVE
          </h1>

          <p className="text-xs text-blue-200">
            Government Portal
          </p>
        </div>

      </div>


      {/* Menu */}

      <div className="px-4 py-6">

        <p className="mb-3 px-3 text-xs uppercase tracking-widest text-blue-300">
          Management
        </p>

        <div className="space-y-2">

          {menu.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "text-blue-100 hover:bg-white/10 hover:translate-x-1"
                  }`
                }
              >

                <Icon size={19} />

                <span>{item.name}</span>

              </NavLink>
            );

          })}

        </div>

      </div>


      {/* Bottom */}

      <div className="absolute bottom-5 left-4 right-4">

        <div className="rounded-xl bg-white/5 p-4">

          <div className="flex items-center gap-3">

            <Settings size={18} />

            <div>
              <p className="text-sm font-medium">
                System Settings
              </p>

              <p className="text-xs text-blue-300">
                Portal configuration
              </p>
            </div>

          </div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;