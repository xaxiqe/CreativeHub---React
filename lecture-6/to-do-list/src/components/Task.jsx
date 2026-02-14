import { useState } from "react";
import Button from "../shared/Button";

function Task({ index, task, deleteTask, editTask }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const changeEditMode = () => {
    if (!isEditMode) {
      setIsEditMode(true);
    }
    if (isEditMode) {
      editTask(index, editedTask);
      setIsEditMode(false);
    }
  };
  return (
    <li className="max-w-md w-full">
      <span className=" flex items-center justify-between w-full px-4 py-3 border rounded-lg text-xl text-gray-600 bg-gray-50">
        {isEditMode ? (
          <input
            className="border border-gray-500 rounded-lg px-2 py-1"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        ) : (
          task
        )}
        <div className="flex gap-2">
          <Button
            button="Delete"
            color="red"
            onClick={() => deleteTask(index)}
          />
          <Button
            button={isEditMode ? "Save" : "Edit"}
            color={isEditMode ? "gray" : "blue"}
            onClick={changeEditMode}
          />
        </div>
      </span>
    </li>
  );
}
export default Task;
