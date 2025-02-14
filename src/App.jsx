import { useState } from "react";
import "./App.css";
import UserContext from "./contexts/userContexts.jsx";
import GoalPage from "./pages/GoalPage.jsx";
import NamePage from "./pages/NamePage.jsx";
import Thankspage from "./pages/Thankspage.jsx";
import InfoUser from "./pages/Infouser.jsx";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <NamePage />
        <GoalPage />
        <Thankspage />
        <InfoUser />
      </UserContext.Provider>
    </>
  );
}

export default App;
