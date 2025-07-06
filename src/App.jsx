function App() {
  return (
    <div className="Todo-container">
      <h1>Todo App</h1>

      <div className="input-row">
        <input type="text" className="Task" placeholder="Enter the Task" />
        <input type="date" className="Date" />
        <button className="success">Add</button>
      </div>

      <div className="task-row">
        <div className="task-left">Buy milk</div>
        <div className="task-right">
          <div className="date">04/10/2023</div>
          <button className="Delete">Delete</button>
        </div>
      </div>

      <div className="task-row">
        <div className="task-left">Go to gym</div>
        <div className="task-right">
          <div className="date">04/11/2023</div>
          <button className="Delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
