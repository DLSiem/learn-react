// src/components/ProjectDetails.jsx
import { useState } from "react";
import { useLoaderData, useFetcher } from "react-router-dom";
import propTypes from "prop-types";

const ProjectDetails = ({ selectedProjectId }) => {
  const projects = useLoaderData();
  const project = projects.find((p) => p.id === selectedProjectId);
  const fetcher = useFetcher();
  const [newTaskText, setNewTaskText] = useState("");

  if (!project) return <div>Select a project to view details</div>;

  const handleAddTask = (e) => {
    e.preventDefault();
    fetcher.submit(
      { type: "createTask", projectId: project.id, text: newTaskText },
      { method: "post", action: "/" }
    );
    setNewTaskText("");
  };

  return (
    <div className="flex-1 md:mx-10  p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <form onSubmit={handleAddTask} className="mt-4 flex space-x-2 mb-2">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="New Task"
          required
          className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2 max-h-80 overflow-y-auto">
        {project.tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded shadow"
          >
            <span>{task.text}</span>
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  fetcher.submit(
                    {
                      type: "deleteTask",
                      projectId: project.id,
                      taskId: task.id,
                    },
                    { method: "post" }
                  )
                }
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  const newText = prompt("Edit task text:", task.text);
                  if (newText) {
                    fetcher.submit(
                      {
                        type: "editTask",
                        projectId: project.id,
                        taskId: task.id,
                        text: newText,
                      },
                      { method: "post" }
                    );
                  }
                }}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;

ProjectDetails.propTypes = {
  selectedProjectId: propTypes.number,
};
