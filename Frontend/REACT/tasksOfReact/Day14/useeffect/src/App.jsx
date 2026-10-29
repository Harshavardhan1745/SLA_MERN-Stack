import { useState } from "react"

const App = () => {
  const [adddata,setAddData] = useState("")
  const [data,setData] = useState([])

  const adddatas = (e) => {
    setAddData(e.target.value)
  }

  const showaddvalue =()=>{
    setData(adddata)
    setAddData("")
  }

  const [studentname,setStudentName] = useState("")
  const [studentcourse,setStudentCourse] = useState("")

  const [stddata,setStdData] = useState({name:"",course:""})

  const handleSubmit = () => {
    setStdData({
      name: studentname,
      course: studentcourse,
    })

  return (
    <>
    <div>
      <input type="text" value={adddata} placeholder="Enter your name" onChange={adddatas}/>
      <button onClick={showaddvalue}>Show value</button>
      <h1>{data}</h1>
    </div>
   
   <div>
    <input type="text" placeholder="Enter your name " onChange={(e) => setStudentName(e.target.value)}/>
    <input type="text" placeholder="Enter your course " onChange={(e) => setStudentCourse(e.target.value)}/>
    <button onClick={handleSubmit}> add </button>
   </div>
   <h2>Student Name: {stddata.name}</h2>
        <h2>Course: {stddata.course}</h2>
    </>
  )
}
}

export default App