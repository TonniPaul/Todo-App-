import React, { useState } from "react";

const Task = ({ title, handleEditSubmit }) => {
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
    handleEditSubmit(editedTitle);
    console.log(editedTitle);
  };

  return (
    <div className="primary_container todo_items">
      {isEditing ? (
        <form
          action=""
          className=" flex primary_container edit-form"
          onSubmit={handleSave}
        >
          <input
            type="text"
            name="editedTitle"
            id="editedTitle"
            className="todo_input"
            value={editedTitle}
            onChange={handleNewTitle}
          />
          <button className="btn pointer save-btn">Save</button>
        </form>
      ) : (
        <p className="task">{title}</p>
      )}
      {!isEditing && (
        <p className="task">
          <i className="fa-solid fa-pen pointer edit" onClick={handelEdit}></i>
        </p>
      )}
      <p className="task">
        <i className="fa-solid fa-check pointer completed"></i>
      </p>
      <p className="task">
        <i className="fa-solid fa-trash-can pointer delete"></i>
      </p>
    </div>
  );
};

export default Task;
