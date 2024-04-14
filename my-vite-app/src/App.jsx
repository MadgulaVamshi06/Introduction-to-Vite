import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // function to create task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskInput, completed: false },
      ]);
      console.log(tasks);
      setTaskInput("");
    }
  };

  // function to mark as complete
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to remove a task
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Todo Application</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter The Task Title"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Task Title</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <th scope="row">{index + 1}</th>
              <td
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </td>

              <td>
                <button
                  type="button"
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="btn btn-success"
                >
                  {task.completed ? "Completed" : "Mark As Complete"}
                </button>
              </td>

              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
