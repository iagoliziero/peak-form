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

import ExerciseProvider from "./contexts/ExerciseContext.jsx";
import SignIn from "./pages/SignInPage.jsx";



function App() {
  const [nameUser, setNameUser] = useState("");

  
  const clientId = "274780333869-3upraqeb95j68muct6t8t5nma280jqv2.apps.googleusercontent.com";

  return (
    <>
     
    <GoogleOAuthProvider clientId={clientId}>
      <UserContext.Provider value={{ nameUser, setNameUser }}>
           
        {/* <SignInPage /> */}
           {/* <Home />    */}
             <LoginPage /> 
        </UserContext.Provider>
      </GoogleOAuthProvider>

    </>
  );
}

export default App;
