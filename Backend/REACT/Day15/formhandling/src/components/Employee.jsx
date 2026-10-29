import { useState } from "react"

const Employee = () => {
  
    const [emp,setEmp] = useState({empname:"",empdepart:"",empsalary:""})
    
    const [empsave,setEmpsave] = useState([])

    const [editIndex, setEditIndex] = useState(null)

    const handlechange = (e) => {
        const {name ,value} = e.target
        setEmp((prev)=>({...prev,[name]:value}))
        
    }

    const handletoadd = () => {
        setEmpsave((prev)=>([...prev,emp]))
        setEmp({empname:"",empdepart:"",empsalary:""})
    }
    
    const handleEdit = (empedit) => {
        setEmp({empname:empedit.empname,
        empdepart: empedit.empdepart,
        empsalary: empedit.empsalary
        })
    }

    const handletodelete = (deletedata) => {
        const copy = [...empsave]
        const deletedatas = copy.filter((e,i)=>i!== deletedata)
        setEmpsave(deletedatas)
    }

    return (
    <>
    <div className="bg-red-500 h-screen text-white p-5 flex flex-col gap-10 justify-center items-center">
        <div className="bg-black/20 shadow-2xl h-fit flex flex-col justify-center items-center gap-4 rounded-xl border border-white/30 w-80 p-5">
            <form className="flex flex-col gap-4 p-5 justify-center items-center"> 
            <input type="text" value={emp.empname} name="empname" placeholder="Enter your name" onChange={handlechange} className="bg-gray-50 text-black py-2 rounded-xl shadow-2xl outline-none px-4 w-60"/>
            <input type="text" value={emp.empdepart} name="empdepart" placeholder="Enter your department" onChange={handlechange} className="bg-gray-50 text-black py-2 rounded-xl shadow-2xl outline-none px-4 w-60"/>
            <input type="text" value={emp.empsalary} name="empsalary" placeholder="Enter your salary" onChange={handlechange} className="bg-gray-50 text-black py-2 rounded-xl shadow-2xl outline-none px-4 w-60"/>
        </form>
        <button onClick={handletoadd} className="bg-black py-2 px-4 w-40 rounded-xl mb-8">Add Employee</button>
        </div>
        <h2 className="text-3xl font-black mt-6">Employee List</h2>
        <div className="bg-black/20 p-4 rounded-xl shadow-2xl overflow-x-auto">
            <table>
            <thead>
                <tr>
                    <th className="px-4 py-3 text-center">Name</th>
                    <th className="px-4 py-3 text-center">Department</th>
                    <th className="px-4 py-3 text-center">Salary</th>
                    <th className="px-4 py-3 text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {empsave.map((e,i)=>(
                    <tr key={i+1}>
                        <td className="px-4 py-3 text-left">{e.empname}</td>
                        <td className="px-4 py-3 text-left">{e.empdepart}</td>
                        <td className="px-4 py-3 text-left">{e.empsalary}</td>
                        <td className="px-4 py-3 text-left flex gap-3">
                            <button className="bg-black py-2 px-4 w-25 rounded-xl" onClick={()=>handleEdit(e)}>Edit</button>
                            <button className="bg-black py-2 px-4 w-25 rounded-xl" onClick={()=>handletodelete(i)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default Employee