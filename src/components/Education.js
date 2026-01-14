import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

export default function Education() {
  const dispatch = useDispatch();

  const [edu, setEdu] = useState({
    courseName: "",
    completionYear: "",
    college: "",
    percentage: "",
  });

  const handleChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  };

  const addEdu = () => {
    if (edu.courseName && edu.completionYear && edu.college && edu.percentage) {
      dispatch({ type: "ADD_EDU", payload: edu });
    }
  };

  return (
    <>
      <h2>Add your Education Details</h2>

      <div className="makeStyles-instance-16">
        {"1"}

        <input name="courseName" value={edu.courseName} onChange={handleChange} />
        <input
          name="completionYear"
          value={edu.completionYear}
          onChange={handleChange}
        />
        <input name="college" value={edu.college} onChange={handleChange} />
        <input
          name="percentage"
          value={edu.percentage}
          onChange={handleChange}
        />

        <div className="makeStyles-footer-15">
          <Button variant="contained" id="add_education" onClick={addEdu}>
            Add
          </Button>

          <Button
            variant="outlined"
            id="delete"
            onClick={() => dispatch({ type: "DEL_EDU" })}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}
