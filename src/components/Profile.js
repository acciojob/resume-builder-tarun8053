import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const saveProfile = () => {
    if (
      data.fname &&
      data.lname &&
      data.phone &&
      data.address &&
      data.url
    ) {
      dispatch({ type: "SAVE_PROFILE", payload: data });
    }
  };

  return (
    <>
     <h2>Add your profile details</h2>
      <input name="fname" placeholder="First Name" onChange={e=>setData({...data,fname:e.target.value})}/>
      <input name="lname" placeholder="Last Name" onChange={e=>setData({...data,lname:e.target.value})}/>
      <input name="phone" placeholder="Phone" onChange={e=>setData({...data,phone:e.target.value})}/>
      <input name="address" placeholder="Address" onChange={e=>setData({...data,address:e.target.value})}/>
      <input name="url" placeholder="Image URL" onChange={e=>setData({...data,url:e.target.value})}/>

      <button onClick={saveProfile}>Save</button>
    </>
  );
}

