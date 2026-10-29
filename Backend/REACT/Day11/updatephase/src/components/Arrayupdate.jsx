import { useState } from "react"

const Arrayupdate = () => {
    
    const [arr,setArr] = useState(["HTML", "CSS", "JavaScript"])
    const handleclick = () =>{
        const copy = [...arr,"React"]
        setArr(copy)
    }
    return (
    <>
    <div className="bg-orange-400 p-5 text-white font-black flex flex-col gap-6 justify-center items-center">
        {arr.map((e,i)=>(
            
            <div key={i+1} className="bg-black/20 p-3 w-30 rounded ">
            <h1  className="flex justify-center items-center">{e}</h1>
            </div>
        ))}
        <button onClick={handleclick} className="bg-white text-black py-2 px-4 rounded shadow-2xl">Update</button>
    </div>

    </>
  )
}

export default Arrayupdate