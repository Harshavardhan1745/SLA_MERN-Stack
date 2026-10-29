import { useState } from "react"

const Studentslist = () => {

    const [name,setname] = useState("")

    const [std,setStd] = useState([])
    
    const handlechange = (e) => {
        const value = e.target.value
        setname(value)
        
        
    }

    const handletoadd = () => {
        
        setStd((prev)=>([...prev,name]))

        setname("")
    }

    return (
    <>
    <div className="p-5 bg-blue-500 text-white font-black">
        <form>
            <input type="text" placeholder="Enter your name" value={name} onChange={handlechange} className="bg-gray-50 text-black rounded py-1 focus:outline-none"/>   
        </form>
         <button onClick={handletoadd} className="bg-black py-2 px-4 text-white rounded-xl mt-3">update</button>
        <h1>Student list</h1>
            {std.map((e,i)=>(
        <h1 key={i+1}>{e}</h1>
        ))}
    </div>
    </>
  )
}

export default Studentslist