// import Antigravity from "./components/Antigravity"
// import Approute from "./routesofapp/Approute"

// const App = () => {
//   return (
//     <>
    
//     <div>
//     <Antigravity/>
//     <Approute/>
//     </div>
//     </>
//   )
// }

// export default App

import DarkVeil from "./components/DarkVeil";
import Approute from "./routesofapp/Approute";

function App() {
  return (
    <div className="relative min-h-screen bg-[#120F17]">

      <DarkVeil
        count={1500}
        colorMode="radial"
        colors={["#A855F7", "#EC4899"]}
        particleSize={2}
        autoAnimate={true}
        interactive={true}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />


      <Approute/>
    </div>
  );
}

export default App;