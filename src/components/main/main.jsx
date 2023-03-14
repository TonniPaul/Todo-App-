import { useEffect, useState } from "react";
import "./main.css";
import Task from "./Task";
import InputTask from "./InputTask";

const Main = () => {
  const [myTodoItems, setMyTodoItems] = useState([]);

  const handleSubmit = (newTask) => {
    setMyTodoItems((prevTodoItems) => [...prevTodoItems, newTask]);
    localStorage.setItem(
      "myTodoItems",
      JSON.stringify([...myTodoItems, newTask])
    );
  };

  useEffect(() => {
    const savedTodoItems = JSON.parse(localStorage.getItem("myTodoItems"));
    if (savedTodoItems) {
      setMyTodoItems(savedTodoItems);
    }
  }, []);

  return (
    <main className="main_container">
      <InputTask onSubmit={handleSubmit} />
      {myTodoItems.length > 0 && (
        <div className="flex margin column primary_container">
          {myTodoItems.map(({ title, id }) => (
            <Task
              key={id}
              title={title}
              taskId={id}
              setMyTodoItems={setMyTodoItems}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Main;
