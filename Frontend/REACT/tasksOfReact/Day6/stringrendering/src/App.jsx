const App = () => {
  const course = "react"

  const price = 50000
  const discount = 5000

  const islogin = true

  const profileImage = null

  const email = undefined

  function getCompanyName() {
    return "Google"
  }

  const arr = ["Ajith", "Vijay", "Suriya", "SK", "Dhanush"]

  const obj = { name: "Harsha", course: "MERN Stack", Experience: "no" }

  const arrobj = [{ name: "Harsha", course: "MERN Stack", Experience: "no" },
  { name: "Pooja", course: "Networking", Experience: "no" },
  { name: "Sam", course: "MERN Stack", Experience: "no" }
  ]
  return (
    <>
      <h1>{course}</h1>
      <p>{price}</p>
      <p>{discount}</p>
      <h1>{islogin ? <p>Welcome User</p> : <p>Please Login</p>}</h1>

      <div>
        {profileImage ? <img src={profileImage} alt="loading" /> : <h1>No image found </h1>}
      </div>

      <h1>{email ? <h1>{email}</h1> : <h1>Email not available</h1>}</h1>

      <h1>{getCompanyName()}</h1>


      {arr.map((e, i) => (
        <div key={i + 1}>
          <h1>{e}</h1>
        </div>
      ))}

      <h1>{obj.name}</h1>
      <h2>{obj.course}</h2>
      <h2>{obj.Experience}</h2>

      {arrobj.map((e,i)=>(
        <div key={i+1}>
          <h1>{e.name}</h1>
          <h2>{e.course}</h2>
          <h2>{e.Experience}</h2>
        </div>
      ))}
    </>
  )
}

export default App