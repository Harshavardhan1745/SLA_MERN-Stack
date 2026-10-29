import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="head-banner">
                <div className="imgcard">
                    <img src="./images.jpg" alt="" />
                    <div className='hero-content flex flex-col justify-center items-center gap-5'>
                        <h1 className="text-2xl">Welcome to Our Website </h1>
                        <button className='bg-white text-black w-40 rounded'>Explore Now </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner