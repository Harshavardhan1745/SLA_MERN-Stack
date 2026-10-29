import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const App = () => {
  return (
    <>
      <div className="p-5 bg-gradient-to-r from-orange-500 to-white text-black m-5 rounded-lg shadow-2xl">
        <div className="flex justify-between">
          <div>
          <h1 className="text-xl font-black">1. What is React?</h1>
          <p>React is a JavaScript library used to build user interfaces, especially component-based web applications. </p>
          <h1 className="text-xl font-black">2. Why do we use React?</h1>
          <p>React is a JS libary so they make dynamic web site without the page reload entier webpage</p>
          <h1 className="text-xl font-black">3. Is React a library or framework?</h1>
          <p>The framework  will decide everything what have to  do in framework there will be some set of rules </p>
         </div>
         <div className="text-4xl mx-10">
          <FontAwesomeIcon icon={ faHeart } className="text-pink-400 text-bold animate-pulse" />  
         </div>
        </div>
      </div>
    </>
  )
}

export default App