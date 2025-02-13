import { useState } from "react";
import "./App.css";
import UserContext from "./contexts/userContexts.jsx";
import ProfileBodyPage from "./pages/ProfileBodyPage.jsx";
import Home from "./pages/Home.jsx";
import ActivityPage from "./pages/ActivityPage.jsx";
import GoalPage from "./pages/GoalPage.jsx";
import NamePage from "./pages/NamePage.jsx";


function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}> 
        <ProfileBodyPage />
        
      </UserContext.Provider>
    </>
  );
}

export default App;
