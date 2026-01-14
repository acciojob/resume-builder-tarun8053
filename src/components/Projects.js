import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Projects() {
  const dispatch = useDispatch();

  const [project, setProject] = useState({
    projectName: "",
    techStack: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Add your Projects</h2>

      <input
        name="projectName"
        value={project.projectName}
        onChange={handleChange}
      />

      <input
        name="techStack"
        value={project.techStack}
        onChange={handleChange}
      />

      <textarea
        name="description"
        value={project.description}
        onChange={handleChange}
      />

      <button
        id="add_project"
        onClick={() => dispatch({ type: "ADD_PROJECT", payload: project })}
      >
        Add
      </button>

      <button id="delete" onClick={() => dispatch({ type: "DEL_PROJECT" })}>
        Delete
      </button>
    </>
  );
}
