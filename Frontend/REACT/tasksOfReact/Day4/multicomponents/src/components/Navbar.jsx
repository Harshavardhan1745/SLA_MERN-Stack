import Links from "./Link"

const Navbar = () =>{
     return(
        <>
        <div className="bg-blue-400 p-4 ">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="bg-white rounded-xl font-bold p-4">LOGO</h1>
                </div>
                <div>
                    <Links/>
                </div>
            </div>
        </div>
        </>
     )
}
export default Navbar