const Object = (props) => {
    const {employee} = props.employee
    return (
    <>
    <h1>Name : {props.employee.Name}</h1>
    <h1>Email : {props.employee.Email}</h1>
    <h1>City : {props.employee.City}</h1>
    <h1>Experience : {props.employee.Experience}</h1>
    </>
  )
}

export default Object