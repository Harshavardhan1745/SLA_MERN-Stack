import { useState } from "react"

const App = () => {
   
   const [count,setCount] = useState(0)
   
  const clickbutton =() =>{
    
    setCount(count+1)
    
  }

  const [NameChange,setNameChange] = useState("Harsha")
  
  const clicktochange = () => {
    setNameChange("Harshavardhan")
  }

  const [isLoggedin , setIsloggedin] = useState(false)

  const [theme ,setTheme] = useState ("Light mode")
  
  const toggletheme = () => {
    setTheme(theme === "Light mode" ? "Drak mode" : "Light Mode")
  }

  const [course , setCourse] = useState ("Full stack")

  const updatecourse = () => {
    setCourse("MERN stack")
  }

  return (
    <>
    <div className="p-10">
      <button className="bg-blue-500 p-2 rounded " onClick={clickbutton}>Click me</button>
      <p>{count}</p>
    </div>
    
    <div className="p-10">
      <button className="bg-black p-2 rounded-2xl text-white" onClick={clicktochange}>Change</button>
    <h1>{NameChange}</h1>
    </div>

    <div className="p-10">
      <h2>{isLoggedin ? "Welcome User" : "Please Login"}</h2>
    <button className="bg-orange-400 text-white p-2 rounded" onClick={()=> setIsloggedin(true)}>Login</button>
    </div>

    <div className="p-10"> 
      <h2>{theme}</h2>
      <button className="p-2 bg-red-500 text-white rounded" onClick={toggletheme}>Toggle theme</button>
    </div>

    <div className="p-10">
      <h1>{course}</h1>
      <button onClick={updatecourse} className="p-2 bg-pink-500 text-white rounded">Update</button>
    </div>
    </>
  )
}

export default App