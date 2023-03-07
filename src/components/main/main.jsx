import { useState } from "react";
import "./main.css";
import { v4 as uuid } from "uuid";
import Task from "./Task";
import InputTask from "./InputTask";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [myTodoItems, setTodoItems] = useState([]);

  const newTAsk = (e) => {
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
      <InputTask
        value={inputValue}
        onChange={newTAsk}
        onSubmit={handleSubmit}
      />
      {myTodoItems.length > 0 && (
        <div className="flex margin column primary_container">
          {myTodoItems.map((todo) => (
            <Task key={todo.id} {...todo} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Main;
