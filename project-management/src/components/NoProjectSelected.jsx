import logo from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onNewProjectClicked }) {
  return (
    <div className="flex flex-col w-2/3 mt-24 items-center">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={logo}
        alt="logo"
      />
      <h2 className="my-4 font-bold text-xl text-stone-500">No project selected</h2>
      <p className="mb-4 text-stone-400">Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button onClick={onNewProjectClicked}>Create new Project</Button>
      </p>
    </div>
  );
}
