import './App.css';
import Button from "./Button";
import React from "react";

function App() {
  const buttons = [
    { id: 1, text: "Hello", disabled: false },
    { id: 2, text: "world", disabled: false },
    { id: 3, text: "Button1", disabled: true, endIcon: true },
    { id: 4, text: "Button1", disabled: false, endIcon: true, startIcon: true },
    { id: 5, text: "Button1", disabled: false, hidden: true },
    { id: 6, text: "Button1", disabled: false }
  ]

  return (
    <>
      <h1>Gombok:</h1>
      {buttons.map(b => <Button {...b} key={b.id}></Button>)}
      <Button>Teszt children</Button>
    </>);
}

export default App;
