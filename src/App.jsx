import { useState } from "react";
import "./App.css";
import UserContext from "./contexts/userContexts.jsx";
import GoalPage from "./pages/GoalPage.jsx";
import NamePage from "./pages/NamePage.jsx";
import Home from "./pages/Home.jsx";
import ActivityPage from "./pages/ActivityPage.jsx"
import ProfileBodyPage from "./pages/ProfileBodyPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/Login.jsx";
import Thankspage from "./pages/ThanksPage.jsx";
import InfoUserPage from "./pages/InfoUserPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ExerciseProvider from "./contexts/ExerciseContext.jsx";
import BasalPage from "./pages/BasalPage.jsx";
import AboutUs from "./pages/AbotUs.jsx";
import TimerPage from "./pages/TimerPage.jsx";
import CreateExercisePage from "./pages/CreateExercisePage.jsx";


function App() {
  const [nameUser, setNameUser] = useState("");

  
  const clientId = "274780333869-3upraqeb95j68muct6t8t5nma280jqv2.apps.googleusercontent.com";

  return (
    <>
    <ExerciseProvider> 
    <GoogleOAuthProvider clientId={clientId}>
      <UserContext.Provider value={{ nameUser, setNameUser }}>
           
        {/* <SignInPage /> */}
          {/* <Home />   */}
            {/* <NamePage /> 
           <Thankspage /> *
           <InfoUserPage />
           <GoalPage />  
           <ActivityPage /> 
          <ProfileBodyPage /> 
          <LoginPage />
          */}
          {/* <MainPage />         */}
          {/* <BasalPage /> */}
           {/* <AboutUs />  */}
               {/* <ProfilePage />  */}
               {/* <TimerPage /> */}
               <CreateExercisePage />
        </UserContext.Provider>
      </GoogleOAuthProvider>
      </ExerciseProvider>
    </>
  );
}

export default App;
