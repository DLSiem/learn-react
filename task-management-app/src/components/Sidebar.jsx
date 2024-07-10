// src/components/Sidebar.jsx
import { useState } from "react";
import { useLoaderData, useFetcher } from "react-router-dom";
import propTypes from "prop-types";

const Sidebar = ({ selectedProjectId, onSelectProject }) => {
  const projects = useLoaderData();
  const fetcher = useFetcher();
  const [newProjectTitle, setNewProjectTitle] = useState("");

  const handleAddProject = (e) => {
    e.preventDefault();
    fetcher.submit(
      { type: "createProject", title: newProjectTitle },
      { method: "post", action: "/" }
    );

    setNewProjectTitle("");
  };

  return (
    <aside className="w-64 bg-gray-200 p-4 flex flex-col space-y-4 t">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className={`cursor-pointer p-2 flex justify-between items-center rounded ${
              selectedProjectId === project.id ? "bg-gray-300" : "bg-white"
            }`}
            onClick={() => onSelectProject(project.id)}
          >
            <span>{project.title}</span>
            <div className="flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  fetcher.submit(
                    { type: "deleteProject", projectId: project.id },
                    { method: "post" }
                  );
                }}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newTitle = prompt("Edit project title:", project.title);
                  if (newTitle) {
                    fetcher.submit(
                      {
                        type: "editProject",
                        projectId: project.id,
                        title: newTitle,
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
      <form onSubmit={handleAddProject} className="">
        <input
          type="text"
          name="projectTitle"
          value={newProjectTitle}
          onChange={(e) => setNewProjectTitle(e.target.value)}
          placeholder="New Project"
          required
          className="flex-grow p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-2 w-full rounded hover:bg-blue-700"
        >
          Add Project
        </button>
      </form>
    </aside>
  );
};

Sidebar.propTypes = {
  selectedProjectId: propTypes.number,
  onSelectProject: propTypes.func.isRequired,
};

export default Sidebar;
