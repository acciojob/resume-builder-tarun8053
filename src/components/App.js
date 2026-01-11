import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";

import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Social from "./Social";
import FinalResume from "./FinalResume";

function Pages() {
  const page = useSelector((s) => s.page);
  const dispatch = useDispatch();

  return (
    <>
    <h1>RESUME GENERATOR</h1>

      {page === 1 && <Profile />}
      {page === 2 && <Education />}
      {page === 3 && <Skills />}
      {page === 4 && <Projects />}
      {page === 5 && <Social />}
      {page === 6 && <FinalResume />}

      <button id="back" onClick={() => page > 1 && dispatch({ type: "BACK" })}>
        Back
      </button>

      <button id="next" onClick={() => page < 6 && dispatch({ type: "NEXT" })}>
        Next
      </button>

      <button
        id="save_continue"
        onClick={() => page < 6 && dispatch({ type: "NEXT" })}
      >
        Save & Continue
      </button>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}
