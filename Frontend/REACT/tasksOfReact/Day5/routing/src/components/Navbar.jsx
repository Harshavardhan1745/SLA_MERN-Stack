import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <div className="bg-black text-white p-5 flex justify-between  items-center gap-10">
      <h1 className='bg-white text-black font-bold w-20 mx-10 p-4 text-center rounded'>Tobi</h1>
      <div className='flex gap-10 mx-10'>
        <Link to="/">Home</Link>
        <Link to={"/about"}>About</Link>
        <Link>Contact</Link>
        <Link>Help</Link>
     </div>
     </div>
      
    </>
  )
}

export default Navbar