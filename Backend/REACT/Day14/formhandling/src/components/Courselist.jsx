import { useState } from "react"

const Courselist = () => {
    
    const [course,setCourse] = useState("")

    const [stdcourse,setStdcourse] = useState([])

    const handlechange = (e) => {
      setCourse(e.target.value)
    }

    const  handletoadd = () => {
      setStdcourse((prev)=>([...prev,course]))
      setCourse("")
    }

    const handletoedit = (course) => {
      setCourse(course)
    }

    const handletodelete = (newdata) => {
      const copy = [...stdcourse]
      const deletedata = copy.filter((e,i)=>i!==newdata)
      setStdcourse(deletedata)
    }
  
    return (
    <>
    <div className="p-5 bg-fuchsia-400  text-white font-black">
      <div className="bg-black/15 p-5 rounded w-fit">
        <form>
        <input type="text" placeholder="Enter your course" value={course} onChange={handlechange} className="bg-gray-50 text-black rounded py-1 focus:outline-none"/>
      </form>
      <button onClick={handletoadd} className="bg-black py-2 px-4 text-white rounded-xl mt-3">Update</button>
      <h1>Course List</h1>
      {stdcourse.map((e,i)=>(
        <div key={i+1} className="flex flex-col gap-2">
          <h2 >{e}</h2>
          <div className="flex gap-4">
            <button onClick={()=>handletoedit(e)} className="bg-black py-2 px-4 rounded-xl ">Edit</button>
            <button onClick={()=>handletodelete(i)} className="bg-white text-black py-2 px-4 rounded-xl">Delete</button>
          </div>
        </div>
        
      ))}
      </div>
    </div>
    </>
  )
}

export default Courselist