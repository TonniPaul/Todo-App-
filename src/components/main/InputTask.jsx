import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const InputTask = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      title: inputValue,
    };
    onSubmit(newTask);
    setInputValue("");
  };

  return (
    <div>
      <form className="flex primary_container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo_item"
          id="todo_item"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Input Task"
          className="todo_input"
        />
        <button className="btn pointer">Add Task</button>
      </form>
    </div>
  );
};

export default InputTask;
