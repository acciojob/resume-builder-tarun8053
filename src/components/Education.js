import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Education() {
  const dispatch = useDispatch();
  const [edu, setEdu] = useState({});

  const addEdu = () => {
    if (
      edu.courseName &&
      edu.completionYear &&
      edu.college &&
      edu.percentage
    ) {
      dispatch({ type: "ADD_EDU", payload: edu });
    }
  };

  return (
    <>
      <input name="courseName" onChange={e=>setEdu({...edu,courseName:e.target.value})}/>
      <input name="completionYear" onChange={e=>setEdu({...edu,completionYear:e.target.value})}/>
      <input name="college" onChange={e=>setEdu({...edu,college:e.target.value})}/>
      <input name="percentage" onChange={e=>setEdu({...edu,percentage:e.target.value})}/>

      <button id="add_education" onClick={addEdu}>Add</button>
      <button id="delete" onClick={()=>dispatch({type:"DEL_EDU"})}>Delete</button>
    </>
  );
}
