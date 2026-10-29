import { useState } from "react"


const Togglelist = () => {

    const [show,setShow] = useState(false)

    const toggle = () => {
        setShow((prev)=>!prev)
    }

    return (
    <>
    <div className="bg-red-500 p-5 text-white font-black mt-5">
        <button onClick={toggle} className="bg-black/25 py-2 px-4 rounded shadow-lg">
          Show Details
        </button>

        <div className="mt-4">
            {show ? (
            <div className="flex flex-col gap-5">
              <h1 className="bg-black/25 py-2 px-4 w-fit rounded-lg shadow-lg">Student Details</h1>
              <p className="bg-black/25 py-2 px-4 w-fit rounded-lg shadow-lg">Name: Harsha</p>
              <p className="bg-black/25 py-2 px-4 w-fit rounded-lg shadow-lg">Age: 21</p>
              <p className="bg-black/25 py-2 px-4 w-fit rounded-lg shadow-lg">Course: MERN</p>
            </div>
            ) : null}
          </div>
    </div>
    </>
  )
}

export default Togglelist