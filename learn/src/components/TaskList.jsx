import propTypes from "prop-types";
import { useState, useContext } from "react";
import { TaskContext, TaskDispatchContext } from "../contexts/TaskContext";

const TaskList = () => {
  const tasks = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <p className="text-center font-bold font-gray-500">No Task Available</p>
    );
  }
  return (
    <ul className="space-y-2 text-gray-700 font-semibold">
      {tasks.map((task) => (
        <li key={task.id} className="bg-white p-2 rounded shadow">
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

// TaskList.propTypes = {
//   tasks: propTypes.array.isRequired,
//   onChangeTask: propTypes.func.isRequired,
//   onDeleteTask: propTypes.func.isRequired,
// };

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TaskDispatchContext);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            e.preventDefault();
            dispatch({
              type: "changed",
              task: { ...task, text: e.target.value },
            });
          }}
          className="border p-1 rounded flex-1 font-semibold"
        />
        <button
          disabled={!task.text.trim()}
          onClick={() => setIsEditing(false)}
          className={`ml-2 bg-blue-500 text-white p-1 rounded hover:bg-blue-700 ${
            !task.text.trim() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Save
        </button>
        {/* </form> */}
      </>
    );
  } else {
    taskContent = (
      <>
        <span className={`${task.done ? "line-through" : ""} flex-1`}>
          {task.text}
        </span>
        <button
          onClick={() => setIsEditing(true)}
          className="ml-2 bg-yellow-500 text-white p-1 rounded hover:bg-yellow-700"
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: !task.done,
            },
          });
        }}
        className="mr-2 custom-checkbox"
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
        className="bg-red-500 text-white p-1 rounded hover:bg-red-700 ml-2"
      >
        Delete
      </button>
    </div>
  );
};
Task.propTypes = {
  task: propTypes.object.isRequired,
  // onChange: propTypes.func.isRequired,
  // onDelete: propTypes.func.isRequired,
};
