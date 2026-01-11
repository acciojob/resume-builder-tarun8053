import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Projects() {
  const dispatch = useDispatch();
  const [proj, setProj] = useState({});

  return (
    <>
      <input
        type="text"
        name="projectName"
        placeholder="Project Name"
        onChange={(e) =>
          setProj({ ...proj, projectName: e.target.value })
        }
      />

      <input
        type="text"
        name="techStack"
        placeholder="Tech Stack"
        onChange={(e) =>
          setProj({ ...proj, techStack: e.target.value })
        }
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={(e) =>
          setProj({ ...proj, description: e.target.value })
        }
      />

      <button
        id="add_project"
        onClick={() =>
          dispatch({ type: "ADD_PROJECT", payload: proj })
        }
      >
        Add
      </button>

      <button
        id="delete"
        onClick={() =>
          dispatch({ type: "DEL_PROJECT" })
        }
      >
        Delete
      </button>
    </>
  );
}
