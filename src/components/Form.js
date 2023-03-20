import { useState, useEffect } from "react";
import FormItems from "./FormItems";

const Form = ({ btnName }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setuserInput] = useState("");

  const [local, setLocal] = useState(() => {
    return JSON.parse(localStorage.getItem("array"));
  });

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(local));
  }, [local]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (userInput !== "") {
      setMessages([...messages, userInput]);
      setuserInput("");
      setLocal([...messages, userInput]);
    } else return;
  };

  const inputHandler = (e) => {
    setuserInput(e.target.value);
  };
  // TODO  remove and add in local storage !!!!!!

  // TODO Remove to-do item from list
  const removeItem = () => {};

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={userInput} onChange={inputHandler} />
        <br />
        <br />
        <button>{btnName}</button>
      </form>

      {messages.map((arr, i) => {
        return (
          <div key={i}>
            <FormItems object={arr} />
          </div>
        );
      })}

      <button onClick={removeItem}>remove</button>
    </div>
  );
};

export default Form;
