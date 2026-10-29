import { useState } from "react"
import Createcontext from "../context/Createcontext"

const Providercontext = ({children}) => {
    
    const [count,setCount] = useState(0)

    const handletochange = () => {
        setCount((prev)=>prev+1)
    }

    const datas = {name:"Harsha",course:"MERN"}
   
    return (
    <Createcontext value={{count,handletochange,datas}}>
        {children}
    </Createcontext>
  )
}

export default Providercontext