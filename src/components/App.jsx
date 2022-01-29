import React from "react";
import Login from "./Login";

let isLoggedIn = null;

function App() {
  return <div className="container">{
    <Login loggedIn={isLoggedIn}/>
  }</div>;
}

export default App;
