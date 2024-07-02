import { useState } from "react";

export default function ProjectDetails({
  onClearTask,
  onAddTask,
  projectsState,
}) {
  const project = projectsState.projects.find(
    (project) => project.title === projectsState.selectedProject
  );

  const [taskName, setTaskName] = useState("");

  function handleClearTask(taskName) {
    onClearTask(project.title, taskName);
  }

  function handleAddNewTask() {
    onAddTask(project.title, taskName);
    setTaskName("");
  }

  function handleTaskNameChange(event) {
    setTaskName(event.target.value);
  }

  return (
    <div className="pt-16 w-2/3">
      <div className="flex justify-between">
        <h2 className=" text-3xl font-bold text-stone-600">{project.title}</h2>
        <button className="text-stone-700 hover:text-stone-950 ">Delete</button>
      </div>
      <p className="my-4 text-stone-400 text-xl">{project.dueDate}</p>
      <p className="my-6 text-stone-600 text-lg font-light">
        {project.description}
      </p>
      <hr className="h-[3px] rounded bg-stone-300" />
      <h2 className="text-2xl my-4 font-bold text-stone-700">Tasks</h2>
      <p>
        <input
          onChange={handleTaskNameChange}
          value={taskName}
          type="text"
          className="px-2 bg-stone-200 w-1/2 rounded h-8  text-stone-600 focus:outline-none"
        />
        <button
          onClick={handleAddNewTask}
          className="ml-1 px-4 text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </p>
      {project.tasks !== undefined && project.tasks.length > 0 && (
        <div className="mt-8 w-full bg-stone-100 py-8 px-4 rounded ">
          <ul className="flex flex-col gap-4 text-stone-800 text-lg">
            {project.tasks &&
              project.tasks.map((task, index) => (
                <li key={index} className="flex justify-between">
                  <p>{task.title}</p>
                  <button
                    onClick={() => handleClearTask(task.title)}
                    className="text-stone-700 hover:stroke-neutral-950 hover:text-red-500"
                  >
                    Clear
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
