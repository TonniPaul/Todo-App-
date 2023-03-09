import React, { useState } from "react";

const Task = ({ title, handleEditSubmit, taskId }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handelEdit = () => {
    setEditing(true);
  };

  const handleNewTitle = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditing(false);
    handleEditSubmit(taskId, editedTitle);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedTitle(title);
  };

  return (
    <div className="primary_container todo_items">
      <form
        action=""
        className=" flex primary_container edit-form"
        onSubmit={handleSave}
      >
        <div className="edit-input-container">
          <input
            type="text"
            name="editedTitle"
            id="editedTitle"
            className="todo_input edit-input"
            value={isEditing ? editedTitle : title}
            onChange={handleNewTitle}
            disabled={isEditing ? false : true}
          />
          {isEditing && (
            <div className="flex edit-input-btn">
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
        <p className="task">
          <i className="fa-solid fa-pen pointer edit" onClick={handelEdit}></i>
        </p>
      )}
      <p className="task">
        <i className="fa-solid fa-check pointer green"></i>
      </p>
      <p className="task">
        <i className="fa-solid fa-trash-can pointer red"></i>
      </p>
    </div>
  );
};

export default Task;
