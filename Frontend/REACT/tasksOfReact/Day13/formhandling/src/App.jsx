import { useState } from "react";

const App = () => {
  const [username,setUsername] = useState(" ")
  const [savedata,setSavedata] = useState([])
  const handlechange = (e) =>{
    
    setUsername(e.target.value) 
  }
  const showvalue = () => {
    setSavedata(username)
    setUsername(" ")
  }

  const [student,setStudent] = useState("")
  const [data,setData] = useState([])
  const [course,setcourse] = useState("")
  const [datas,setdatas] = useState([])

  const addstudent = (e) =>{
    setStudent(e.target.value)
  }
  const addstudentcourse = (e) =>{
    setcourse(e.target.value)
  }
  
  const displayvalue = () =>{
    setData(student)
    setStudent("")
    setdatas(course)
    setcourse("")
  }

  const [employee,setEmployee] = useState("")
  const [employeename,setEmployeename] = useState([])

  const [department,setDepartment] = useState("")
  const [depart,setDepart] = useState([])

  const [salary,setSalary] = useState("")
  const [amt,setAmt] = useState([])

  const addemp = (e) =>{
    setEmployee(e.target.value)
  }

  const adddepart =(e)=>{
    setDepartment(e.target.value)
  }

  const addsalary =(e)=>{
    setSalary(e.target.value)
  }

  const showempdetails =()=>{
    setEmployeename(employee)
    setEmployee("")
    setDepart(department)
    setDepartment("")
    setAmt(salary)
    setSalary("")
  }

  return (
    <>
    <div>
      {/* <p>{username}</p> */}
      <input type="text" value={username} placeholder="Enter your name" onChange={handlechange}/>
      <button onClick={showvalue}>Add value</button>
    </div>
    <h1>{savedata}</h1>

    <div>
      <input type="text" value={student} placeholder="Enter your name " onChange={addstudent}/>
      <input type="text" value={course} placeholder="Enter your course " onChange={addstudentcourse}/>
      <button onClick={displayvalue}>Show</button>
    </div>
    <h1>Student Name :{data}</h1>
    <h1>Course :{datas}</h1>

    <div>
      <input type="text" placeholder="enter emp name" onChange={addemp}/>
      <input type="text" placeholder="enter emp department" onChange={adddepart}/>
      <input type="number" placeholder="enter emp salary " onChange={addsalary}/>
      <button onClick={showempdetails}>Show data</button>
    </div>
    <h1>Employee Name : {employeename}</h1>
    <h1>Department : {depart}</h1>
    <h1>Salary : {amt}</h1>
    </>
  )
}

export default App