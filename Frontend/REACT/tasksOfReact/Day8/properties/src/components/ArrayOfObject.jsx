const ArrayOfObject = ({List}) => {
    // const {Student} = List
  return (
    <>
    {List.map((Student,i)=>(
        <div key={i}>
            <h3>{Student.Id}</h3>
            <h3>{Student.Name}</h3>
            <h3>{Student.Course}</h3>
        </div>
    ))}
    </>
  )
}

export default ArrayOfObject