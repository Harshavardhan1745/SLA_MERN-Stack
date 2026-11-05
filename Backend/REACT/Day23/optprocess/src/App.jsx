// import { useState } from "react";
// const App = () => {
  


// const skills = [
//   { name: "HTML", category: "Frontend" },
//   { name: "CSS", category: "Frontend" },
//   { name: "JavaScript", category: "Frontend" },
//   { name: "React", category: "Frontend" },
//   { name: "Tailwind CSS", category: "Frontend" },
//   { name: "Node.js", category: "Backend" },
//   { name: "Express.js", category: "Backend" },
//   { name: "SQL", category: "Database" },
//   { name: "UI/UX Design", category: "Design" },
// ];

// const projects = [
//   {
//     number: "01",
//     name: "Build Track",
//     type: "Construction Management",
//     description:
//       "A construction site monitoring platform to manage projects, workers, materials and site activities.",
//     tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
//     link: "#",
//   },
//   {
//     number: "02",
//     name: "EventCircle",
//     type: "Event Management",
//     description:
//       "A platform concept for discovering local public events and managing user registrations.",
//     tech: ["React", "JavaScript", "CSS"],
//     link: "#",
//   },
//   {
//     number: "03",
//     name: "Admin Management",
//     type: "Dashboard Application",
//     description:
//       "An admin interface to manage departments, services, categories and records.",
//     tech: ["React", "Tailwind", "LocalStorage"],
//     link: "#",
//   },
// ];

// const navItems = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen overflow-hidden bg-[#120F17] text-white">

//       {/* NAVBAR */}
//       <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#120F17]/85 backdrop-blur-xl">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

//           <a href="#home" className="text-2xl font-bold tracking-wide">
//             GH<span className="text-purple-500">.</span>
//           </a>

//           <div className="hidden items-center gap-8 md:flex">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-sm text-gray-400 transition hover:text-purple-400"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           <a
//             href="#contact"
//             className="hidden rounded-full border border-purple-500/50 px-5 py-2 text-sm transition hover:bg-purple-600 md:block"
//           >
//             Let's Talk ↗
//           </a>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-2xl md:hidden"
//             aria-label="Toggle navigation"
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {menuOpen && (
//           <div className="flex flex-col gap-5 border-t border-white/10 bg-[#120F17] px-6 py-6 md:hidden">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 onClick={() => setMenuOpen(false)}
//                 className="text-gray-300 hover:text-purple-400"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* HERO */}
//       <section
//         id="home"
//         className="relative flex min-h-screen scroll-mt-20 items-center px-6 pt-24"
//       >
//         <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-purple-700/20 blur-[130px]" />
//         <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]" />

//         <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 md:grid-cols-2">

//           <div>
//             <p className="mb-5 text-sm font-medium tracking-[4px] text-purple-400">
//               WELCOME TO MY PORTFOLIO
//             </p>

//             <p className="mb-3 text-lg text-gray-400">
//               Hi, I'm
//             </p>

//             <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
//               Harsha
//               <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
//                 vardhan.
//               </span>
//             </h1>

//             <h2 className="mt-6 text-xl font-medium text-gray-300 sm:text-2xl">
//               Full Stack Developer
//             </h2>

//             <p className="mt-5 max-w-lg leading-8 text-gray-400">
//               I build modern, responsive and user-friendly web applications.
//               I enjoy turning ideas into meaningful digital experiences
//               through clean code and creative design.
//             </p>

//             <div className="mt-9 flex flex-wrap gap-4">
//               <a
//                 href="#projects"
//                 className="rounded-full bg-purple-600 px-7 py-3 font-medium transition hover:-translate-y-1 hover:bg-purple-500"
//               >
//                 View Projects ↗
//               </a>

//               <a
//                 href="/Harsha_Resume.pdf"
//                 download
//                 className="rounded-full border border-white/20 px-7 py-3 transition hover:border-purple-400 hover:text-purple-400"
//               >
//                 Download CV ↓
//               </a>
//             </div>

//             <div className="mt-10 flex gap-7 text-sm text-gray-400">
//               <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-purple-400">GitHub ↗</a>
//               <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-purple-400">LinkedIn ↗</a>
//             </div>
//           </div>

//           <div className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96">
//             <div className="absolute inset-0 rounded-full border border-purple-500/20" />
//             <div className="absolute inset-5 rounded-full border border-purple-500/20" />
//             <div className="absolute inset-10 rounded-full bg-purple-600/10 blur-3xl" />

//             <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-purple-400/30 bg-gradient-to-br from-purple-500/20 to-[#120F17] shadow-[0_0_80px_rgba(147,51,234,0.15)] sm:h-72 sm:w-72">
//               <span className="text-8xl font-bold tracking-tighter text-purple-300">
//                 GH
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="scroll-mt-24 px-6 py-28">
//         <div className="mx-auto max-w-7xl">
//           <p className="mb-3 text-sm tracking-[3px] text-purple-400">GET TO KNOW ME</p>
//           <h2 className="text-4xl font-bold sm:text-5xl">
//             About <span className="text-purple-400">Me.</span>
//           </h2>

//           <div className="mt-12 grid gap-10 md:grid-cols-2">
//             <p className="leading-8 text-gray-400">
//               I'm a Computer Science Engineering graduate from RVS Technical
//               Campus. Currently, I'm developing my technical skills at SLA
//               Institute. I'm interested in frontend and backend development,
//               UI/UX design and building practical web applications.
//             </p>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
//                 <h3 className="text-3xl font-bold text-purple-400">BE</h3>
//                 <p className="mt-2 text-sm text-gray-400">Computer Science</p>
//               </div>
//               <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
//                 <h3 className="text-3xl font-bold text-purple-400">MERN</h3>
//                 <p className="mt-2 text-sm text-gray-400">Learning Journey</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SKILLS */}
//       <section id="skills" className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-6 py-28">
//         <div className="mx-auto max-w-7xl">
//           <p className="mb-3 text-sm tracking-[3px] text-purple-400">MY EXPERTISE</p>
//           <h2 className="text-4xl font-bold sm:text-5xl">
//             Technical <span className="text-purple-400">Skills.</span>
//           </h2>

//           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {skills.map((skill) => (
//               <div
//                 key={skill.name}
//                 className="group rounded-xl border border-white/10 bg-[#1A1521] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_10px_35px_rgba(147,51,234,0.12)]"
//               >
//                 <p className="text-xl font-semibold group-hover:text-purple-400">
//                   {skill.name}
//                 </p>
//                 <p className="mt-2 text-sm text-gray-500">{skill.category}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="scroll-mt-24 px-6 py-28">
//         <div className="mx-auto max-w-7xl">
//           <p className="mb-3 text-sm tracking-[3px] text-purple-400">MY RECENT WORK</p>
//           <h2 className="text-4xl font-bold sm:text-5xl">
//             Featured <span className="text-purple-400">Projects.</span>
//           </h2>

//           <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project) => (
//               <article
//                 key={project.number}
//                 className="group rounded-2xl border border-white/10 bg-[#1A1521] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50"
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="text-4xl font-bold text-purple-500/40">
//                     {project.number}
//                   </span>
//                   <span className="text-2xl text-purple-400">↗</span>
//                 </div>

//                 <p className="mt-8 text-xs uppercase tracking-widest text-purple-400">
//                   {project.type}
//                 </p>

//                 <h3 className="mt-3 text-2xl font-bold group-hover:text-purple-400">
//                   {project.name}
//                 </h3>

//                 <p className="mt-4 min-h-24 leading-7 text-gray-400">
//                   {project.description}
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {project.tech.map((tech) => (
//                     <span key={tech} className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <a href={project.link} className="mt-7 inline-block text-sm text-purple-400 hover:text-purple-300">
//                   View Project ↗
//                 </a>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* EDUCATION */}
//       <section id="education" className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-6 py-28">
//         <div className="mx-auto max-w-7xl">
//           <p className="mb-3 text-sm tracking-[3px] text-purple-400">MY BACKGROUND</p>
//           <h2 className="text-4xl font-bold sm:text-5xl">
//             Education & <span className="text-purple-400">Journey.</span>
//           </h2>

//           <div className="mt-12 space-y-8 border-l border-purple-500/40 pl-7">
//             <div className="relative">
//               <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
//               <p className="text-sm text-purple-400">BE Computer Science Engineering</p>
//               <h3 className="mt-2 text-xl font-semibold">RVS Technical Campus</h3>
//               <p className="mt-2 text-gray-500">Graduated in 2026</p>
//             </div>

//             <div className="relative">
//               <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
//               <p className="text-sm text-purple-400">Technical Skill Development</p>
//               <h3 className="mt-2 text-xl font-semibold">SLA Institute</h3>
//               <p className="mt-2 text-gray-500">Frontend and Backend Development</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="scroll-mt-24 px-6 py-28">
//         <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-[#1A1521] p-8 text-center sm:p-14">
//           <p className="text-sm tracking-[3px] text-purple-400">LET'S CONNECT</p>
//           <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
//             Have a project in <span className="text-purple-400">mind?</span>
//           </h2>
//           <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
//             I'm always interested in learning, collaborating and exploring
//             new opportunities. Let's create something meaningful together.
//           </p>

//           <a
//             href="mailto:your-email@example.com"
//             className="mt-8 inline-block rounded-full bg-purple-600 px-8 py-3 font-medium transition hover:-translate-y-1 hover:bg-purple-500"
//           >
//             Get In Touch ↗
//           </a>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-gray-500">
//         © 2026 Harshavardhan. Designed & Built with React.
//       </footer>

//     </div>
//   );
// }
// }
// export default App;

import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <>
    <Home/>
    </>
  )
}

export default App