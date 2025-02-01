import "./App.css";
import React from "react";

const App = () => {
  const x = {
    name: "shady",
  };
  return (
    <div>
      <img src="./wired-uk-google-watching.webp" alt="google imageX" />
      <p>Hello this is my value of x : {x.name}</p>
    </div>
  );
};

export default App;
