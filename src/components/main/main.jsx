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
  };

  const handleDelete = (taskId) => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.filter((item) => item.id !== taskId)
    );
  };


const handleComplete = (taskId, isComplete) => {
  setTodoItems((prevTodoItems) => {
    return prevTodoItems.map((item) =>
      item.id === taskId ? { ...item, completed: isComplete } : item
    );
  });
};

return (
  <main className="main_container">
    <InputTask onSubmit={handleSubmit} />
    {myTodoItems.length > 0 && (
      <div className="flex margin column primary_container">
        {myTodoItems.map(({ title, id }) => (
          <Task
            key={id}
            taskId={id}
            title={title}
            handleEditSubmit={handleEdit}
            handleDeletedTask={handleDelete}
            handleCompletionToggle={handleComplete}
          />
        ))}
      </div>
    )}
  </main>
);
};

export default Main;
