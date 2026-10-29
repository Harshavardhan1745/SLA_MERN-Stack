import { useState } from "react";

const Objectrender = () => {
   
  const [user, setUser] = useState({
  name: "Rahul",
  age: 18,
  city: "Chennai"
});

    const clicktoupdatename = () => {
        setUser((prev)=>({...prev,name:"Harsha"}))
    }

    const increaseAge = () => {
        setUser((p)=>({...p,age:user.age+1}))
    }
    
    const changecity = () => {
        setUser((pre)=>({...pre,city:"Coimbatore"}))
    }

    return (
    <>
    <div className="flex gap-5 justify-center items-center bg-red-500 p-5 text-white mt-5">
        <div className="bg-black/20 rounded-lg shadow-amber-50 p-2 flex flex-col gap-1 justify-center items-center ">
            <h1>{user.name}</h1>
        <button onClick={clicktoupdatename} className="bg-black text-white py-2 px-4 rounded-2xl shadow-xl">Change name</button>
        </div>
        <div className="bg-black/20 rounded-lg shadow-amber-50 p-2 flex flex-col gap-1 justify-center items-center ">
            <h3>{user.age}</h3>
        <button onClick={increaseAge} className="bg-black text-white py-2 px-4 rounded-2xl shadow-xl">Increase Age </button>
        </div>
        <div className="bg-black/20 rounded-lg shadow-amber-50 p-2 flex flex-col gap-1 justify-center items-center ">
            <h3>{user.city}</h3>
        <button onClick={changecity} className="bg-black text-white py-2 px-4 rounded-2xl shadow-xl">Change city </button>
        </div>
    </div>
    </>
  )
}

export default Objectrender