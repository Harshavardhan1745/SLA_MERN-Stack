

const Studentcard = ({name,age,course,isPlaced}) => {
  return (
    <>
    <h1>Name : {name}</h1>
    <h1>Age : {age}</h1>
    <h1>Course : {course}</h1>
    <h1>Status : {isPlaced ? "Placed" : "Not Placed"}</h1>
    </>
  )
}

export default Studentcard