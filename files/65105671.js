import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [serverData, setServerData] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setServerData(serverData.concat({ name: name, number: number }));
    setName("");
    setNumber("");
    console.log(serverData);
  };

  const sendToServer = () => {
    console.log("server ko post request with following data...");
    console.log(serverData);
    setName("");
    setNumber("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <input value={number} onChange={e => setNumber(e.target.value)} />
        <button>add data</button>
      </form>
      <button onClick={sendToServer}>Submit to server</button>
    </div>
  );
}

