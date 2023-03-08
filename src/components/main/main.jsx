import { useState } from "react";
import "./main.css";
import Task from "./Task";
import InputTask from "./InputTask";

const Main = () => {
  const [myTodoItems, setTodoItems] = useState([]);

  const handleSubmit = (newTask) => {
    setTodoItems((prevTodoItems) => [...prevTodoItems, newTask]);
  };

  const handleEdit = (taskId, newTitle) => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.map((item) =>
        item.id === taskId ? { ...item, title: newTitle } : item
      )
    );
    console.log(myTodoItems);
  };

  return (
    <main className="main_container">
      <InputTask onSubmit={handleSubmit} />
      {myTodoItems.length > 0 && (
        <div className="flex margin column primary_container">
          {myTodoItems.map(({ title, id }) => (
            <Task key={id} title={title} handleEditSubmit={handleEdit} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Main;
