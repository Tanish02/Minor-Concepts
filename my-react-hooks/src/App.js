import React, { useState } from "react";

// count incrase by 1 program

function App() {
  const [count, setCount] = useState(0);
  //inital value 0

  // function to update the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React useState</h1>
      <p style={{ fontSize: "24" }}>count: {count}</p>
      <button
        onClick={handleIncrement}
        style={{
          fontSize: "18px",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "10px",
        }}
      >
        +1
      </button>
    </div>
  );
}

export default App;

// end code
