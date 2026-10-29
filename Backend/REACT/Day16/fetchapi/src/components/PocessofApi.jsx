import { useEffect, useState } from "react"

const PocessofApi = () => {
  
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")

  const getdata = async()=>{
    const user = await fetch("https://dummyjson.com/users")
    const result = await user.json()
    console.log(result.users);
    setData(result.users)
  }
  
  const handlesearch = (e) => {
    setSearch(e.target.value)
  }
  
  let userdatas = [...data]
  
  if(search){
    userdatas = userdatas.filter((e)=>e.firstName.toLowerCase().includes(search.toLowerCase()))
    console.log(userdatas);
    
  }

  useEffect(()=>{
    getdata()
  },[])

  return (
    <>
     <div className="bg-black p-5 sticky top-0 z-50">
        <input type="search" placeholder="Search Users" id="search" onChange={handlesearch} className="bg-white text-black py-2 w-70 rounded-xl px-3 outline-none mx-10"/>   
      </div>
    <div className="bg-red-500 h-fit text-white p-5 flex  gap-6 flex-wrap justify-center items-center ">
      {userdatas.map((e,i)=>(
        <div key={i+1} className="bg-black/20 p-4 h-fit w-40 rounded-lg shadow-xl flex flex-col gap-1 justify-center border border-white/20">
          <h1>{e.firstName}</h1>
          <p>{e.age}</p>
          <p>{e.address.city}</p>
          <button className="bg-black text-white py-2 px-4 rounded-2xl">Details</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default PocessofApi
