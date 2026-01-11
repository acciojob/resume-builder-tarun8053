import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Social() {
  const dispatch = useDispatch();
  const [social, setSocial] = useState("");

  return (
    <>
      <input
        type="url"
        name="Social"
        placeholder="Social Media URL"
        onChange={(e) => setSocial(e.target.value)}
      />

      <button
        id="add_social"
        onClick={() =>
          dispatch({ type: "ADD_SOCIAL", payload: social })
        }
      >
        Add
      </button>
    </>
  );
}
