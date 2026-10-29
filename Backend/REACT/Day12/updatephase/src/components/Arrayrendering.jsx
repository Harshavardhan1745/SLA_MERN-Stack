import { useState } from "react"

const Arrayrendering = () => {

    const [arr,setArr] = useState(["HTML", "CSS", "JavaScript"])

    const clicktochange = () =>{
        setArr((prev)=>([...prev,"js"]))
    }
  return (
    <>
    <div className="bg-orange-400 text-white p-10 font-black flex flex-col justify-center items-center gap-5">
        {arr.map((e,i)=>(
            <div key={i+1}>
                <h1 className="bg-white text-black w-30 p-2 rounded text-center">{e}</h1>
            </div>
        ))}
        <button onClick={clicktochange} className="bg-black/20 py-2 px-4 w-30 rounded-lg shadow-2xl">ADD</button>
    </div>
    </>
  )
}

export default Arrayrendering