
const Home = () => {
   
    const arrofobj = [
        {product:"IPhone",price:125000},
        {product:"IPhone",price:125000},
        {product:"IPhone",price:125000},
        {product:"IPhone",price:125000}
    ]

  return (
    <>
    <div className="bg-gradient-to-r from-orange-500 to-white/10 p-10 flex gap-3 items-center justify-center">
            {arrofobj.map((e,i)=>(
                <div  className="bg-black/10 p-5 flex flex-col gap-4">
                    <div key={i+1}>
                        <h1>{e.product}</h1>
                        <h1>{e.price}</h1>
                    </div>
                </div>
            ))}
    </div>
    </>
  )
}

export default Home