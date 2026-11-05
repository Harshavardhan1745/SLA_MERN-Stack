import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import profile from '../assets/profile/profile.jpg'

const Home = () => {
  return (
    
    
    <>
    <section id="home" className="mt-20">
      <div className="bg-white/5 mt-15 p-4 h-fit w-auto m-10 text-white font-black text-4xl rounded-2xl border border-white/10">
        <div className="flex justify-between items-center">
          <div className="text-6xl font-bold mx-8 p-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent flex flex-col gap-4">
            <h2 className="text-2xl text-white">Hello🙋🏻‍♂️ ,</h2>
            <h1>I'm a Web<br />
              <span className="mt-2"> Developer</span>
            </h1>
            <p className="text-2xl font-bold text-white">I build things for web</p>
            <div className="flex gap-7 mt-5">
                <a href="YOUR_GITHUB_URL" target="_blank" rel="noreferrer">
                  <FaGithub size={28} className="text-white hover:text-purple-500 hover:scale-125 transition-all" />
                </a>

                <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noreferrer">
                  <FaLinkedinIn  size={28} className="text-white hover:text-purple-500 hover:scale-125 transition-all" />
                </a>

                <a href="YOUR_INSTAGRAM_URL" target="_blank" rel="noreferrer">
                  <FaInstagram size={28} className="text-white hover:text-purple-500 hover:scale-125 transition-all" />
                </a>
            </div>
            <div>
               <button className="bg-white text-black text-xl border-2 border-black/20 font-semibold py-2 px-4 rounded-2xl hover:scale-125 transition-all">View resume</button>
            </div>
          </div>
          <div className="mx-20 h-[290px] w-[250px] overflow-hidden rounded-t-full rounded-b-3xl border border-purple-300 shadow-2xl">
            <img src={profile} alt="loading" className="h-full w-full object-cover object-center"/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home