import "./main.css";

const Main = () => {
  return (
    <main className="main_container">
      <form className="flex primary_container">
        <input
          type="text"
          name="todo_item"
          id="todo_item"
          placeholder="Your todo goes here"
          className="todo_input"
        />
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>

      <div className="flex margin-top primary_container">
        <div className="primary_container todo_items">
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
