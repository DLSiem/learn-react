// src/data.js

let projects = [
  {
    id: 1,
    title: "Project 1",
    tasks: [
      { id: 1, text: "Task 1.1" },
      { id: 2, text: "Task 1.2" },
    ],
  },
  { id: 2, title: "Project 2", tasks: [{ id: 1, text: "Task 2.1" }] },
];

export const loader = () => {
  return projects;
};

export const action = async ({ request }) => {
  const data = await request.formData();
  const { type, projectId, taskId, title, text } = Object.fromEntries(data);

  switch (type) {
    case "createProject":
      projects.push({ id: projects.length + 1, title, tasks: [] });
      break;
    case "editProject": {
      const project = projects.find((p) => p.id === Number(projectId));
      if (project) project.title = title;
      break;
    }
    case "deleteProject":
      projects = projects.filter((p) => p.id !== Number(projectId));
      break;
    case "createTask": {
      const projectToAddTask = projects.find((p) => p.id === Number(projectId));
      if (projectToAddTask) {
        projectToAddTask.tasks.push({
          id: projectToAddTask.tasks.length + 1,
          text,
        });
      }
      break;
    }
    case "editTask": {
      const projectToEditTask = projects.find(
        (p) => p.id === Number(projectId)
      );
      const task = projectToEditTask.tasks.find((t) => t.id === Number(taskId));
      if (task) task.text = text;
      break;
    }
    case "deleteTask": {
      const projectToDeleteTask = projects.find(
        (p) => p.id === Number(projectId)
      );
      if (projectToDeleteTask)
        projectToDeleteTask.tasks = projectToDeleteTask.tasks.filter(
          (t) => t.id !== Number(taskId)
        );
      break;
    }
    default:
      break;
  }

  return null;
};
