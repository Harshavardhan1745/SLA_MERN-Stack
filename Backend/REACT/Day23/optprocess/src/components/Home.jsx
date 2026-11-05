// import { use, useState } from "react"

import { useState } from "react"


// const Home = () => {
//     const [data,setData] = useState([])
//     const [getdatas,setGetdatas] = useState("")

//     const getdata = async() =>{
//        const user =  await fatch("https://dummyjson.com/users")
//        const result = await user.json()
//         setData(result.user)
//     }


//   return (
//     <>
//     <div>
//         <input type="text" placeholder="Enter your name" onChange={handletochange()}/>
//     </div>
//     </>
//   )
// }

// export default Home




const Home = () => {
  const [counter,setCounter] = useState(0)
  const handlechange = () => {
    setCounter((pre)=>pre+1)
    if (counter == 5 ){
        setCounter;
    }
  }

  return (
    <>
    <h1>{counter}</h1>
    <button onClick={handlechange}>update</button>
    </>
  )
}

export default Home