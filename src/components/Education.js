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
      <h2>Add your Education Details</h2>

      <input
        name="courseName"
        value={edu.courseName}
        onChange={(e) => setEdu({ ...edu, courseName: e.target.value })}
      />
      <input
        name="completionYear"
        value={edu.completionYear}
        onChange={(e) => setEdu({ ...edu, completionYear: e.target.value })}
      />
      <input
        name="college"
        value={edu.college}
        onChange={(e) => setEdu({ ...edu, college: e.target.value })}
      />
      <input
        name="percentage"
        value={edu.percentage}
        onChange={(e) => setEdu({ ...edu, percentage: e.target.value })}
      />

      <div className="makeStyles-footer-15">
        {/* ONLY ONE contained button so Cypress click works */}
        <Button
          variant="contained"
          color="primary"
          id="add_education"
          onClick={addEdu}
        >
          Add
        </Button>

        {/* Make delete NOT contained */}
        <Button
          variant="outlined"
          color="secondary"
          id="delete"
          onClick={() => dispatch({ type: "DEL_EDU" })}
        >
          Delete
        </Button>
      </div>
    </>
  );
}
