import React, { useRef, useState } from "react";

const Task = ({
  title,
  handleEditSubmit,
  taskId,
  handleDeletedTask,
  handleCompletionToggle,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [isComplete, setComplete] = useState(false);

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
    handleEditSubmit(taskId, editedTitle);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedTitle(title);
  };

  const handleDelete = () => {
    handleDeletedTask(taskId);
  };

  const handleCompletedTask = () => {
    setComplete(!isComplete);
    handleCompletionToggle(taskId, isComplete);
  };

  return (
    <div className="primary_container todo_items">
      <form className=" flex primary_container edit-form" onSubmit={handleSave}>
        <div className="edit-input-container">
          <input
            type="text"
            name="editedTitle"
            id="editedTitle"
            className="todo_input edit-input"
            value={isEditing ? editedTitle : title}
            onChange={handleNewTitle}
            readOnly={!isEditing}
            ref={inputFocus}
            style={{
              textDecoration: isComplete && !isEditing && "line-through",
              color: isComplete && !isEditing && "#ccc",
              fontStyle: isComplete && !isEditing && "italic",
            }}
          />
          {isEditing && (
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
          <button className="task" onClick={handleEdit}>
            <i className="fa-solid fa-pen pointer edit"></i>
          </button>
          <button className="task" onClick={handleCompletedTask}>
            {!isComplete ? (
              <i className="fa-solid fa-check pointer green"></i>
            ) : (
              <i className="fa-solid fa-arrows-rotate pointer green"></i>
            )}
          </button>
          <button className="task" onClick={handleDelete}>
            <i className="fa-solid fa-trash-can pointer red"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
