import { Head } from "./Banner"

const Links = () =>{
    return(
        <>
        <div className="flex gap-10 mx-10 items-center" >
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Profile</a>
            <button className="bg-white p-2 text-black w-30 rounded-md">Login</button>
        </div>
        <Head/>
        </>
    )
}
export default Links