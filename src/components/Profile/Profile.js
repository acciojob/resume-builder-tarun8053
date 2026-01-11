import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  return (
    <>
      <input
        type="text"
        name="fname"
        placeholder="First Name"
        onChange={(e) => setData({ ...data, fname: e.target.value })}
      />

      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        onChange={(e) => setData({ ...data, lname: e.target.value })}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={(e) => setData({ ...data, address: e.target.value })}
      />

      <input
        type="url"
        name="url"
        placeholder="Profile Image URL"
        onChange={(e) => setData({ ...data, url: e.target.value })}
      />

      <button
        onClick={() =>
          dispatch({ type: "SAVE_PROFILE", payload: data })
        }
      >
        Save
      </button>
    </>
  );
}
