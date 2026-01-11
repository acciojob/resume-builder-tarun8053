import React from "react";
import { useSelector } from "react-redux";

export default function FinalResume() {
  const data = useSelector((state) => state);

  return (
    <>
      <h2>Final Resume</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
