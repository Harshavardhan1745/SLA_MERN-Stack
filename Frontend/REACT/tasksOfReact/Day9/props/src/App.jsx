import Employee from "./components/Employee"
import StudentPage from "./components/StudentPage"
import Product from "./components/Product"
import Heros from "./components/Heros"


const App = () => {
   
    const EmployeeDetails = {
        Name : "Harsha",
        Email : "harsha@gmail.com",
        Department : "Develper"
    }

    const ProductsDetails = {
        ProductsName : "Iphone 17",
        Price : 140000,
        StockStatus : 15
    }

    const herosname = ["Ajith","Vijai","Suriya"]
  return (
    <>
    <StudentPage
     name="Harsha" age={21} course="React JS"
    />
    <Employee Employee = {EmployeeDetails}/>
    <Product Product = {ProductsDetails}/>
    <Heros Herosname = {herosname}/>
    </>
  )
}

export default App