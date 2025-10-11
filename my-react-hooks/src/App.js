import React, { useState } from "react";

// count incrase by 1 program

// function App() {
//   const [count, setCount] = useState(0);
//   //inital value 0

//   // function to update the count
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>React useState</h1>
//       <p style={{ fontSize: "24" }}>count: {count}</p>
//       <button
//         onClick={handleIncrement}
//         style={{
//           fontSize: "18px",
//           padding: "10px 20px",
//           cursor: "pointer",
//           borderRadius: "10px",
//         }}
//       >
//         +1
//       </button>
//     </div>
//   );
// }

// export default App;

// // end code

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("Dark");
  const [name, setName] = useState("Tanish");

  // Event Handler
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleToggleTheme = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Dynamic styles based on theme
  const appStyle = {
    textAlign: "ceneter",
    marginTop: "50px",
    backgroundColor: theme === "Light" ? "#f9f9f9" : "#333",
    color: theme === "Light" ? "#000" : "#fff",
    height: "100vh",
    transition: "all 0.3s ease",
    padding: "20px",
  };

  // Return JSX

  return (
    <div style={appStyle}>
      <h1>React useState (Multiple-States)</h1>

      <div style={{ margin: "20px" }}>
        <p style={{ fontSize: "24px" }}>Count: {count}</p>
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
      <div style={{ margin: "20px" }}>
        <p>Current Theme: {theme}</p>
        <button
          onClick={handleToggleTheme}
          style={{
            fontSize: "16px",
            padding: "8px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Theme
        </button>
      </div>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          placeholder="Enter U'r Name"
          value={name}
          onChange={handleNameChange}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Hello, {name || "Stranger"}! 👍
        </p>
      </div>
    </div>
  );
}

export default App;

// end code
