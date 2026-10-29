

const Primitive = ({senddata ,std ,skl,stds}) => {
    

    return (
    <>
    <div className="bg-red-500 text-black p-5 text-center w-40 m-10">
        {senddata.map((e,i)=>(
            <div key={i}>
                <h1>{e.name}</h1>
                <h3>{e.role}</h3>
            </div>
        ))}
    </div>

    <div className="bg-black p-5 text-white w-40 m-10 text-center">
        <h1>{std.studentName}</h1>
        <h1>{std.age}</h1>
        <h1>{std.course}</h1>
        <h1>{std.fees}</h1>
    </div>

    <div className="bg-red-500 text-black p-5 text-center w-40 m-10">
        {skl.map((e,i)=>(
            <div key={i}>
                <h1>{e}</h1>
            </div>
        ))}
    </div>

    <div className="bg-black p-5 text-white w-40 m-10 text-center">
        <h1>{stds.name}</h1>
        <h3>{stds.age}</h3>
        <h3>{stds.course}</h3>
        <h3>{stds.city}</h3>
    </div>
    </>
  )
}

export default Primitive