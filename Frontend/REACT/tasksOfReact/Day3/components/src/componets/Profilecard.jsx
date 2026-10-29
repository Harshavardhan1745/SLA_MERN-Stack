import image from "../assets/image/profile.jpeg";
const Profilecard = () => {

    return (
        <>
            <div className="flex justify-center items-center p-5">
                <div className="bg-black p-5 w-80 h-100 flex justify-center items-center flex-col gap-8 rounded-md">
                    <div className="p-5">
                        <img src={image} alt="loading" className="rounded-full object-cover h-40 w-40 mt-5" />
                    </div>
                    <div className="flex flex-col gap-5 pb-5">
                        <h1 className="text-white">Harshavardhan</h1>
                        <p className="text-white">Frontend</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profilecard