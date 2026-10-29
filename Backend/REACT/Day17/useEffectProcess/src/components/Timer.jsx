import { useEffect, useState } from "react"

const Timer = () => {
    const [count,setCount] = useState(0)
    const [start,setStart] = useState(false)

    useEffect(()=>{
        if (!start) return
        const timer = setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)

        return () => clearInterval(timer)
    },[start])

    const timerstart = () => {
        setStart(true)        
    }

  return (
    <>
    <div className="bg-mauve-500 p-5 flex flex-col items-center">
        <h1 className="bg-black/30 text-white p-5 rounded-full font-black text-xl shadow-2xl">00:{count}</h1>
        <div className="flex gap-5 mt-8">
            <button className="bg-black text-white py-2 px-4 rounded-xl shadow-2xl" onClick={timerstart}>increase</button>
        <button onClick={()=>setStart(false)} className="bg-black text-white py-2 px-4 rounded-xl shadow-2xl">Stop</button>
        <button onClick={()=>{setStart(false),setCount(0)}} className="bg-black text-white py-2 px-4 rounded-xl shadow-2xl">Reset</button>
        </div>
    </div>
    </>
  )
}

export default Timer