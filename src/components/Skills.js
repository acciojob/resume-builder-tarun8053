import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Skills() {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("1"); // ✅ default 1

  return (
    <>
      <h2>Add your Skills</h2>

      <input
        name="skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button
        id="add_skill"
        onClick={() => skill && dispatch({ type: "ADD_SKILL", payload: skill })}
      >
        Add
      </button>

      <button id="delete_skill" onClick={() => dispatch({ type: "DEL_SKILL" })}>
        Delete
      </button>
    </>
  );
}
