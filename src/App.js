import React from "react";
import "./App.css";
import User from "./User";
import users from "./users.json";

const App = () => {
  console.log(users);
  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>

      <User />
    </div>
  );
};

export default App;
