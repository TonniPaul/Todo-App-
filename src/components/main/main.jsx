import { useEffect, useState } from "react";
import "./main.css";
import Task from "./Task";
import InputTask from "./InputTask";

const getData = () => {
  const savedTodoItems = JSON.parse(localStorage.getItem("myTodoItems"));
  return savedTodoItems ? savedTodoItems : [];
};

const Main = () => {
  const [myTodoItems, setMyTodoItems] = useState(() => getData());

  const handleSubmit = (newTask) => {
    setMyTodoItems((prevTodoItems) => [...prevTodoItems, newTask]);
    localStorage.setItem(
      "myTodoItems",
      JSON.stringify([...myTodoItems, newTask])
    );
  };

  useEffect(() => {
    localStorage.setItem("myTodoItems", JSON.stringify(myTodoItems));
  }, [myTodoItems]);

  return (
    <main className="main_container">
      <InputTask onSubmit={handleSubmit} />
      {myTodoItems.length > 0 && (
        <div className="flex margin column primary_container">
          {myTodoItems.map(({ title, id, completed }) => (
            <Task
              key={id}
              title={title}
              taskId={id}
              setMyTodoItems={setMyTodoItems}
              completed={completed}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Main;
