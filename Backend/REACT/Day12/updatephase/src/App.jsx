// import { useState } from "react"

import Arrayrendering from "./components/Arrayrendering"
import EmployeeList from "./components/EmployeeList"
import Objectupdate from "./components/objectupdate"
import ShowPassword from "./components/ShowPassword"

// const App = () => {
  
//   const [arr,setArr] = useState([1,2,3,4,5])

//   const clicktochange = () => {
   
//     setArr((prev)=>[...prev,6])
 
//   }
  

//   const [obj,setObj] = useState({username:"Harsha",course:"MERN"})

//   const clicktoadd = () => {
//   setObj({...obj,username:"Sam",course:"MERN"})
  
//   }

//   const [arrofobj,setArrofobj] = useState([{username:"Harsha",course:"MERN"},
//     {username:"Sam",course:"MERN"}
//   ])

//   const clicktoupdate = () =>{
    
//   }
//   return (
//     <>
//     {arr.map((e,i)=>(
//       <div key={i+1}>
//         <h1>{e}</h1>
        
//       </div>
//     ))}
//     <button onClick={clicktochange}>Add value</button>

//     <h1>{obj.username}</h1>
//     <h1>{obj.course}</h1>
//     <button onClick={clicktoadd}>ADD</button>
//     </>
//   )
// }

// export default App



const App = () => {
  return (
    <>
    <Arrayrendering/>
    <Objectupdate/>
    <EmployeeList/>
    <ShowPassword/>x
    </>
  )
}

export default App