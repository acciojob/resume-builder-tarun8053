import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Projects() {
  const dispatch = useDispatch();
  const [proj, setProj] = useState({});

  const addProject = () => {
    if (proj.projectName && proj.techStack && proj.description) {
      dispatch({ type: "ADD_PROJECT", payload: proj });
    }
  };

  return (
    <>
      <input name="projectName" onChange={e=>setProj({...proj,projectName:e.target.value})}/>
      <input name="techStack" onChange={e=>setProj({...proj,techStack:e.target.value})}/>
      <input name="description" onChange={e=>setProj({...proj,description:e.target.value})}/>

      <button id="add_project" onClick={addProject}>Add</button>
      <button id="delete" onClick={()=>dispatch({type:"DEL_PROJECT"})}>Delete</button>
    </>
  );
}
