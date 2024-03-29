import React, {  useRef, useState } from "react";

const Task = ({ title, taskId, setMyTodoItems,myTodoItems, completed }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const inputFocus = useRef();

  const handleEdit = () => {
    setEditing(true);
    inputFocus.current.focus();
  };

  const handleNewTitle = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditing(false);
    setMyTodoItems((prev) => {
      const updatedItems = prev.map((item) =>
        item.id === taskId ? { ...item, title: editedTitle } : item
      );
      return updatedItems;
    });
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedTitle(title);
  };

  const handleDelete = () => {
    setMyTodoItems((prev) => {
      const updatedItems = prev.filter((item) => item.id !== taskId);
      return updatedItems;
    });
  };

  const handleCompletedTask = () => {
    setMyTodoItems((prev) => {
      const updatedItems = prev.map((item) =>
        item.id === taskId ? { ...item, completed: !completed } : item
      );
      return updatedItems;
    });
  };

  return (
    <div className="primary_container todo_items">
      <form className=" flex primary_container edit-form" onSubmit={handleSave}>
        <div className="edit-input-container">
          <input
            type="text"
            name="editedTitle"
            id="editedTitle"
            className={`todo_input edit-input ${
              completed && "completed-task"
            }`}
            value={isEditing ? editedTitle : title}
            onChange={handleNewTitle}
            readOnly={!isEditing}
            ref={inputFocus}
          />
          {isEditing && !completed && (
            <div className="flex action-btn">
              <button className="pointer save-btn">
                <i className="fa-solid fa-floppy-disk pointer green"></i>
              </button>
              <button className="pointer cancel-btn" onClick={handleCancel}>
                <i className="fa-solid fa-x red"></i>
              </button>
            </div>
          )}
        </div>
      </form>
      {!isEditing && (
        <div className="flex action-btn">
          {!completed && (
            <button className="task" onClick={handleEdit}>
              <i className="fa-solid fa-pen pointer edit"></i>
            </button>
          )}
          <button className="task" onClick={handleCompletedTask}>
            {!completed ? (
              <i className="fa-solid fa-check pointer green"></i>
            ) : (
              <i className="fa-solid fa-arrows-rotate pointer green"></i>
            )}
          </button>
          {!completed && (
            <button className="task" onClick={handleDelete}>
              <i className="fa-solid fa-trash-can pointer red"></i>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
