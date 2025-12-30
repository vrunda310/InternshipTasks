// UsernameForm.jsx
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function LocalStorageDemo() {
  const [username, setUsername] = useLocalStorage("username", "Guest");
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
    setInput("");
  };

  return (
    <div>
      <h3>LocalStorage Hook Example</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      <p>Saved Username: {username}</p>
    </div>
  );
}
