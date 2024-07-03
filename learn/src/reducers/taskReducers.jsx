export function taskReducer(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        text: action.text,
        completed: false,
      });
      break;
    }
    case "deleted": {
      return draft.filter((t) => t.id !== action.id);
    }
    case "changed": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    default: {
      throw Error("Unknown action : " + action.type);
    }
  }
}
