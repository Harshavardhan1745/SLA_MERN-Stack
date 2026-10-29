import { useState } from "react"

const Numberlist = () => {
  
    const [number,setNumber] = useState("")

    const [stdnumber,setStdnumber] = useState([])

    const handlechnage = (e) => {

        setNumber(e.target.value)

    }

    const handletoadd = () => {
        setStdnumber((prev)=>([...prev,number]))
        setNumber("")
    }
  
  
    return (
    <>
    <div className="p-5 bg-blue-500 text-white font-black">
        <form>
            <input type="number" placeholder="Enter the roll number" value={number} onChange={handlechnage} className="bg-gray-50 text-black rounded py-1 focus:outline-none"/>
        </form>
        <button onClick={handletoadd} className="bg-black py-2 px-4 text-white rounded-xl mt-3">Update</button>
        <div>
            {stdnumber.map((e,i)=>(
                <div key={i+1}>
                    <h1>{e}</h1>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Numberlist