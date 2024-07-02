import Button from "./Button";

export default function ProjectSidebar({
  onProjectClicked,
  onNewProjectClicked,
  projects,
}) {
  return (
    <aside className="rounded-r-xl h-full w-1/3 bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 md:text-xl font-bold uppercase text-stone-200">
        Your Projects
      </h2>
      <div className="">
        <Button onClick={onNewProjectClicked}>+ Add Project</Button>
      </div>
      <ul className="mt-8 ">
        {projects.projects.map((project) => {
          return (
            <li key={project.id}>
              <button
                onClick={() => onProjectClicked(project.title)}
                className={
                  project.title !== projects.selectedProject
                    ? "w-full text-left text-stone-400 py-1 pl-2 my-1  rounded hover:bg-stone-700 hover:text-stone-200"
                    : "w-full text-left py-1 pl-2 my-1  rounded bg-stone-700 text-stone-200"
                }
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
