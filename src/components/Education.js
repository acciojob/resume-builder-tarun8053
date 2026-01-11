import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Education() {
  const dispatch = useDispatch();
  const [edu, setEdu] = useState({});

  return (
    <>
      <input
        type="text"
        name="courseName"
        placeholder="Course Name"
        onChange={(e) =>
          setEdu({ ...edu, courseName: e.target.value })
        }
      />

      <input
        type="number"
        name="completionYear"
        placeholder="Completion Year"
        onChange={(e) =>
          setEdu({ ...edu, completionYear: e.target.value })
        }
      />

      <input
        type="text"
        name="college"
        placeholder="College Name"
        onChange={(e) =>
          setEdu({ ...edu, college: e.target.value })
        }
      />

      <input
        type="number"
        name="percentage"
        placeholder="Percentage"
        onChange={(e) =>
          setEdu({ ...edu, percentage: e.target.value })
        }
      />

      <button
        id="add_education"
        onClick={() =>
          dispatch({ type: "ADD_EDU", payload: edu })
        }
      >
        Add
      </button>

      <button
        id="delete"
        onClick={() => dispatch({ type: "DEL_EDU" })}
      >
        Delete
      </button>
    </>
  );
}
