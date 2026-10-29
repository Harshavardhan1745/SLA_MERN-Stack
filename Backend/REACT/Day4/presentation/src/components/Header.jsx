import iphone from '../assets/images/product/download.webp'
import nothing from '../assets/images/product/images (1).jpg'
const Header = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-white to-orange-400">
        <div className='flex justify-evenly gap-2 p-5 mt-20'>
            <div className='bg-black/5 w-fit flex flex-col justify-center gap-3 rounded shadow-2xl items-center'>
                <img src={iphone} alt="" className='p-5 h-70 w-fit '/>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold'>IPhone 17</h1>
                    <p>Price : 1250000</p>
                </div>
                <button className='bg-black text-white p-2 w-40 rounded-xl shadow-2xl mb-5'>Buy now</button>
            </div>

            <div className='bg-black/5 w-fit flex flex-col justify-center rounded shadow-2xl items-center'>
                <img src={nothing} alt="" className='p-5 h-70 w-fit '/>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold'>Samsung</h1>
                    <p>Price : 30000</p>
                </div>
                <button className='bg-black text-white p-2 w-40 rounded-xl shadow-2xl mb-5'>Buy now</button>
            </div>
            <div className='bg-black/5 w-fit flex flex-col justify-center gap-3 rounded shadow-2xl items-center'>
                <img src={iphone} alt="" className='p-5 h-70 w-fit '/>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold'>IPhone 17</h1>
                    <p>Price : 1250000</p>
                </div>
                <button className='bg-black text-white p-2 w-40 rounded-xl shadow-2xl mb-5'>Buy now</button>
            </div>

            <div className='bg-black/5 w-fit flex flex-col justify-center rounded shadow-2xl items-center'>
                <img src={nothing} alt="" className='p-5 h-70 w-fit '/>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold'>Samsung</h1>
                    <p>Price : 30000</p>
                </div>
                <button className='bg-black text-white p-2 w-40 rounded-xl shadow-2xl mb-5'>Buy now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header