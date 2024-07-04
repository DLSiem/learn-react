export function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: tasks.length,
          text: action.text,
          done: false,
        },
      ];
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });
    }
    default: {
      throw Error("Unknown action : " + action.type);
    }
  }
}
