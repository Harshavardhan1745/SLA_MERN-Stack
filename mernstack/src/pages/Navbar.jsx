

const Navbar = () => {
  return (
    
    <>
    <div>
        <div className="bg-white/0 border-b-1  border-white/20  p-4 flex justify-between items-center shadow-xl">
        <div>

        </div>
        <div className="flex gap-10 text-white font-semibold justify-center mx-10">
          <a href="#home">Home</a>
          {/* <a href="#home">About</a> */}
          <a href="#skills">Skills</a>
          <a href="#home">Project</a>
        </div>
        <div className="mx-10">
          <button className="bg-[#a855f7] px-5 py-2 rounded-xl text-white font-semibold">Hire me</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar