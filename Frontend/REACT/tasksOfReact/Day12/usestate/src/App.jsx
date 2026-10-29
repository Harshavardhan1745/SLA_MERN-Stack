import { useState } from "react"

const App = () => {

  const [student,setStudent] = useState({name : "Harsha",Course : "React"})
  
  const clicktochange = () => {
    setStudent({...student,Course:"MERN STACK"})
  }

  const [product ,setProduct] = useState({Name : "Mobile", Price:20000})

  const updateprice = () => {
    setProduct({...product,Price:25000})
  }

  const [heroes , setHeroes] = useState(["Ajith","Vijai","Dhanush"])

  const updatehero = () => {
    const update = [...heroes]
    update[1] = "SK"
    setHeroes(update)
  }

  const [number,setNumber] = useState ([1,2,3,4,5,6])

  const updatenumber = () => {
    const change = [...number]
    change[2] = 100
    setNumber(change)
  }

  const [fruits,setFruits] = useState(["Apple","Orange"])

  const updatefruit = () => {
    const add = [...fruits]
    add.pop()
    add.push("Banana")
    setFruits(add)
  }

  const [namelist,setNameList] = useState([{id:1,name:"Harsha"},{id:2,name:"Pooja"}])

  const updatename = () => {
    const update = [...namelist]
    update[0] = {...update[0],name:"Harshavardhan"}
    update.push({id:3,name:"sam"})
    update.splice(0,1)
    setNameList(update)
  }

  return (
    <>
    <div>
      <h1>{student.name}</h1>
      <h1>{student.Course}</h1>
      <button onClick={clicktochange}>Change</button>
    </div>

    <div>
      <h1>{product.Nameame}</h1>
      <h1>{product.Price}</h1>
      <button onClick={updateprice}>Change</button>
    </div>

    {heroes.map((e,i)=>(
      <div key={i+1}>
        <h1>{e}</h1>
      </div>
    ))}
    <button onClick={updatehero}>Update</button>

    {number.map((e,i)=>(
      <div key={i+1}>
        <h1>{e}</h1>
      </div>
    ))}
    <button onClick={updatenumber}>Change</button>

    {fruits.map((e,i)=>(
      <div key={i+1}>
        <h1>{e}</h1>
      </div>
    ))}
    <button onClick={updatefruit}>Change</button>

    {namelist.map((e,i)=>(
      <div key={i+1}>
        <p>{e.id}</p>
        <p>{e.name}</p>
      </div>
    ))}
    <button onClick={updatename}>Change</button>
    </>
  )
}

export default App