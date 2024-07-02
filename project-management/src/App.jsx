import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleAddTask(projectTitle, taskTitle) {
    setProjectState((prevProjectsState) => {
      const updatedProjects = prevProjectsState.projects.map((project) => {
        if (project.title === projectTitle) {
          return {
            ...project,
            tasks: [...(project.tasks || []), { title: taskTitle }],
          };
        }
        return project;
      });
      return {
        ...prevProjectsState,
        projects: updatedProjects,
      };
    });
  }

  function handleNewProjectClicked() {
    setProjectState((prevProjectsState) => {
      return { ...prevProjectsState, selectedProject: null };
    });
  }

  function handleProjectClicked(title) {
    const project = projectsState.projects.find(
      (project) => project.title === title
    );
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProject: project.title,
      };
    });
  }

  function handleCancel() {
    setProjectState((prevProjectsState) => {
      return { ...prevProjectsState, selectedProject: undefined };
    });
  }

  function handleNewProjectCreation(title, description, dueDate) {
    setProjectState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        projects: [
          ...prevProjectsState.projects,
          {
            id: Date.now(),
            title: title,
            description: description,
            dueDate: dueDate,
          },
        ],
        selectedProject: undefined,
      };
    });
  }

  function handleClearTask(projectTitle, taskTitle) {
    setProjectState((prevProjectsState) => {
      const updatedProjects = prevProjectsState.projects.map((project) => {
        if (project.title === projectTitle) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.title !== taskTitle),
          };
        }
        return project;
      });
      return {
        ...prevProjectsState,
        projects: updatedProjects,
      };
    });
  }

  return (
    <main className="flex gap-8 h-screen my-8">
      <ProjectSidebar
        onProjectClicked={handleProjectClicked}
        projects={projectsState}
        onNewProjectClicked={handleNewProjectClicked}
      />
      {projectsState.selectedProject === null && (
        <NewProject
          onCancel={handleCancel}
          onNewProjectCreation={handleNewProjectCreation}
        />
      )}
      {projectsState.selectedProject === undefined && (
        <NoProjectSelected onNewProjectClicked={handleNewProjectClicked} />
      )}
      {projectsState.selectedProject !== null &&
        projectsState.selectedProject !== undefined && (
          <ProjectDetails
            projectsState={projectsState}
            onAddTask={handleAddTask}
            onClearTask={handleClearTask}
          ></ProjectDetails>
        )}
    </main>
  );
}

export default App;
