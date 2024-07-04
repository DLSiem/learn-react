import { useState, useContext } from "react";
import { TaskDispatchContext } from "../contexts/TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);

  return (
    <div className="mb-4">
      <form className="flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded w-full mr-2 font-semibold"
          placeholder="Add Task"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setText("");
            dispatch({
              type: "added",
              id: nextId++,
              text: text,
            });
          }}
          disabled={!text.trim()}
          className={`bg-blue-500 text-white p-2 whitespace-nowrap rounded font-semibold hover:bg-blue-700 ${
            !text.trim() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

let nextId = 3;
