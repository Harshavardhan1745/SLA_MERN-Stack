import { useState } from "react"

const Counter = () => {
  
    const [count,setCount] = useState(0)
    
    const clicktochange = () => {
    
        setCount(count+1)
    }

    const clicktoreset = () => {
        
        setCount(count-1)
    }
    return (
    <>
    <h1>{count}</h1>
    <button onClick={clicktochange}>Increase</button>
    <button onClick={clicktoreset}>Decrease</button>
    <button onClick={()=> setCount(0)}>Reset</button>
    </>
  )
}

export default Counter