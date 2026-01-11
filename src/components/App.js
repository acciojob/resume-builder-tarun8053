
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import React from "react";

import Profile from "./Profile/Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Social from "./Social";
import FinalResume from "./FinalResume";

function Pages() {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  return (
    <>
      {/* ===== PAGE RENDERING ===== */}
      {page === 1 && <Profile />}
      {page === 2 && <Education />}
      {page === 3 && <Skills />}
      {page === 4 && <Projects />}
      {page === 5 && <Social />}
      {page === 6 && <FinalResume />}

      {/* ===== NAVIGATION BUTTONS ===== */}
      <div style={{ marginTop: "20px" }}>
        <button
          id="back"
          onClick={() => {
            if (page > 1) {
              dispatch({ type: "BACK" });
            }
          }}
        >
          Back
        </button>

        <button
          id="next"
          onClick={() => {
            if (page < 6) {
              dispatch({ type: "NEXT" });
            }
          }}
        >
          Next
        </button>

        <button
          id="save_continue"
          onClick={() => {
            if (page < 6) {
              dispatch({ type: "NEXT" });
            }
          }}
        >
          Save & Continue
        </button>
      </div>
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
