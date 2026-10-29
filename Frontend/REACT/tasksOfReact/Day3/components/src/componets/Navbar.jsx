import "./Navbar.css";
const Navbar = () =>{
    return(
        <>
         <div className="card"> 
            <div className="navcard">
                <a href="#" className="navbartext">Home</a>
                <a href="#" className="navbartext">About</a>
                <a href="#" className="navbartext">Contact</a>
                <a href="#" className="navbartext">Profile</a>
                <input type="text" placeholder="search...." className="inpSearch"/>
                <button className="logbtn">Login</button>
            </div>
         </div>
        </>
    )
}
export default Navbar