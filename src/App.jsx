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

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
           {/* <Home /> 
           <NamePage /> 
          <GoalPage />  
           <ActivityPage /> 
          <ProfileBodyPage /> 
          <MainPage exercise={exercise} />    */}
         <LoginPage />
      </UserContext.Provider>
    </>
  );
}

export default App;
