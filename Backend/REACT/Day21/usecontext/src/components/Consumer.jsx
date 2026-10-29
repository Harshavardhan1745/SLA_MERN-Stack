import { useContext } from "react"
import Createcontext from "../context/Createcontext"

const Consumer = () => {
    
    const {count,handletochange,datas} = useContext(Createcontext)
  
    return (
    <>
    <h1>{count}</h1>
    <button onClick={handletochange}>update</button>
    
    <h2>{datas.name}</h2>
    <p>{datas.course}</p>

    </>    
)
}

export default Consumer