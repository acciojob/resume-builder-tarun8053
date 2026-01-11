import React, { useState } from "react";

function App() {
  const [skillsCount, setSkillsCount] = useState("");
  const [projectCount, setProjectCount] = useState("");
  const [socialCount, setSocialCount] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* MAIN HEADING */}
      <h1>RESUME GENERATOR</h1>

      {/* PROFILE SECTION */}
      <section>
        <h2>Add your profile details</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
      </section>

      {/* EDUCATION SECTION */}
      <section>
        <h2>Add your Education Details</h2>
        <input type="text" placeholder="College Name" />
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="Year of Passing" />
      </section>

      {/* SKILLS SECTION */}
      <section>
        <h2>Add your Skills</h2>
        <input
          type="number"
          value={skillsCount}
          onChange={(e) => setSkillsCount(e.target.value)}
        />
      </section>

      {/* PROJECTS SECTION */}
      <section>
        <h2>Add your Mini Projects</h2>
        <input
          type="number"
          value={projectCount}
          onChange={(e) => setProjectCount(e.target.value)}
        />
      </section>

      {/* SOCIAL MEDIA SECTION */}
      <section>
        <h2>Add your Social Media Links</h2>
        <input
          type="number"
          value={socialCount}
          onChange={(e) => setSocialCount(e.target.value)}
        />
      </section>
    </div>
  );
}

export default App;
