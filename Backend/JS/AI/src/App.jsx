import { useEffect, useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setVisible(true);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = 0;

      sections.forEach((section, index) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.5) {
          current = index;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technologies = [
    {
      icon: "🤖",
      title: "Artificial Intelligence",
      text: "AI will become a normal part of software development, business operations, customer service and decision making.",
    },
    {
      icon: "☁️",
      title: "Cloud & Edge",
      text: "Applications will increasingly use cloud and edge computing to deliver faster and smarter digital experiences.",
    },
    {
      icon: "🔐",
      title: "Cybersecurity",
      text: "As digital systems grow, organizations will need stronger security, privacy and AI governance.",
    },
    {
      icon: "🧠",
      title: "Human + AI",
      text: "Developers and professionals will work together with AI to solve complex problems faster.",
    },
  ];

  const impacts = [
    {
      number: "01",
      title: "Jobs Will Transform",
      text: "Repetitive tasks may increasingly be automated, while demand can grow for people who can design, manage, validate and govern AI-powered systems.",
    },
    {
      number: "02",
      title: "Skills Will Change",
      text: "Problem solving, communication, AI literacy, cybersecurity, cloud and system design will become increasingly valuable.",
    },
    {
      number: "03",
      title: "Development Gets Faster",
      text: "AI-assisted coding and automated testing can reduce time spent on repetitive development work.",
    },
    {
      number: "04",
      title: "Businesses Become Digital",
      text: "More businesses will depend on software, data and AI to automate operations and create personalized customer experiences.",
    },
  ];

  const skills = [
    "AI & Machine Learning",
    "Cloud Computing",
    "Cybersecurity",
    "Data Analytics",
    "Problem Solving",
    "System Design",
    "Communication",
    "UI/UX Design",
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="text-xl md:text-2xl font-black tracking-wide">
            IT<span className="text-cyan-400">2030</span>
          </div>

          <div className="hidden md:flex gap-7 text-sm text-gray-300">
            <a href="#future" className="hover:text-cyan-400 transition">
              Future
            </a>
            <a href="#technology" className="hover:text-cyan-400 transition">
              Technology
            </a>
            <a href="#impact" className="hover:text-cyan-400 transition">
              Impact
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </div>

          <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_20px_#4ade80] animate-pulse" />
        </div>
      </nav>


      {/* HERO */}
      <section
        id="future"
        className="min-h-screen relative flex items-center justify-center px-6 pt-20"
      >

        {/* Background glow */}
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] top-20 left-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] bottom-10 right-10 animate-pulse" />

        {/* Floating circles */}
        <div className="absolute top-32 left-[15%] w-4 h-4 rounded-full bg-cyan-400 animate-bounce" />
        <div className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bg-purple-400 animate-ping" />
        <div className="absolute bottom-[20%] left-[25%] w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

        <div
          className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >

          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm mb-6">
            The Future of Technology
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Where Will
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              IT Industry
            </span>

            <br />

            Be in 2030?
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg md:text-xl leading-relaxed">
            Artificial Intelligence, automation, cloud computing and
            cybersecurity are reshaping technology. By 2030, the IT industry
            could look very different from what we know today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="#technology"
              className="px-7 py-3 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition duration-300"
            >
              Explore Future
            </a>

            <a
              href="#impact"
              className="px-7 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 hover:-translate-y-1 transition duration-300"
            >
              See the Impact
            </a>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          ↓
        </div>
      </section>


      {/* INTRO */}
      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
                2030 Vision
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                IT will not disappear.
                <br />
                <span className="text-gray-500">
                  It will transform.
                </span>
              </h2>

              <p className="text-gray-400 mt-6 leading-8">
                Technology is moving from simple digital tools toward
                intelligent systems. Software will increasingly understand
                context, automate tasks and assist people in making decisions.
              </p>

              <p className="text-gray-400 mt-4 leading-8">
                The biggest change may not be the disappearance of technology
                jobs, but the transformation of what technology professionals
                actually do.
              </p>
            </div>


            {/* Futuristic Card */}
            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

              <div className="relative border border-white/10 rounded-3xl bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-3 hover:border-cyan-400/40 transition duration-500">

                <div className="text-6xl mb-6 animate-pulse">
                  🌐
                </div>

                <h3 className="text-2xl font-bold">
                  Digital World 2030
                </h3>

                <div className="space-y-5 mt-8">

                  {[
                    ["AI Integration", "90%"],
                    ["Cloud Adoption", "95%"],
                    ["Automation", "85%"],
                    ["Cybersecurity", "92%"],
                  ].map(([name, value]) => (

                    <div key={name}>

                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">{name}</span>
                        <span className="text-cyan-400">{value}</span>
                      </div>

                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-[grow_2s_ease-out]"
                          style={{ width: value }}
                        />

                      </div>

                    </div>

                  ))}

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* TECHNOLOGY */}
      <section id="technology" className="py-28 px-6 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-widest text-sm">
              Major Transformation
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-4">
              Technologies Driving
              <span className="text-gray-500"> 2030</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-5">
              Several technologies are likely to shape how companies build
              products, manage information and serve customers.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {technologies.map((tech, index) => (

              <div
                key={tech.title}
                className="group relative p-7 rounded-3xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:-translate-y-3 hover:border-cyan-400/40 transition-all duration-500"
              >

                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 blur-2xl transition" />

                <div className="relative">

                  <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-6 transition duration-500">
                    {tech.icon}
                  </div>

                  <div className="text-cyan-400 text-sm mb-3">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-bold">
                    {tech.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    {tech.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* AI SECTION */}
      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 md:p-14 relative overflow-hidden">

            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-12 items-center">

              <div>

                <div className="text-7xl mb-6 animate-bounce">
                  🤖
                </div>

                <p className="text-cyan-400 uppercase tracking-widest text-sm">
                  Biggest Shift
                </p>

                <h2 className="text-4xl md:text-5xl font-black mt-4">
                  AI becomes a
                  <span className="text-cyan-400"> co-worker</span>
                </h2>

              </div>


              <div>

                <p className="text-gray-300 text-lg leading-8">
                  Instead of AI being a separate tool, it may become part of
                  everyday workflows. Developers could use AI for generating
                  code, testing, debugging, documentation and analysis.
                </p>

                <p className="text-gray-400 mt-5 leading-8">
                  Humans will still need to provide goals, context,
                  creativity, judgment and responsibility.
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* IMPACT */}
      <section id="impact" className="py-28 px-6 bg-white/[0.02]">

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">

            <p className="text-cyan-400 uppercase tracking-widest text-sm">
              Industry Impact
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-4">
              What Changes?
            </h2>

          </div>


          <div className="grid md:grid-cols-2 gap-6">

            {impacts.map((item) => (

              <div
                key={item.number}
                className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:-translate-y-2 hover:shadow-2xl transition duration-500"
              >

                <div className="flex gap-6">

                  <span className="text-4xl font-black text-cyan-400/40 group-hover:text-cyan-400 transition">
                    {item.number}
                  </span>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-4 leading-7">
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* JOBS */}
      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-cyan-400 uppercase tracking-widest text-sm">
              Future Careers
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-4">
              Will AI Take Jobs?
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
              The more realistic question is not simply "Will AI take jobs?"
              but "Which tasks will AI automate, and which new skills will
              humans need?"
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 hover:scale-105 transition duration-500">

              <div className="text-4xl mb-5">⚙️</div>

              <h3 className="text-xl font-bold">
                More Automation
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Repetitive and predictable tasks are likely to be increasingly
                automated.
              </p>

            </div>


            <div className="p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 hover:scale-105 transition duration-500">

              <div className="text-4xl mb-5">🚀</div>

              <h3 className="text-xl font-bold">
                New Opportunities
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                AI, cloud, cybersecurity, data and AI governance can create
                new career paths.
              </p>

            </div>


            <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10 hover:scale-105 transition duration-500">

              <div className="text-4xl mb-5">🧑‍💻</div>

              <h3 className="text-xl font-bold">
                Human Advantage
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Creativity, communication, leadership, judgment and problem
                solving remain important human strengths.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="py-28 px-6 bg-white/[0.02]">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Prepare Yourself
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            Skills for 2030
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            The future belongs to people who can combine technology skills
            with creativity and problem solving.
          </p>


          <div className="flex flex-wrap justify-center gap-4 mt-12">

            {skills.map((skill, index) => (

              <div
                key={skill}
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-cyan-400 hover:text-black hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {skill}
              </div>

            ))}

          </div>

        </div>
      </section>


      {/* TIMELINE */}
      <section className="py-28 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-widest text-sm">
              The Journey
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-4">
              From Today to 2030
            </h2>

          </div>


          <div className="relative">

            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

            {[
              ["2026", "AI becomes deeply integrated into everyday development."],
              ["2027", "AI agents become more capable of handling multi-step workflows."],
              ["2028", "Businesses increasingly redesign workflows around AI and automation."],
              ["2029", "Human + AI collaboration becomes normal across many IT roles."],
              ["2030", "IT professionals focus more on strategy, architecture, creativity and responsible technology."],
            ].map(([year, text], index) => (

              <div
                key={year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

                <div className="ml-12 md:ml-0 md:w-1/2 md:px-10">

                  <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.04] hover:-translate-y-2 hover:border-cyan-400/30 transition duration-500">

                    <div className="text-cyan-400 font-black text-xl">
                      {year}
                    </div>

                    <p className="text-gray-400 mt-3 leading-7">
                      {text}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* FINAL */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-28">

        <div className="max-w-4xl text-center">

          <div className="text-7xl mb-8 animate-pulse">
            🌌
          </div>

          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm">
            Final Thought
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
            2030 is not about
            <span className="text-gray-500"> humans vs AI.</span>
          </h2>

          <h3 className="text-3xl md:text-5xl font-black mt-4">
            It's about
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}humans with AI.
            </span>
          </h3>

          <p className="text-gray-400 text-lg leading-8 mt-8">
            The people who continuously learn, adapt and use technology
            intelligently may be better prepared for the changing IT
            industry.
          </p>


          <a
            href="#future"
            className="inline-block mt-10 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-110 hover:shadow-2xl transition duration-300"
          >
            Back to Top ↑
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">

        <p>
          IT2030 • Exploring the Future of Technology
        </p>

        <p className="text-xs mt-2">
          Built with React + Tailwind CSS
        </p>

      </footer>

    </div>
  );
}

export default App;