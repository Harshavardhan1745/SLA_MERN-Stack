import { Bell, Search } from "lucide-react";

const Navbar = () => {

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-white/90 px-6 shadow-sm backdrop-blur">

      <div>
        <h2 className="text-xl font-semibold text-slate-800">
          Government Services
        </h2>

        <p className="text-sm text-slate-500">
          Manage departments and public services
        </p>
      </div>


      <div className="flex items-center gap-5">

        <div className="hidden items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 md:flex">

          <Search size={17} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-32 bg-transparent text-sm outline-none"
          />

        </div>


        <button className="relative rounded-xl p-2 transition hover:bg-slate-100">

          <Bell size={20} />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-orange-500" />

        </button>


        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#082850] font-semibold text-white">
            A
          </div>

          <div className="hidden md:block">

            <p className="text-sm font-semibold">
              Admin
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;