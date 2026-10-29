const App =()=>{

  return(
    <>
     <h1>Welcome to React JS</h1>
     <Header />
     <Navbar />
    </>
  )
}

export default App

export const Header = () =>{
   return(
    <>
     <h1>My Website Header</h1>
    </>
   )
}


export const Navbar = () =>{
  return (
    <>
    <div>
      <div>
          <h1 className="bg-blue-500 text-white w-fit p-2 rounded m -5">Harsha</h1>
      </div>
    </div>

    </>
  )
}

