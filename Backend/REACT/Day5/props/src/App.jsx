import Primitive from "./components/Primitive"

const arrofobj = [
  {name:"Thala Ajith",role:"Racer"},
  {name:"Cm Vijay", role:"CM"},
  {name:"SK",role:"Actor"}
] 

const studentName = "Arun"
const age = 22
const course = "React"
const fees = 15000
 
const obj = {studentName,age,course,fees}

const skills = ["HTML", "CSS", "JavaScript", "React", "Node"]

const student = {

    name: "Priya",

    age: 21,

    course: "MERN Stack",

    city: "Chennai"

}

const App = () => {
  return (
    <>
    
    <Primitive senddata = {arrofobj} std = {obj} skl = {skills} stds={student}/>
    </>
  )
}

export default App