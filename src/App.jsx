import { useState } from "react";
import "./App.css";
import UserContext from "./contexts/userContexts.jsx";
import CreateExerPage from "./pages/CreateExerPage.jsx";
// import GoalPage from "./pages/GoalPage.jsx";
// import NamePage from "./pages/NamePage.jsx";
// import Thankspage from "./pages/Thankspage.jsx";
// import InfoUser from "./pages/Infouser.jsx";
// import AboutUs from "./pages/AboutUs.jsx";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {/* <NamePage />
        <GoalPage />
        <Thankspage />
        <InfoUser /> */}
        {/* <AboutUs /> */}
        <CreateExerPage />
      </UserContext.Provider>
    </>
  );
}

export default App;
