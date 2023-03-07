import React from "react";

const InputTask = ({ value, onChange, onSubmit }) => {
  return (
    <div>
      <form className="flex primary_container" onSubmit={onSubmit}>
        <input
          type="text"
          name="todo_item"
          id="todo_item"
          value={value}
          onChange={onChange}
          placeholder="Input Task"
          className="todo_input"
        />
        <button type="submit" className="btn pointer">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default InputTask;
