import React, { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {name ?? ""}</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input ref={playerName} type="text" />
          <button onClick={handleSubmit}>Set Name</button>
        </p>
      </form>
    </section>
  );
}
