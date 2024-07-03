import { useReducer } from "react";
import { taskReducer } from "../reducers/taskReducers";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const Reducer = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  // sort tasks by done
  tasks.sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };
  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };
  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl text-gray-700">
      <h1 className="text-2xl font-bold text-center mb-4">My Task</h1>
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
