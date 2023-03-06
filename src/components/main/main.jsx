import { useState } from "react";
import "./main.css";
import { v4 as uuid } from "uuid";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [myTodoItems, setTodoItems] = useState([]);

  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title: inputValue,
    };
    setTodoItems((prevTodoItems) => [...prevTodoItems, newTodo]);
    setInputValue("");
  };

  return (
    <main className="main_container">
      <form className="flex primary_container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo_item"
          id="todo_item"
          value={inputValue}
          onChange={getInputValue}
          placeholder="Input Task"
          className="todo_input"
        />
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
      {myTodoItems.length > 0 && (
        <div className="flex margin column primary_container">
          {myTodoItems.map((todo) => (
            <div key={todo.id} className="primary_container todo_items">
              <p className="task">{todo.title}</p>
              <p className="task">
                <i className="fa-solid fa-pen pointer edit"></i>
              </p>
              <p className="task">
                <i className="fa-solid fa-check pointer completed"></i>
              </p>
              <p className="task">
                <i className="fa-solid fa-trash-can pointer delete"></i>
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Main;
