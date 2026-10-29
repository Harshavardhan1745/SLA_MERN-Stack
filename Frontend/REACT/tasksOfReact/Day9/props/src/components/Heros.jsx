const Heros = ({Herosname}) => {
  return (
    <>
    {Herosname.map((e,i)=>(
        <h1 key={i+1}>{e}</h1>
    ))}
    </>
  )
}

export default Heros