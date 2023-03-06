import "./main.css";

const Main = () => {
  return (
    <main className="main_container">
      <form className="flex add_todo_cont">
        <input
          type="text"
          name="todo_item"
          id="todo_item"
          placeholder="Your todo goes here"
          className="todo_input"
        />
        <input type="button" value="Add Todo" className="btn" />
      </form>
      <div className="flex add_todo_cont todo_items">
        <div className="add_todo_cont todo_items">
          <div> Complete my task </div>
          <div>
            <i className="fa-solid fa-check pointer completed"></i>
          </div>
          <div>
            <i className="fa-solid fa-trash-can pointer delete"></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
