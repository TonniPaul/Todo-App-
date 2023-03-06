import { useState } from "react";
import "./main.css";

const Main = () => {
  const [inputValue, setInputValue] = useState();

  const getInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleInput = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <main className="main_container">
      <form className="flex primary_cont" onSubmit={handleInput}>
        <input
          type="text"
          name="todo_item"
          id="todo_item"
          value={inputValue}
          onChange={getInput}
          placeholder="Your todo goes here"
          className="todo_input"
        />
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>

      <div className="flex margin-top primary_cont">
        <div className="primary_cont todo_items">
          <div> {inputValue} </div>
          <div>
            <i className="fa-solid fa-check pointer completed"></i>
          </div>
          <div>
            <i className="fa-solid fa-trash-can pointer delete"></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
