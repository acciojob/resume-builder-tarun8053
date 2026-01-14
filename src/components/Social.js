import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Social() {
  const dispatch = useDispatch();
  const [social, setSocial] = useState("1");

  return (
    <>
      <h2>Add your Social Media</h2>

      <input
        name="Social"
        value={social}
        onChange={(e) => setSocial(e.target.value)}
      />

      <button
        id="add_social"
        onClick={() => dispatch({ type: "ADD_SOCIAL", payload: social })}
      >
        Add
      </button>
    </>
  );
}
