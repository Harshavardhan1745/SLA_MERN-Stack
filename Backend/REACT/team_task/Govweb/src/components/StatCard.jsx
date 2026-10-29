const StatCard = ({ title, value, icon: Icon, delay }) => {

  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="animate-[fadeUp_0.6s_ease-out_both] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {value}
          </h2>

        </div>

        <div className="rounded-xl bg-blue-50 p-3 text-[#082850]">
          <Icon size={24} />
        </div>

      </div>

    </div>
  );
};

export default StatCard;