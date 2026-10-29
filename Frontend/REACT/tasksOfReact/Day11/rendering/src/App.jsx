import { useState } from "react"

const App = () => {
  
  // const [data,setData] = useState(true)

  // const [arr,setArr] = useState([1,2,3,4,5,6])
  

  // const [obj,setObj] = useState({name:'React'})

  // const changename = () => {
  //   setObj({...obj,name : "Node"})
  // }
  
  // const addnum = () =>{
  //   setArr([...arr,100])
  // }

  // const clicktochange = () =>{
  //   setData(!data)
  // }


  const [heroes,setHeroes] = useState(["Vijay", "Ajith", "Suriya"])

  const Changehero = () => {
    const updatehero = [...heroes]
    updatehero[1] = "Sk"
    setHeroes(updatehero)
  }

  const [fruits , setFruits] = useState(["Apple","Orange","Mango"]) 

  const changefruit = () => {
    const updatefruit = [...fruits]
    updatefruit[1] = "Banana" 
    setFruits(updatefruit)
  }

  const [course ,setCourse] = useState({name:"Harsha",course:"Fullstack"})

  const changecourse = () =>{
    setCourse({...course,course:"MERNStack"})
  }

  const [company,setCompany] = useState({Company : "Google" , Place : "Chennai"})
  
  const changecompany  = () => {
    setCompany ({...company,Company:"ZOHO" , Place : "Coimbatore"})
  }

  const [student , setStudent] = useState([{id:1, Name : "Harsha" },
    {id : 2, Name : "Pooja"}
  ])

  const updatestudent = () =>{
     const updatestudentname = [...student]
     updatestudentname[1].Name = "Karthiga"

     setStudent(updatestudentname)
  }
  
  return (
    <>
      {/* <div className={data?"bg-black text-white p-10":"bg-red-500 text-white p-10 "}>
        <h1>Welcome to React </h1>
        <button className={data?"bg-red-500 p-2 rounded ":"bg-black p-2 rounded "} onClick={clicktochange}>change</button>
      </div>

      <div className="bg-blue-400 p-5 m-5 text-white rounded">
        {arr.map((e,i)=>(
          <h1 key={i+1}>{e}</h1>
        ))}

        <div className="p-2">
          <button className="bg-black p-2 text-white w-40 rounded" onClick={addnum}>Add</button>
        </div>
      </div>

      <div className="bg-blue-300 p-2 text-white m-5 rounded">
        <h1 className="font-bold text-2xl">{obj.name}</h1>
        <button className="bg-black p-2 text-white w-40 rounded" onClick={changename}>change</button>
      </div> */}

      <div className="p-10 flex flex-col gap-5">
        {heroes.map((e,i)=>(
         <p key={i+1}>{e}</p>
        ))}
        <button className="bg-black w-40 text-white p-2 rounded" onClick={Changehero}>Change</button>
      </div>

      <div className="p-10 flex flex-col gap-5">
        {fruits.map((e,i)=>(
         <p key={i+1}>{e}</p>
        ))}
        <button className="bg-black w-40 text-white p-2 rounded" onClick={changefruit}>Change</button>
      </div>

      <div className="p-10 flex flex-col gap-5">
        <h1>Name : {course.name}</h1>
        <h1>Course : {course.course}</h1>
        <button className="bg-black w-40 text-white p-2 rounded" onClick={changecourse}> Updatecourse</button>
      </div>

      <div className="p-10 flex flex-col gap-5">
        <h1>Name : {company.Company}</h1>
        <h1>Course : {company.Place}</h1>
        <button className="bg-black w-40 text-white p-2 rounded" onClick={changecompany}> Updatecourse</button>
      </div>

      {student.map((s)=>(
        <div key={s.id} className="p-10 flex flex-col gap-5">
        <h1>ID : {s.id}</h1>
        <h1>Name : {s.Name}</h1>
        <button className="bg-black w-40 text-white p-2 rounded" onClick={updatestudent}>Update Student</button>
      </div>
      ))}
    </>
  )
}

export default App