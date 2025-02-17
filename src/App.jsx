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




function App() {
  const [user, setUser] = useState("");

  const [exercise, setExercise] = useState([
    {
      id: 1,
      title: "Supino Reto",
      qtdSeries: "4 séries",
      reps: "10-10 Reps",
      tecAvan: "Drop-set",
      intensidade: "pesado",
    },
    {
      id: 2,
      title: "Agachamento",
      qtdSeries: "4 séries",
      reps: "12-12 Reps",
      tecAvan: "Pausa Isométrica",
      intensidade: "pesado",
    },
    {
      id: 3,
      title: "Puxada",
      qtdSeries: "4 séries",
      reps: "10-10 Reps",
      tecAvan: "Superset",
      intensidade: "moderado",
    },
    {
      id: 4,
      title: "Leg Press",
      qtdSeries: "4 séries",
      reps: "12-12 Reps",
      tecAvan: "Pausa Descanso",
      intensidade: "pesado",
    },
    {
      id: 5,
      title: "Abdutora",
      qtdSeries: "4 séries",
      reps: "15-15 Reps",
      tecAvan: "Drop-set",
      intensidade: "leve",
    }
  ]);

  const clientId = "274780333869-3upraqeb95j68muct6t8t5nma280jqv2.apps.googleusercontent.com";

  return (
    <>
    <GoogleOAuthProvider clientId={clientId}>
      <UserContext.Provider value={{ user, setUser }}>
          <ProfilePage />  
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
         {/* <MainPage exercise={exercise} />        */}
        </UserContext.Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
