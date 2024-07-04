// import { useImmerReducer } from "use-immer";
import { useReducer } from "react";
import { taskReducer } from "../reducers/taskReducers";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

import { TaskContext, TaskDispatchContext } from "../contexts/TaskContext";

const Reducer = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <div className="container mx-auto p-4 max-w-3xl text-gray-700">
          <h1 className="text-2xl font-bold text-center mb-4">My Task</h1>
          <AddTask />
          <TaskList />
        </div>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export default Reducer;

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
