import { useState } from "react";

const Arrayofobject = () => {
  
    const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Phone", price: 20000, inStock: false },
  { id: 3, name: "Tablet", price: 15000, inStock: true }
]);
    const [show,setShow] = useState(false)


    const togglelist = () => {
        setShow((prev)=>!prev)
    }
  
    return (
    <>
    <div className="flex gap-5 justify-center items-center bg-red-500 p-5 text-white mt-5">
        <button onClick={togglelist}>{show?"Hide details":"Show details"}</button>
        {show && products.map((e,i)=>(
            <div key={i+1} className="bg-black/20 rounded-lg shadow-amber-50 p-2 flex flex-col gap-1 justify-center items-center ">
                <h1>{e.id}</h1>
                <h3>{e.name}</h3>
                <h3>{e.price}</h3>
                <h3>{e.inStock}</h3> 
            </div>
        ))}
    </div>
    </>
  )
}

export default Arrayofobject