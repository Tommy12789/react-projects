import { useState } from "react";
import Input from "./Input";

export default function NewProject({ onCancel, onNewProjectCreation }) {
  const [newProjectInfos, setNewProjectInfos] = useState({ title: "", description: "", dueDate: "" });

  function handleNewProjectInfosChange(field, event) {
    setNewProjectInfos((prevNewProjectInfos) => {
      return {
        ...prevNewProjectInfos,
        [field]: event.target.value,
      };
    });
  }

  function handleProjectCreation() {
    onNewProjectCreation(newProjectInfos.title, newProjectInfos.description, newProjectInfos.dueDate);
  }

  return (
    <div className="mt-16  w-[35rem]">
      <menu className="flex items-center gap-4 my-4 justify-end">
        <li>
          <button
            onClick={onCancel}
            className="text-stone-800 hover:text-stone-950 rounded">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleProjectCreation}
            className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950 hover:text-stone-100">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input
          onChange={handleNewProjectInfosChange}
          label="title"
          field="title"
        />
        <Input
          onChange={handleNewProjectInfosChange}
          label="description"
          field="description"
          textarea
        />
        <Input
          onChange={handleNewProjectInfosChange}
          label="due date"
          field="dueDate"
          type="date"
        />
      </div>
    </div>
  );
}
