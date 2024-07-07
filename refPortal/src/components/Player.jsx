import React, { useState } from "react";

export default function Player() {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setSubmit(false);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <section id="player">
      <h2>Welcome {submit ? name : ""}</h2>
      <p>
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={handleChange} type="text" />
          <button>Set Name</button>
        </form>
      </p>
    </section>
  );
}
