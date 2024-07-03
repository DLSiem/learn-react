import propTypes from "prop-types";
import { useState } from "react";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

TaskList.propTypes = {
  tasks: propTypes.array.isRequired,
  onChangeTask: propTypes.func.isRequired,
  onDeleteTask: propTypes.func.isRequired,
};

const Task = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => onChange({ ...task, text: e.target.value })}
        />
        <button onClick={() => setIsEditing(false)}>save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label htmlFor="">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => onChange({ ...task, done: e.target.checked })}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
};

Task.propTypes = {
  task: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
