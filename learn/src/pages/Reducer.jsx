import { useReducer } from "react";
import { taskReducer } from "../reducers/taskReducers";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const Reducer = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };
  const handleChangeTask = (text) => {
    dispatch({
      type: "changed",
      task: text,
    });
  };
  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <div>
      <h1>My Task</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Reducer;

let nextId = 3;

const initialTasks = [
  {
    id: 0,
    text: "Learn React",
    done: true,
  },
  {
    id: 1,
    text: "Learn Firebase",
    done: false,
  },
  {
    id: 2,
    text: "Learn Redux",
    done: false,
  },
];
