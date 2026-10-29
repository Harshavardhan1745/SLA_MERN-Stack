import { useState } from "react"

const Product = () => {

    const [product,setProduct] = useState({productName:"",productQuantity:"",productPrice:""})

    const [prosave,setProsave] = useState([])

    const [handleEdits,setHandleEdits] = useState(null) 

    const handlechange = (e) => {
        setProduct((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleAdd = () => {
        setProsave((pre)=>([...pre,product]))
        setProduct({productName:"",productQuantity:"",productPrice:""})
    }

    const handletoEdit = (data) => {
        setProduct({productName:data.productName,
            productQuantity:data.productQuantity,
            productPrice:data.productPrice
        })
    }

    const handletoDelete = (datas) => {
        const copy = [...prosave]
        const deletedata = copy.filter((e,i)=>i!==datas)
        setProsave(deletedata)
    } 


  return (
    <>
    <div>
        <form>
            <input type="text" placeholder="Enter product name" value={product.productName} name="productName" onChange={handlechange}/>
            <input type="text" placeholder="Enter product quantity" value={product.productQuantity} name="productQuantity" onChange={handlechange}/>
            <input type="text" placeholder="Enter product price" value={product.productPrice} name="productPrice" onChange={handlechange}/>
        </form> 
        <button onClick={handleAdd}>Update</button>
    </div>
    <div>
        {prosave.map((e,i)=>(
            <div key={i+1}>
                <h1>{e.productName}</h1>
                <h1>{e.productQuantity}</h1>
                <h1>{e.productPrice}</h1>
                <button onClick={()=>handletoEdit(e)}>Edit</button>
                <button onClick={()=>handletoDelete(i)}>Delete</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default Product