import { useState } from "react"


const Toggle = () => {

    const [togglelist,setToggle] = useState(false)

    const clicktochange = () =>{
        setToggle((prev)=>!prev)
    }

    const [like,setLike] = useState(false)

    const clicktoupdate = () => {
      setLike((p)=>!p)
    }
  return (
    <>
    <div className="bg-black p-5 text-white flex gap-5 justify-center items-center">
      <div className="flex gap-2 items-center ">
      <button onClick={clicktochange} className="bg-blue-500 py-2 px-4 rounded-lg shadow-amber-50">Turn on</button>
      <h1>{togglelist? "ON":"OFF"}</h1>
    </div>

    <div className="flex gap-2 items-center">
      <h1>My Post</h1>
      <button onClick={clicktoupdate} className="bg-blue-500 py-2 px-4 rounded-lg shadow-amber-50">{like?"liked":"Like"}</button>
    </div>
    </div>
    </>
  )
}

export default Toggle