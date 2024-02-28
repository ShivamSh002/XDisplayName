import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showName, setShowName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowName(!showName);
  };

  return (
    <div>
      <h1> Full Name Display </h1>{" "}
      <form onSubmit={handleSubmit}>
        <p>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </p>{" "}
        <p>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </p>{" "}
        <button type="submit"> Submit </button>{" "}
      </form>{" "}
      {showName && (
        <p>
          Full Name: {firstName} {lastName}{" "}
        </p>
      )}{" "}
    </div>
  );
};

export default App;
