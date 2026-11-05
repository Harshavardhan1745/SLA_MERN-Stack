import html from '../assets/Skills/html.png'
import css from '../assets/Skills/css.png'
import js from '../assets/Skills/js.png'
import bs from '../assets/Skills/bs.png'
import tw from '../assets/Skills/tw.png'
import react from '../assets/Skills/react.png'
import mysql from '../assets/Skills/mysql.png'

const Skills = () => {
    return (
        <>
        <section id="skills" className="mx-10 mt-15">
            <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl font-black m-4">Skills</h1>
            <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-8 mt-6 gap-10">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div>
                           <img src={html} alt="loading.." className="w-50 h-50"/> 
                        </div>
                        <div className='text-white font-semibold mx-3'>
                            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">HTML</h1>
                            <p>I have learned day by day</p>
                            <p>Forms,tables,semantic tags ,meta tags and structure task.</p>
                        </div>
                        <div>
                            <button className='text-black bg-white px-4 py-2 rounded-xl font-medium border-2 border-black/30'>View tasks</button>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div>
                           <img src={css} alt="loading.." className="w-50 h-50"/> 
                        </div>
                        <div className='text-white font-semibold mx-3'>
                            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">CSS</h1>
                            <p>I have learned day by day</p>
                            <p>Selectors,box models,flex box,grid and animatons task.</p>
                        </div>
                        <div>
                            <button className='text-black bg-white px-4 py-2 rounded-xl font-medium border-2 border-black/30'>View tasks</button>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div>
                           <img src={js} alt="loading.." className="w-50 h-50"/> 
                        </div>
                        <div className='text-white font-semibold mx-3'>
                            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">HTML</h1>
                            <p>I have learned day by day</p>
                            <p>Forms,tables,semantic tags ,meta tags and structure task.</p>
                        </div>
                        <div>
                            <button className='text-black bg-white px-4 py-2 rounded-xl font-medium border-2 border-black/30'>View tasks</button>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div>
                           <img src={bs} alt="loading.." className="w-50 h-50"/> 
                        </div>
                        <div className='text-white font-semibold mx-3'>
                            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">HTML</h1>
                            <p>I have learned day by day</p>
                            <p>Forms,tables,semantic tags ,meta tags and structure task.</p>
                        </div>
                        <div>
                            <button className='text-black bg-white px-4 py-2 rounded-xl font-medium border-2 border-black/30'>View tasks</button>
                        </div>
                    </div>
                </div>
                {/* card 5 */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div>
                           <img src={tw} alt="loading.." className="w-50 h-50"/> 
                        </div>
                        <div className='text-white font-semibold mx-3'>
                            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">HTML</h1>
                            <p>I have learned day by day</p>
                            <p>Forms,tables,semantic tags ,meta tags and structure task.</p>
                        </div>
                        <div>
                            <button className='text-black bg-white px-4 py-2 rounded-xl font-medium border-2 border-black/30'>View tasks</button>
                        </div>
                    </div>
                </div>
                {/* card 6 */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div>
                           <img src={react} alt="loading.." className="w-50 h-50"/> 
                        </div>
                        <div className='text-white font-semibold mx-3'>
                            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">HTML</h1>
                            <p>I have learned day by day</p>
                            <p>Forms,tables,semantic tags ,meta tags and structure task.</p>
                        </div>
                        <div>
                            <button className='text-black bg-white px-4 py-2 rounded-xl font-medium border-2 border-black/30'>View tasks</button>
                        </div>
                    </div>
                </div>
                {/* card 7 */}
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div>
                           <img src={mysql} alt="loading.." className="w-50 h-50"/> 
                        </div>
                        <div className='text-white font-semibold mx-3'>
                            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">HTML</h1>
                            <p>I have learned day by day</p>
                            <p>Forms,tables,semantic tags ,meta tags and structure task.</p>
                        </div>
                        <div>
                            <button className='text-black bg-white px-4 py-2 rounded-xl font-medium border-2 border-black/30'>View tasks</button>
                        </div>
                    </div>
                </div>
        
            </div>
        </section>
        </>
    )
}
export default Skills