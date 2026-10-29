import { useState } from "react"

const Objectupdate = () => {
    
    const [obj,setobj] = useState({product:"Laptop",price:45000,stock:15})

    const clicktochange = () =>{
        setobj({...obj,price:50000})
    }

    const clicktoupdate = () =>{
        setobj({...obj,brand:"HP"})
    }
  
    return (
    <>
    <div className="bg-black text-white font-black p-5 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-5 justify-center items-center ">
        <h1>{obj.product}</h1>
        <h3>{obj.price}</h3>
        <h3>{obj.stock}</h3>
        <h3>{obj.brand}</h3>
        
    </div>
    <button onClick={clicktochange} className="bg-blue-500 p-2 w-30 rounded ">update</button>
        <button onClick={clicktoupdate} className="bg-blue-500 p-2 w-30 rounded ">Add brand</button>
    </div>
    </>
  )
}

export default Objectupdate