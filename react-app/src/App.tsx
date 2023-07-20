import { useState } from "react";
import { AxiosTest } from "./components/AxiosTest";

function App() {
  const [user, setUser] = useState({
    name: "Sanjay",
    address: "Kogarah",
    sex: "Male",
    skills: {
      csharp: 5,
      bootstrap: 3,
    },
  });

  // Upadate User Address
  const handleUserClick = () => {
    console.log("handle clicked");
    setUser({ ...user, address: "Nepal" });
  };

  // Update Skills
  const handleSkillClick = () => {
    console.log("handleSkillClick clicked");
    setUser({
      ...user,
      skills: {
        ...user.skills,
        csharp: 10,
      },
    });
  };

  return (
    <>
      <h1>
        {" "}
        {user.name} - {user.address} - {user.sex}{" "}
      </h1>
      <h2> Skills - CSharp: {user.skills.csharp}</h2>
      <button onClick={handleUserClick}>Update User </button>
      <button onClick={handleSkillClick}>Update Skill </button>

      <AxiosTest />
    </>
  );
}

export default App;
