// useState Hook - local state

import React, { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}
