import logo from '../assets/images/logo/Logo_cpm.png'
const Navbar = () => {
  return (
    <>
    <div className='bg-white shadow-2xl p-4'>
        <div className='flex justify-between items-center'>
            <div>
                <img src={logo} alt="loading" className='w-15  h-15 mx-5'/>
            </div>
            <div className='flex gap-5'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Help</a>
            </div>
            <button className='bg-orange-400 text-white p-2 rounded-xl shadow-2xl mx-5 py-2 px-5 font-medium'>Login</button>
        </div>
    </div>
    </>
  )
}

export default Navbar