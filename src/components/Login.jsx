import React, { useState } from "react";
import Input from "./Input";
import Heading from "./Heading";

function Login(props) {

  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  const [buttonText, setButtonText] = useState("Привітатись")
  // const [bool, setBool] = useState(props.loggedIn)

  function changeButtonColorOver() {
    setMouseOver(true);
  }

  function changeButtonColorOut() {
    setMouseOver(false);
  }

  function handleNameChange(event) {
    setName(event.target.value);
    setHeading(name);
  }

  function handleClick(event) {
    setHeading(name);
    setButtonText(heading);
    event.preventDefault();
  }

  // function changeBool() {
  //   setBool(true)
  //   props.loggedIn = bool
  // }

  if (props.loggedIn===true) {
    return <Heading heading="Вже бачились," typedName={heading} />
    } else if (props.loggedIn===false) {
      return <Heading heading="Привіт," typedName={heading} />
    } else {
      return (
        <form className="form">
          <Heading heading="Привіт, давай знайомитись" />
          <br />
          <Input placeholder="Ім'я" onChange={handleNameChange} value={name}/>

          <button
            onMouseOver={changeButtonColorOver}
            onMouseOut={changeButtonColorOut}
            style={{backgroundColor : isMouseOver && "black"}}
            type="submit"
            // type="button"
            onClick={handleClick}>{buttonText}</button>
        </form>
      )
    }
}
// <Input placeholder="Прізвище" />
// Привітатись
// onSubmit={handleClick}
// onChange={handleChange}
// {buttonText}
 // onSubmit={changeBool}
export default Login;
