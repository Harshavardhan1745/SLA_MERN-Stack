const App = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-orange-500 text-white p-5 ">
          <div className="flex justify-between items-center ml-5 mr-5">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <input type="text" placeholder="search...." className="bg-white text-black border border-0 outline-none focus:outline-none focus:ring-0  p-2 w-80 rounded-xl text-start" />
            <div>
              <button className="bg-white text-orange-400 p-2 rounded-md w-30">Login</button>
            </div>
          </div>
        </div>
      </div><br /><br />


      <div className="bg-white shadow p-10 mt-10">
        <p>I am Harshavardhan I am currently pursuing BE CSE in RVS college coimbatore and its end of my college days
          i had created lots memories in my college day and i have been enjoyed college life during college days i
          went trip with my friends like Munnar , Kodaikannal and Mysuru ,chikkamagaluru i have  an great exprience
          having fun with friends and in coimbatore i have been explored many thing. I have completed my schooling
          Elite matric school Gummidipoondi in 2021 the school memories are the unforgettable memories in my life
          because having memories like crush and having affection on some person also ture and loyal friendship in
          school life and during public exam revision time we have lots of fun with teachers and played with teachers
          having fun with friends.........! end of the we got ture friendship and lot of exprience of life </p>
      </div>


      <div className="flex flex-col gap-6 m-10 bg-white shadow-xl rounded p-5 ">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h1 className="text-2xl text-center">Register Here</h1>
          <form className="flex  flex-col w-60 gap-8">
            <input type="text" placeholder="Enter name " className="bg-white text-black border border-gray-400 outline-none focus:outline-none focus:ring-0  p-2 w-80 rounded-xl text-start" />
            <input type="number" placeholder="Enter phone number " className="bg-white text-black border border-gray-400 outline-none focus:outline-none focus:ring-0  p-2 w-80 rounded-xl text-start" />
            <input type="text" placeholder="Enter name " className="bg-white text-black border border-gray-400 outline-none focus:outline-none focus:ring-0  p-2 w-80 rounded-xl text-start" />
            <div className="flex items-center gap-6">
              <label className="flex items-center">Gender :</label>

              <div className="flex items-center gap-2">
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
              </div>

              <div className="flex items-center gap-2">
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>  
              <textarea className="bg-white text-black border border-gray-400 outline-none focus:outline-none focus:ring-0  p-2 w-80 rounded-xl text-start"></textarea>
          </form>
        </div>
      </div>
    </>
  )
}

export default App