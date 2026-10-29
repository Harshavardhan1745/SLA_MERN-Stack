// import { useState } from "react";

import Arrayofobject from "./components/Arrayofobject"
import Objectrender from "./components/Objectrender"
import Toggle from "./components/Toggle"


// const App = () => {


//  const [username,setUserName] = useState("")


//  const handleChange = (e)=>{

//   // console.log(e.target.value);
//   const value = e.target.value
//   setUserName(value)
  
  

//   if(value%2==0){
//     alert("EVen")
//   }else{
//     alert("odd")
//   }

  

  

//  }

//   return (
//     <>
//     <input type="text"  onChange={handleChange} />
//     <h1>{username}</h1>
//     </>
//   )
// }

// export default App


const App = () => {
  return (
    <>
    <Toggle/>
    <Objectrender/>
    <Arrayofobject/>
    </>
  )
}

export default App
