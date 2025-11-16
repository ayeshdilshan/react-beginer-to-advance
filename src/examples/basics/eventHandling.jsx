import { useState } from "react";

function ClickEventsHandling() {
  const [message, setMessage] = useState("Hello");
  const [name, setName] = useState("");

  const handleClick = () => {
    setMessage("Hello Ayesh welcome to the react world!");
  };
  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>

      <h2>Input</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello , {name}</p>
    </div>
  );
}

export default ClickEventsHandling;
