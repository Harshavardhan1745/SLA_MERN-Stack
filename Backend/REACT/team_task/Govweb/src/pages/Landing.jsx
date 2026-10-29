import {
  ArrowRight,
  Search,
  ShieldCheck,
  Building2,
  FileText,
  Landmark,
  Clock3,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">

      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#082850]/95 text-white shadow-lg backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 shadow-lg">
              <Landmark size={23} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide">
                GOVSERVE
              </h1>

              <p className="text-[10px] uppercase tracking-widest text-blue-200">
                Digital Government Portal
              </p>
            </div>

          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#home"
              className="text-sm text-white transition hover:text-orange-400"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-sm text-blue-100 transition hover:text-orange-400"
            >
              Services
            </a>

            <a
              href="#departments"
              className="text-sm text-blue-100 transition hover:text-orange-400"
            >
              Departments
            </a>

            <a
              href="#how-it-works"
              className="text-sm text-blue-100 transition hover:text-orange-400"
            >
              How It Works
            </a>

          </div>

          <Link
  to="/dashboard"
  className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium transition hover:bg-orange-500"
>
  Admin Portal
</Link>

        </div>

      </nav>


      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#082850] pt-20 text-white"
      >

        {/* Background circles */}

        <div className="absolute -right-32 top-24 h-96 w-96 animate-pulse rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute right-[20%] top-40 h-3 w-3 animate-ping rounded-full bg-orange-400" />

        <div className="absolute left-[15%] top-52 h-2 w-2 animate-pulse rounded-full bg-blue-300" />


        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="animate-[fadeUp_0.8s_ease-out]">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/10 px-4 py-2 text-xs font-medium text-blue-100 backdrop-blur">

              <ShieldCheck size={15} />

              Trusted Digital Government Services

            </div>


            <h1 className="max-w-2xl text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl">

              Government Services,

              <span className="mt-2 block text-orange-400">
                Simplified.
              </span>

            </h1>


            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 md:text-lg">

              Access government departments and public services
              through one simple, secure and transparent digital
              platform.

            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#services"
                className="group flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400"
              >

                Explore Services

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </a>


              <a
                href="#departments"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
              >
                View Departments
              </a>

            </div>


            {/* Stats */}

            <div className="mt-12 flex flex-wrap gap-10">

              <div>
                <h3 className="text-3xl font-bold">
                  12+
                </h3>

                <p className="mt-1 text-xs text-blue-200">
                  Departments
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  48+
                </h3>

                <p className="mt-1 text-xs text-blue-200">
                  Services
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  24/7
                </h3>

                <p className="mt-1 text-xs text-blue-200">
                  Accessibility
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT CARD */}

          <div className="relative hidden lg:block">

            <div className="relative mx-auto w-full max-w-md animate-[float_5s_ease-in-out_infinite]">

              {/* Glow */}

              <div className="absolute inset-10 rounded-full bg-orange-500/20 blur-3xl" />


              {/* Main Card */}

              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-7 shadow-2xl backdrop-blur-xl">

                <div className="mb-8 flex items-center justify-between">

                  <div>

                    <p className="text-xs text-blue-200">
                      DIGITAL PORTAL
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      Service Overview
                    </h3>

                  </div>

                  <div className="rounded-xl bg-orange-500 p-3">
                    <Building2 size={22} />
                  </div>

                </div>


                <div className="space-y-4">

                  <div className="rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">

                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-blue-500/20 p-3">
                        <FileText size={20} />
                      </div>

                      <div className="flex-1">

                        <p className="text-sm font-medium">
                          Certificates
                        </p>

                        <p className="text-xs text-blue-200">
                          Government documents
                        </p>

                      </div>

                      <ChevronRight size={17} />

                    </div>

                  </div>


                  <div className="rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">

                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-orange-500/20 p-3">
                        <Landmark size={20} />
                      </div>

                      <div className="flex-1">

                        <p className="text-sm font-medium">
                          Public Services
                        </p>

                        <p className="text-xs text-blue-200">
                          Access essential services
                        </p>

                      </div>

                      <ChevronRight size={17} />

                    </div>

                  </div>


                  <div className="rounded-2xl bg-green-500/10 p-4">

                    <div className="flex items-center gap-3">

                      <CheckCircle2
                        size={20}
                        className="text-green-400"
                      />

                      <div>

                        <p className="text-sm font-medium">
                          Portal Operational
                        </p>

                        <p className="text-xs text-green-300">
                          All systems running normally
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            SERVICES
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Access Essential Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            Find government services through a centralized
            and easy-to-use digital platform.
          </p>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: FileText,
              title: "Certificates",
              text: "Apply for important government certificates."
            },
            {
              icon: Landmark,
              title: "Licences",
              text: "Access licence and permit related services."
            },
            {
              icon: Building2,
              title: "Registrations",
              text: "Manage registrations and applications."
            },
            {
              icon: ShieldCheck,
              title: "Public Services",
              text: "Access essential public services."
            }
          ].map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                className="group animate-[fadeUp_0.7s_ease-out_both] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#082850] transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">

                  <Icon size={22} />

                </div>

                <h3 className="mt-5 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

                <button className="mt-5 flex items-center gap-1 text-sm font-medium text-[#082850] transition group-hover:text-orange-500">
                  Explore
                  <ArrowRight size={15} />
                </button>

              </div>
            );
          })}

        </div>

      </section>


      {/* DEPARTMENTS */}

      <section
        id="departments"
        className="bg-white py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                DEPARTMENTS
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                One Portal.
                <span className="block text-[#082850]">
                  Multiple Departments.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500">
                Discover services provided by different
                government departments from one centralized
                platform.
              </p>


              <div className="mt-8 space-y-4">

                {[
                  "Revenue Department",
                  "Transport Department",
                  "Health Department",
                  "Education Department"
                ].map((department) => (

                  <div
                    key={department}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-x-1 hover:border-orange-200"
                  >

                    <div className="rounded-lg bg-white p-2 text-[#082850] shadow-sm">
                      <Building2 size={18} />
                    </div>

                    <span className="text-sm font-medium">
                      {department}
                    </span>

                    <ChevronRight
                      size={17}
                      className="ml-auto text-slate-400"
                    />

                  </div>

                ))}

              </div>

            </div>


            <div className="relative">

              <div className="rounded-3xl bg-[#082850] p-8 text-white shadow-2xl">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-blue-200">
                      CENTRALIZED ACCESS
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      Everything in one place
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-orange-500 p-4">
                    <Search size={25} />
                  </div>

                </div>


                <div className="mt-8 space-y-3">

                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                    <CheckCircle2
                      size={18}
                      className="text-green-400"
                    />
                    <span className="text-sm">
                      Easy service discovery
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                    <CheckCircle2
                      size={18}
                      className="text-green-400"
                    />
                    <span className="text-sm">
                      Department-based services
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                    <CheckCircle2
                      size={18}
                      className="text-green-400"
                    />
                    <span className="text-sm">
                      Transparent information
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Simple. Clear. Accessible.
          </h2>

        </div>


        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {[
            {
              number: "01",
              icon: Search,
              title: "Find a Service",
              text: "Search and discover the government service you need."
            },
            {
              number: "02",
              icon: Building2,
              title: "Choose Department",
              text: "Select the relevant department and service category."
            },
            {
              number: "03",
              icon: CheckCircle2,
              title: "Access Information",
              text: "View service details and proceed with your requirement."
            }
          ].map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="relative rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <span className="absolute right-6 top-5 text-4xl font-bold text-slate-100">
                  {item.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#082850] text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </section>


      {/* CTA */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#082850] px-8 py-14 text-center text-white shadow-2xl md:px-20">

          <Clock3 className="mx-auto text-orange-400" size={30} />

          <h2 className="mt-5 text-3xl font-bold">
            Government services, available when you need them.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100">
            Explore departments and discover the services
            available through our digital government portal.
          </p>

          <a
            href="#services"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:bg-orange-400"
          >
            Explore Services
            <ArrowRight size={17} />
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="bg-[#061d3a] px-6 py-10 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
              <Landmark size={20} />
            </div>

            <div>

              <p className="font-bold">
                GOVSERVE
              </p>

              <p className="text-xs text-blue-300">
                Digital Government Portal
              </p>

            </div>

          </div>


          <p className="text-xs text-blue-300">
            © 2026 Government Services Portal. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Landing;