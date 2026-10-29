import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Latest Count:", count);
  }, [count]);

  return (
    <div className="p-10">
      <h2 className="p-5">Count: {count}</h2>
      <button className="bg-blue-500 text-white p-2 rounded shadow " onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;