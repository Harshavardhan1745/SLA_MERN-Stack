import { useState } from "react"

const Namechange = () => {
    const[Change,setChange] = useState("Node")
    
    const handleclick = () =>{
        setChange("REACT")
    } 
    return (
    <>
    <h1>{Change}</h1>
    <button onClick={handleclick}>Click to change</button>
    </>
  )
}

export default Namechange