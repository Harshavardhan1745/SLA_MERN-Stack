import ArrayOfObject from './components/ArrayOfObject'
import Object from './components/Object'
import Studentcard from './components/Studentcard'

const App = () => {
  
  const employee = {Name:"Harsha",Email:"harsha@gmail.com", City:"Chennai", Experience:"No"}
  const Student = [
    {Id:1, Name:"Harsha", Course:"MERN Stack"},
    {Id:2, Name:"Pooja", Course:"Networking"},
    {Id:3, Name:"Pradi", Course:"Networking"},
    {Id:4, Name:"Sam", Course:"MERN Stack"},
    {Id:5, Name:"Lokesh", Course:"MERN Stack"}
  ]
  return (
    <>
    <Studentcard 
    name="Harsha"
    age={25}
    course="FullStack"
    isPlaced={true}/>
    <hr />
    <Object employee = {employee}/>
    <hr />
    <ArrayOfObject List = {Student}/>
    </>
  )
}

export default App