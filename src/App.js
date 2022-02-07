import "./styles.css";
import { useState } from "react";
import Todo from "./todo";

export default function App() {
  const addValue = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { task: value, id: Math.floor(Math.random() * 99999) }
    ]);
    setValue("");
  };

  const deleteValue = (taskID) => {
    setTasks(tasks.filter((task) => task.id !== taskID));
  };

  const [value, setValue] = useState([]);
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h1>Justin's TODO App</h1>

      <form onSubmit={addValue}>
        <input
          className="todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button> Add </button>
      </form>

      {tasks.map((task) => (
        <Todo task={task} key={task.id} deleteValue={deleteValue} />
      ))}
    </div>
  );
}
