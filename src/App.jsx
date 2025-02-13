import { useState } from "react";
import "./App.css";
import UserContext from "./contexts/userContexts.jsx";
import GoalPage from "./pages/GoalPage.jsx";
import NamePage from "./pages/NamePage.jsx";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}> 
        <NamePage />
        <GoalPage />
      </UserContext.Provider>
    </>
  );
}

export default App;
