import { useState } from "react";
import propTypes from "prop-types";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border"
        placeholder="Add Task"
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add Task
      </button>
    </div>
  );
}

AddTask.propTypes = {
  onAddTask: propTypes.func.isRequired,
};
