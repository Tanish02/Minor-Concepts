import React, { useState } from "react";

/* Count incrase by 1 program
============================



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

//  export default App;

// //// end code
*/


/* multiple states in a single component and theme toggle and input field
============================


// // function App() {
// //   const [count, setCount] = useState(0);
// //   const [theme, setTheme] = useState("Dark");
// //   const [name, setName] = useState("");

// //   // Event Handler
// //   const handleIncrement = () => {
// //     setCount(count + 1);
// //   };

// //   const handleToggleTheme = () => {
// //     setTheme(theme === "Dark" ? "Light" : "Dark");
// //   };

// //   const handleNameChange = (e) => {
// //     setName(e.target.value);
// //   };

// //   // Dynamic styles based on theme
// //   const appStyle = {
// //     textAlign: "ceneter",
// //     marginTop: "50px",
// //     backgroundColor: theme === "Light" ? "#f9f9f9" : "#333",
// //     color: theme === "Light" ? "#000" : "#fff",
// //     height: "100vh",
// //     transition: "all 0.3s ease",
// //     padding: "20px",
// //   };

// //   // Return JSX

// //   return (
// //     <div style={appStyle}>
// //       <h1>React useState (Multiple-States)</h1>

// //       <div style={{ margin: "20px" }}>
// //         <p style={{ fontSize: "24px" }}>Count: {count}</p>
// //         <button
// //           onClick={handleIncrement}
// //           style={{
// //             fontSize: "18px",
// //             padding: "10px 20px",
// //             cursor: "pointer",
// //             borderRadius: "10px",
// //           }}
// //         >
// //           +1
// //         </button>
// //       </div>
// //       <div style={{ margin: "20px" }}>
// //         <p>Current Theme: {theme}</p>
// //         <button
// //           onClick={handleToggleTheme}
// //           style={{
// //             fontSize: "16px",
// //             padding: "8px 20px",
// //             borderRadius: "8px",
// //             cursor: "pointer",
// //           }}
// //         >
// //           🌙
// //         </button>
// //       </div>
// //       <div style={{ margin: "20px" }}>
// //         <input
// //           type="text"
// //           placeholder="Enter U'r Name"
// //           value={name}
// //           onChange={handleNameChange}
// //           style={{
// //             padding: "10px",
// //             fontSize: "16px",
// //             borderRadius: "8px",
// //             border: "1px solid #ccc",
// //             outline: "none",
// //           }}
// //         />
// //         <p style={{ fontSize: "18px", marginTop: "10px" }}>
// //           Hello, {name || "Stranger"}! 👍
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// // // end code

*/

/* useState with an Object (Profile Form)
==========================================

// function App() {
//   //single object to hold multiple state
//   const [user, setUser] = useState({
//     name: "",
//     age: "",
//     email: "",
//   });

//   // handle input change dynamically
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // update (only 1 property) while keeping other unchanged
//     setUser((prevUser) => ({
//       ...prevUser, // copy all previous value
//       [name]: value, // overwrite just changed one
//     }));
//   };

//   // Form Reset
//   const handleReset = () => {
//     setUser({
//       name: "",
//       age: "",
//       email: "",
//     });
//   };

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "40px",
//         fontFamily: "sans-serif",
//       }}
//     >
//       <h1> React useState with Object </h1>

//       // Name Field

//       <div style={{ margin: "10px" }}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter u'r Name"
//           value={user.name}
//           onChange={handleChange}
//           style={{ padding: "10px", borderRadius: "8px" }}
//         />
//       </div>

//       //Age Field
//       <div style={{ margin: "10px" }}>
//         <input
//           type="number"
//           name="age"
//           placeholder="Enter U'r Age"
//           value={user.age}
//           onChange={handleChange}
//           style={{ padding: "10px", borderRadius: "8px" }}
//         />
//       </div>

//       // Email Field
//       <div style={{ margin: "10px" }}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter U'r E-mail"
//           value={user.email}
//           onChange={handleChange}
//           style={{ padding: "10px", borderRadius: "8px" }}
//         />
//       </div>

//       //Reset Button
//       <button
//         onClick={handleReset}
//         style={{
//           margin: "20px",
//           padding: "10px 20px",
//           borderRadius: "8px",
//           cursor: "pointer",
//         }}
//       >
//         Reset
//       </button>

//       //Display user Info
//       <div
//         style={{
//           marginTop: "30px",
//           backgroundColor: "#f0f0f0",
//           padding: "20px",
//           boarderRadius: "10px",
//           display: "inline-block",
//         }}
//       >
//         <h2>User Info</h2>
//         <p>
//           <strong>Name:</strong> {user.name || "N/A"}{" "}
//         </p>
//         <p>
//           <strong>Age:</strong> {user.age || "N/A"}{" "}
//         </p>
//         <p>
//           <strong>Email:</strong> {user.email || "N/A"}{" "}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;

// // end code

*/




/* Functional updates with useState
// // Goal: Avoid stale state when updates depend on previous value.
===================================================================

//// end code 

*/
