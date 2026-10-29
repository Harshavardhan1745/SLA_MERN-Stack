import Navbar from "./componets/Navbar"
import Profilecard from "./componets/Profilecard"
import Banner from "./componets/Banner"
import Moviecard from "./componets/Moviecard"

const App = () =>{
  
  return(
    <>
    <Navbar/><br /><br />   
    {/* <div className="heading">
      <h1>This is componets process....</h1>
    </div>
    <div>
      <h2 className="head">This is image</h2>
      <img src="./favicon.svg" alt="" className="image" />
    </div> */}
    <Profilecard/>
    <br /><br /><br />        
    <Banner/>
    <Moviecard/>
    </>
  )

}

export default App