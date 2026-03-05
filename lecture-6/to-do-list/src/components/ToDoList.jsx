import { useState } from "react";
import Button from "../shared/Button";
import Task from "./Task";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Learn to Code",
    "Go to work",
    "Go to ski",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    setTasks((task) => [...task, newTask]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((_, index) => id !== index));
  };
  const editTask = (idx, newValue) => {
    setTasks(
      tasks.map((task, index) => {
        if (index == idx) return newValue;
        return task;
      }),
    );
  };

  return (
    <div className="container mt-20">
      <h1 className="text-4xl font-semibold text-blue-700 text-center mb-5">
        To-do List
      </h1>
      <div className="flex justify-center items-center gap-5">
        <input
          type="text"
          value={newTask}
          onChange={handleInput}
          placeholder="Enter a task.."
          className="px-10 py-3 bg-gray-200 w-80 h-10 text-center text-2xl rounded-lg  "
        />
        <Button button="Add a Task" color="blue" onClick={addTask} />
      </div>
      <ul className="flex flex-col mt-5 items-center gap-3">
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="mt-6 text-gray-500 text-2xl text-center">No tasks yet.</p>
      )}
    </div>
  );
}
export default ToDoList;
