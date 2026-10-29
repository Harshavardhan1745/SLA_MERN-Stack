import { useState } from "react"

const Objectupdate = () => {

  const [obj,setObj] = useState({name:"Harsha",age:21,course:"React"})

  const clicktochange = () => {
    
    setObj({...obj,course:"MERN"})

  }

  const addcity = () => {
    setObj({...obj,city:"Chennai"})
  }
  return (
    <>
    <div className="bg-black mt-5 text-white font-black gap-5 p-5 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="bg-white/20 w-30 p-3 text-center rounded">{obj.name}</h1>
        <h3 className="bg-white/20 w-30 p-3 text-center rounded">{obj.age}</h3>
        <h3 className="bg-white/20 w-30 p-3 text-center rounded">{obj.course}</h3>
        <h3 className="bg-white/20 w-30 p-3 text-center rounded">{obj.city}</h3>
      </div>
      <button onClick={addcity}>Add City</button>
      <button onClick={clicktochange} className="bg-blue-600 py-2 px-4 rounded shadow-2xl">Update</button>
    </div>
    </>
  )
}

export default Objectupdate