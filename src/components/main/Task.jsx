import React from "react";

const Task = ({ title }) => {
  return (
    <div className="primary_container todo_items">
      <p className="task">{title}</p>
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
  );
};

export default Task;
